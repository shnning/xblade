import { proxyIframeHistory } from './proxyHistory';
import { proxyIframeLocation } from './proxyLocation';
import { proxyIframeWindow } from './proxyWindow';
import { listenIframePopStateEvent } from './listenToPopState';
import { overrideIframeScriptGlobalVars } from './script';
import { TemplateScriptObject } from '@sh.ning/import-html-entry';
import { IframeSandbox } from 'packages/xblade/src/sandbox/iframeSandbox';

export function initUrlRouting(
  iframe: HTMLIFrameElement,
  src: string,
  scripts: (TemplateScriptObject | string)[]
) {
  const iframeWindow = iframe.contentWindow as BladeElement;
  proxyIframeHistory(iframeWindow, src);
  proxyIframeLocation(iframeWindow, src);
  proxyIframeWindow(iframeWindow);
  listenIframePopStateEvent(iframeWindow);
  overrideIframeScriptGlobalVars(iframe, scripts);
}

type PluginContext = {
  sandbox: IframeSandbox;
  iframe: HTMLIFrameElement;
  shadowRoot: ShadowRoot;
  overlayElement: HTMLElement;
  scripts: (TemplateScriptObject | string)[];
};

export function urlRoutingPlugin(context: PluginContext) {
  const { sandbox, iframe, scripts } = context;
  const iframeWindow = iframe.contentWindow as BladeElement;
  proxyIframeHistory(iframeWindow, sandbox.src);
  proxyIframeLocation(iframeWindow, sandbox.src);
  proxyIframeWindow(iframeWindow);
  const removeCallback = listenIframePopStateEvent(iframeWindow);
  overrideIframeScriptGlobalVars(iframe, scripts);

  return {
    onDestroy: {
      name: 'clearPulginEffect',
      fn: removeCallback,
    },
  };
}
