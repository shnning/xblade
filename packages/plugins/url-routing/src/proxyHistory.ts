import { XBLADE_APP_URL, XBLADE_PROPERTY } from './constants';
import { getQueryParam, setPath, setQueryParam } from '@xblade/shared';

function createReplaceOrPushStateFunc(
  src: string,
  key: 'replaceState' | 'pushState'
) {
  return function (data: any, unused: string, url?: string | URL | null) {
    let pathname;
    const xbladeUrl = getQueryParam(location.href, XBLADE_APP_URL) || src;

    try {
      pathname = new URL(url).pathname;
    } catch {
      pathname = url;
    }
    if (pathname === new URL(xbladeUrl).pathname) {
      return;
    }

    if (typeof url === 'string') {
      const newBladeAppUrl = setPath(src, pathname as string);
      const newUrl = setQueryParam(
        location.href,
        XBLADE_APP_URL,
        newBladeAppUrl
      );

      history[key](data, unused, newUrl);
    }
  };
}

export function proxyIframeHistory(iframeWindow: BladeElement, src: string) {
  iframeWindow[XBLADE_PROPERTY.History] = new Proxy({} as any, {
    get(_, key) {
      if (key === 'replaceState' || key === 'pushState') {
        return createReplaceOrPushStateFunc(src, key);
      }
      if (typeof history[key as keyof History] === 'function')
        return history[key as keyof History].bind(history);

      return history[key as keyof History];
    },
  });
}
