export function listenIframePopStateEvent(iframeWindow: BladeElement) {
  function popStateEventHandler(e: PopStateEvent) {
    iframeWindow.dispatchEvent(new PopStateEvent('popstate', e.state)); 
  }

  window.addEventListener('popstate', popStateEventHandler);

  return () => {
    window.removeEventListener('popstate', popStateEventHandler);
  };
}
