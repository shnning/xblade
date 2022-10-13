export function setStyleForTargetElement(
  iframe: HTMLIFrameElement,
  shadowRoot: ShadowRoot
) {
  setTimeout(() => {
    iframe.contentDocument
      .querySelectorAll('style')
      .forEach((originStyleElement) => {
        const styleSheetElement = iframe.contentDocument.createElement('style');
        styleSheetElement.innerHTML = originStyleElement.innerHTML.replaceAll(
          ':root',
          ':host'
        );

        shadowRoot.appendChild(styleSheetElement);
      });
  }, 1000);
}

export function insertOriginNodeStyle(iframe: HTMLIFrameElement) {
  const styleSheetElement = iframe.contentDocument.createElement('style');
  iframe.contentDocument.head.appendChild(styleSheetElement);
  styleSheetElement.sheet.insertRule(
    // display none会导致antd modal关闭时相关dom节点不能设置display
    // `[data-blade-visibility=true] { display: none }`
    '[data-xblade-visibility=true] { opacity: 0 !important; visibility: hidden !important;  }'
  );
}
