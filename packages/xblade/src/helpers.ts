export function resetIframeStyle(iframe: HTMLIFrameElement) {
  iframe.style.border = '0';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
}

export function getNeedToObservedElSelectors(el: HTMLElement) {
  return (el.getAttribute('selectors') as string)?.split(' ') || [];
}

export function resetIframeStaticResOrigin(
  iframe: HTMLIFrameElement,
  origin: string
) {
  const baseElement = iframe.contentDocument.createElement('base');
  baseElement.href = origin;
  iframe.contentDocument.head.appendChild(baseElement);
}
