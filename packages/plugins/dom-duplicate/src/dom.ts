import { cloneEvents } from './event';

export function hasTargetSelector(node: Node, selectors: string[]) {
  let currNode = node;

  const childMatched = selectors.find((selector) => {
    const test = (node as HTMLElement)?.querySelector?.(selector);
    return !!test;
  });

  if (childMatched) return true;

  while (currNode) {
    if (
      selectors.find((selector) =>
        (currNode as HTMLElement)?.matches?.(selector)
      )
    ) {
      return true;
    }
    currNode = currNode.parentNode;
  }

  return false;
}

export function cloneFakeNodeConstruct(node: Node, cloneNode: Node) {
  let originNode = node;
  let currNode = cloneNode;

  while ((originNode.parentNode as HTMLElement).tagName !== 'BODY') {
    const cloneNodeParent = originNode.parentNode.cloneNode();
    originNode.parentNode.alternation = cloneNodeParent;
    cloneNodeParent.appendChild(currNode);
    originNode = originNode.parentNode;
    currNode = currNode.parentNode;
  }

  return currNode;
}

export function cloneNodeAndEvents(node: Node): Node {
  const cloneNode = node.cloneNode(true);
  cloneEvents(node, cloneNode);
  return cloneNode;
}

export function hideOriginElement(element: HTMLElement) {
  (element as HTMLElement).dataset.xbladeVisibility = 'true';
}

export function updateTargetElement(node: Node, cloneNode: Node) {
  const alternativeChildren = node.parentNode.alternation.childNodes;
  const children = node.parentNode.childNodes;

  const nodeIndex = Array.from(children).findIndex((child) => child === node);

  if (nodeIndex === children.length - 1) {
    node.parentNode.alternation.appendChild(cloneNode);
  } else {
    node.parentNode.alternation.insertBefore(
      cloneNode,
      alternativeChildren[nodeIndex]
    );
  }
}

export function mountTargetElement(
  node: Node,
  cloneNode: Node,
  overlayEl: HTMLElement
) {
  const fakeRoot = cloneFakeNodeConstruct(node, cloneNode);
  try {
    overlayEl.appendChild(fakeRoot);
  } catch (error) {
    console.log('fake error: ', error);
  }
}
