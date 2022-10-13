import { hasOwn, ReadonlyKeys } from '@xblade/shared';
import { XBLADE_PROPERTY } from './constants';

type BladeElementKeys = keyof BladeElement;
type BladeElementKeysWithoutReadonly = Exclude<
  BladeElementKeys,
  ReadonlyKeys<BladeElement>
>;

const iframeWindowPropGetters = {
  location: (iframeWindow: BladeElement) =>
    iframeWindow[XBLADE_PROPERTY.Location],
  history: (iframeWindow: BladeElement) => iframeWindow[XBLADE_PROPERTY.History],
};

export function proxyIframeWindow(iframeWindow: BladeElement) {
  iframeWindow[XBLADE_PROPERTY.Window] = new Proxy({} as any, {
    get(_, key) {
      const propGetter =
        iframeWindowPropGetters[key as keyof typeof iframeWindowPropGetters];
      if (hasOwn(iframeWindowPropGetters, key) && propGetter) {
        return propGetter(iframeWindow);
      }

      if (typeof iframeWindow[key as BladeElementKeys] === 'function') {
        return iframeWindow[key as BladeElementKeys].bind(iframeWindow);
      }

      return iframeWindow[key as BladeElementKeys];
    },
    set(_, key, value) {
      iframeWindow[key as BladeElementKeysWithoutReadonly] = value;
      return true;
    },
  });
}
