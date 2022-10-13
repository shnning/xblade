import { REACT_DOM_PROP } from './constants';

export function overrideIframeAddEventListener(iframe: HTMLIFrameElement) {
  const originAddEventListener = (iframe.contentWindow as typeof window)
    .EventTarget.prototype.addEventListener;

  const addEventListener: EventTarget['addEventListener'] = function (
    type,
    listener,
    options
  ) {
    // @ts-ignore
    if (this.listeners) {
      // @ts-ignore
      this.listeners.push({
        type,
        listener,
        options,
      });
    } else {
      // @ts-ignore
      this.listeners = [
        {
          type,
          listener,
          options,
        },
      ];
    }

    // @ts-ignore
    originAddEventListener.call(this, type, listener, options);
  };

  (iframe.contentWindow as any).EventTarget.prototype.addEventListener =
    addEventListener;
}

function getReactDomListeners(node: HTMLElement) {
  const reactFiberPropsKey = Object.keys(node).find((key) =>
    key.includes(REACT_DOM_PROP)
  );
  const listeners: any[] = [];

  if (!reactFiberPropsKey) {
    return listeners;
  }

  // @ts-ignore
  const props = node[reactFiberPropsKey];

  for (const key in props) {
    if (key.slice(0, 2) === 'on') {
      const eventName = key.slice(2).toLocaleLowerCase();
      const eventCallback = props[key];
      listeners.push({
        type: eventName,
        listener: eventCallback,
      });
    }
  }

  return listeners;
}

export function cloneEvents(node: Node, cloneNode: Node) {
  if (!node && !cloneNode) {
    return;
  }
  node.alternation = cloneNode;
  const listenerAndNodePairs = [
    {
      node,
      listeners: [
        ...getReactDomListeners(node as HTMLElement),
        ...(node.listeners || []),
      ],
    },
  ];

  if (listenerAndNodePairs) {
    for (const pair of listenerAndNodePairs) {
      const { node, listeners } = pair;
      for (const l of listeners) {
        cloneNode.addEventListener(
          l.type,
          (e: Event) => {
            // react根节点监听事件捕获阶段，调用stopPropagation会导致事件无法传下去，所以此处特殊处理
            if (typeof l.options !== 'boolean' || !l) {
              e.stopPropagation();
            }
            node.dispatchEvent(new (e.constructor as any)(e.type, e));
          },
          l.options
        );
      }
    }
  }

  for (let i = 0; i < node.childNodes.length; i++) {
    cloneEvents(node.childNodes[i], cloneNode.childNodes[i]);
  }
}
