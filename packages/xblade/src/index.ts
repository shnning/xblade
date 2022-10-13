// TODO:
// 1. 子应用中的资源文件地址错误 通过在header中添加base元素解决
// 2. proxy history、location、window对象，实现子应用切换路由
// 3. 子应用弹窗

import { IframeSandbox } from './sandbox/iframeSandbox';
import { Sandbox } from './sandbox/sandbox';

class XBlade extends HTMLElement {
  sandbox: Sandbox;

  constructor() {
    super();
    this.initBladeStyle();
  }
  //当 custom element首次被插入文档DOM时，被调用。
  connectedCallback() {
    this.sandbox = new IframeSandbox({ container: this });
    this.sandbox.render();
  }
  // 当 custom element从文档DOM中删除时，被调用。
  disconnectedCallback() {
    this.sandbox.destroy();
  }
  // 当 custom element被移动到新的文档时，被调用。
  // adoptedCallback() {}
  // 当 custom element增加、删除、修改自身属性时，被调用。
  // attributeChangedCallback() {}

  private initBladeStyle() {
    this.style.display = 'block';
  }
}

function registerBladeElement() {
  customElements.define('xblade-edge', XBlade);
}

registerBladeElement();

export default XBlade;
