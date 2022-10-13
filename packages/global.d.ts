import { XBLADE_PROPERTY } from './constants';

declare global {
  interface Node {
    listeners: any[] | null;
    alternation: Node;
    xx: any[] | null;
  }

  interface BladeElement extends Window {
    [XBLADE_PROPERTY.History]: any;
    [XBLADE_PROPERTY.Location]: any;
    [XBLADE_PROPERTY.Window]: any;
  }
}
