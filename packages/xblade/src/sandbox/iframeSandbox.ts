import { domDuplicatePlugin } from '@xblade/plugins/dom-duplicate';
import { urlRoutingPlugin } from '@xblade/plugins/url-routing';
import { Hook } from '@xblade/plugin-driver';
import { parseHtml } from '@sh.ning/import-html-entry';
import XBlade from '..';
import {
  resetIframeStyle,
  getNeedToObservedElSelectors,
  resetIframeStaticResOrigin,
} from '../helpers';
import { Sandbox } from '.';

class IframeSandbox extends Sandbox {
  container: XBlade;
  observer: MutationObserver;
  hooks: Hook;
  iframeElement: HTMLIFrameElement;
  src: string;
  href: URL;
  selectors: string[];

  constructor(options: { container: XBlade }) {
    super();

    this.container = options.container;
    this.hooks = new Hook(['onIframeLoad', 'onDestroy']);
    this.iframeElement = document.createElement('iframe');
    this.src = options.container.getAttribute('src') as string;
    this.href = new URL(this.src);
    this.selectors = getNeedToObservedElSelectors(options.container);
    this.registerPlugin();
  }

  registerPlugin() {
    [domDuplicatePlugin, urlRoutingPlugin].forEach((plugin) =>
      this.hooks.add('onIframeLoad', { name: plugin.name, fn: plugin })
    );
  }

  render() {
    const { container, src, href } = this;
    const iframe = document.createElement('iframe');
    resetIframeStyle(iframe);

    const shadowRoot = container.attachShadow({ mode: 'open' });

    const overlayElement = document.createElement('div');
    shadowRoot.appendChild(overlayElement);

    parseHtml(src, {
      fetch: {
        fn: (...args) => {
          return window.fetch(args[0]);
        },
      },
    }).then((res) => {
      const { template, scripts } = res;
      iframe.srcdoc = template;

      iframe.onload = () => {
        resetIframeStaticResOrigin(iframe, href.origin);

        const context = {
          sandbox: this,
          iframe,
          shadowRoot,
          overlayElement,
          scripts,
        };

        this.hooks.run('onIframeLoad', context);

        shadowRoot.appendChild(iframe);
      };
    });
  }

  destroy() {
    this.hooks.run('onDestroy');
  }
}

export { IframeSandbox };
