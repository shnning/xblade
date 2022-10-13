import {
  cloneNodeAndEvents,
  hasTargetSelector,
  hideOriginElement,
  mountTargetElement,
  updateTargetElement,
} from './dom';

export function attributesHandler(mutation: MutationRecord) {
  const targetElement = mutation.target.alternation as HTMLElement;
  if (targetElement) {
    const attrName = mutation.attributeName;
    const attrValue = (mutation.target as HTMLElement).getAttribute(attrName);
    targetElement.setAttribute(attrName, attrValue);
  }
}

export function addChildListHandler(
  mutation: MutationRecord,
  selectors: string[],
  overlayEl: HTMLElement
) {
  const addedNodes = mutation.addedNodes;
  for (const node of addedNodes) {
    if (hasTargetSelector(node, selectors)) {
      if (node.alternation) {
        return;
      }

      const cloneNode = cloneNodeAndEvents(node);
      hideOriginElement(node as HTMLElement);

      if (node.parentNode.alternation) {
        updateTargetElement(node, cloneNode);
      } else {
        mountTargetElement(node, cloneNode, overlayEl);
      }
    }
  }
}

export function removeChildListHandler(mutation: MutationRecord) {
  const removedNodes = mutation.removedNodes as unknown as HTMLElement[];
  for (const node of removedNodes) {
    if (node.alternation) {
      node.alternation.parentNode.removeChild(node.alternation);
      node.alternation = null;
    }
  }
}
