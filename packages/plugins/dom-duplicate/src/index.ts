import { TemplateScriptObject } from '@sh.ning/import-html-entry';
import { IframeSandbox } from 'packages/xblade/src/sandbox/iframeSandbox';
import { createTargetElementObserver } from './elementObserver';
import { overrideIframeAddEventListener } from './event';
import { insertOriginNodeStyle, setStyleForTargetElement } from './style';

export function initDomDuplicate(
  sandbox: IframeSandbox,
  iframe: HTMLIFrameElement,
  shadowRoot: ShadowRoot,
  selectors: string[],
  overlayElement: HTMLElement
) {
  insertOriginNodeStyle(iframe);
  overrideIframeAddEventListener(iframe);
  setStyleForTargetElement(iframe, shadowRoot);

  sandbox.observer = createTargetElementObserver(
    iframe,
    selectors,
    overlayElement
  );
}

type PluginContext = {
  sandbox: IframeSandbox;
  iframe: HTMLIFrameElement;
  shadowRoot: ShadowRoot;
  overlayElement: HTMLElement;
  scripts: (TemplateScriptObject | string)[];
};

export function domDuplicatePlugin(context: PluginContext) {
  const { sandbox, iframe, shadowRoot, overlayElement } = context;
  insertOriginNodeStyle(iframe);
  overrideIframeAddEventListener(iframe);
  setStyleForTargetElement(iframe, shadowRoot);

  sandbox.observer = createTargetElementObserver(
    iframe,
    sandbox.selectors,
    overlayElement
  );

  return {
    onDestroy: {
      name: 'clearPluginEffect',
      fn: () => {
        sandbox.observer.disconnect();
      },
    },
  };
}
