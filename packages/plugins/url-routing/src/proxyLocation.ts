import { getQueryParam } from '@xblade/shared';
import { XBLADE_APP_URL, XBLADE_PROPERTY } from './constants';

function getHrefProp(url: string, propName: string) {
  const bladeAppUrl = getQueryParam(location.href, XBLADE_APP_URL) || url;
  const bladeAppUrlObj = new URL(bladeAppUrl);
  return bladeAppUrlObj[propName as keyof URL];
}

export function proxyIframeLocation(iframeWindow: BladeElement, src: string) {
  iframeWindow[XBLADE_PROPERTY.Location] = new Proxy({} as any, {
    get(_, key) {
      if (key === 'assign') {
        return location[key].bind(location);
      }
      if (typeof key === 'string') {
        return getHrefProp(src, key);
      }
      return location[key as unknown as keyof Location];
    },
    set(target, key, value) {
      return Reflect.set(target, key, value);
    },
  });
}
