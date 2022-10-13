function _typeof$1(obj) {
  "@babel/helpers - typeof";

  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof$1(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var REACT_DOM_PROP = '__reactProps';

function overrideIframeAddEventListener(iframe) {
  var originAddEventListener = iframe.contentWindow.EventTarget.prototype.addEventListener;

  var addEventListener = function addEventListener(type, listener, options) {
    if (this.listeners) {
      this.listeners.push({
        type: type,
        listener: listener,
        options: options
      });
    } else {
      this.listeners = [{
        type: type,
        listener: listener,
        options: options
      }];
    }

    originAddEventListener.call(this, type, listener, options);
  };

  iframe.contentWindow.EventTarget.prototype.addEventListener = addEventListener;
}

function getReactDomListeners(node) {
  var reactFiberPropsKey = Object.keys(node).find(function (key) {
    return key.includes(REACT_DOM_PROP);
  });
  var listeners = [];

  if (!reactFiberPropsKey) {
    return listeners;
  }

  var props = node[reactFiberPropsKey];

  for (var key in props) {
    if (key.slice(0, 2) === 'on') {
      var eventName = key.slice(2).toLocaleLowerCase();
      var eventCallback = props[key];
      listeners.push({
        type: eventName,
        listener: eventCallback
      });
    }
  }

  return listeners;
}

function cloneEvents(node, cloneNode) {
  if (!node && !cloneNode) {
    return;
  }

  node.alternation = cloneNode;
  var listenerAndNodePairs = [{
    node: node,
    listeners: [].concat(_toConsumableArray(getReactDomListeners(node)), _toConsumableArray(node.listeners || []))
  }];

  if (listenerAndNodePairs) {
    var _iterator = _createForOfIteratorHelper(listenerAndNodePairs),
        _step;

    try {
      var _loop = function _loop() {
        var pair = _step.value;
        var node = pair.node,
            listeners = pair.listeners;

        var _iterator2 = _createForOfIteratorHelper(listeners),
            _step2;

        try {
          var _loop2 = function _loop2() {
            var l = _step2.value;
            cloneNode.addEventListener(l.type, function (e) {
              if (typeof l.options !== 'boolean' || !l) {
                e.stopPropagation();
              }

              node.dispatchEvent(new e.constructor(e.type, e));
            }, l.options);
          };

          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            _loop2();
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  for (var i = 0; i < node.childNodes.length; i++) {
    cloneEvents(node.childNodes[i], cloneNode.childNodes[i]);
  }
}

function hasTargetSelector(node, selectors) {
  var currNode = node;
  var childMatched = selectors.find(function (selector) {
    var _node$querySelector;

    var test = node === null || node === void 0 ? void 0 : (_node$querySelector = node.querySelector) === null || _node$querySelector === void 0 ? void 0 : _node$querySelector.call(node, selector);
    return !!test;
  });
  if (childMatched) return true;

  while (currNode) {
    if (selectors.find(function (selector) {
      var _currNode, _currNode$matches;

      return (_currNode = currNode) === null || _currNode === void 0 ? void 0 : (_currNode$matches = _currNode.matches) === null || _currNode$matches === void 0 ? void 0 : _currNode$matches.call(_currNode, selector);
    })) {
      return true;
    }

    currNode = currNode.parentNode;
  }

  return false;
}

function cloneFakeNodeConstruct(node, cloneNode) {
  var originNode = node;
  var currNode = cloneNode;

  while (originNode.parentNode.tagName !== 'BODY') {
    var cloneNodeParent = originNode.parentNode.cloneNode();
    originNode.parentNode.alternation = cloneNodeParent;
    cloneNodeParent.appendChild(currNode);
    originNode = originNode.parentNode;
    currNode = currNode.parentNode;
  }

  return currNode;
}

function cloneNodeAndEvents(node) {
  var cloneNode = node.cloneNode(true);
  cloneEvents(node, cloneNode);
  return cloneNode;
}

function hideOriginElement(element) {
  element.dataset.xbladeVisibility = 'true';
}

function updateTargetElement(node, cloneNode) {
  var alternativeChildren = node.parentNode.alternation.childNodes;
  var children = node.parentNode.childNodes;
  var nodeIndex = Array.from(children).findIndex(function (child) {
    return child === node;
  });

  if (nodeIndex === children.length - 1) {
    node.parentNode.alternation.appendChild(cloneNode);
  } else {
    node.parentNode.alternation.insertBefore(cloneNode, alternativeChildren[nodeIndex]);
  }
}

function mountTargetElement(node, cloneNode, overlayEl) {
  var fakeRoot = cloneFakeNodeConstruct(node, cloneNode);

  try {
    overlayEl.appendChild(fakeRoot);
  } catch (error) {
    console.log('fake error: ', error);
  }
}

function attributesHandler(mutation) {
  var targetElement = mutation.target.alternation;

  if (targetElement) {
    var attrName = mutation.attributeName;
    var attrValue = mutation.target.getAttribute(attrName);
    targetElement.setAttribute(attrName, attrValue);
  }
}

function addChildListHandler(mutation, selectors, overlayEl) {
  var addedNodes = mutation.addedNodes;

  var _iterator = _createForOfIteratorHelper(addedNodes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var node = _step.value;

      if (hasTargetSelector(node, selectors)) {
        if (node.alternation) {
          return;
        }

        var cloneNode = cloneNodeAndEvents(node);
        hideOriginElement(node);

        if (node.parentNode.alternation) {
          updateTargetElement(node, cloneNode);
        } else {
          mountTargetElement(node, cloneNode, overlayEl);
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function removeChildListHandler(mutation) {
  var removedNodes = mutation.removedNodes;

  var _iterator2 = _createForOfIteratorHelper(removedNodes),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var node = _step2.value;

      if (node.alternation) {
        node.alternation.parentNode.removeChild(node.alternation);
        node.alternation = null;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

function createTargetElementObserver(iframe, selectors, overlayElement) {
  var observer = new MutationObserver(function (mutationList) {
    mutationList.forEach(function (mutation) {
      switch (mutation.type) {
        case 'attributes':
          if (hasTargetSelector(mutation.target, selectors)) {
            attributesHandler(mutation);
          }

          break;

        case 'childList':
          addChildListHandler(mutation, selectors, overlayElement);
          removeChildListHandler(mutation);
          break;
      }
    });
  });
  observer.observe(iframe.contentDocument.body, {
    attributes: true,
    childList: true,
    subtree: true
  });
  return observer;
}

function setStyleForTargetElement(iframe, shadowRoot) {
  setTimeout(function () {
    iframe.contentDocument.querySelectorAll('style').forEach(function (originStyleElement) {
      var styleSheetElement = iframe.contentDocument.createElement('style');
      styleSheetElement.innerHTML = originStyleElement.innerHTML.replaceAll(':root', ':host');
      shadowRoot.appendChild(styleSheetElement);
    });
  }, 1000);
}

function insertOriginNodeStyle(iframe) {
  var styleSheetElement = iframe.contentDocument.createElement('style');
  iframe.contentDocument.head.appendChild(styleSheetElement);
  styleSheetElement.sheet.insertRule('[data-xblade-visibility=true] { opacity: 0 !important; visibility: hidden !important;  }');
}

function domDuplicatePlugin(context) {
  var sandbox = context.sandbox,
      iframe = context.iframe,
      shadowRoot = context.shadowRoot,
      overlayElement = context.overlayElement;
  insertOriginNodeStyle(iframe);
  overrideIframeAddEventListener(iframe);
  setStyleForTargetElement(iframe, shadowRoot);
  sandbox.observer = createTargetElementObserver(iframe, sandbox.selectors, overlayElement);
  return {
    onDestroy: {
      name: 'clearPluginEffect',
      fn: function fn() {
        sandbox.observer.disconnect();
      }
    }
  };
}

var XBLADE_APP_URL = 'xblade_app_url';

function setQueryParam(url, key, value) {
  var urlObj = new URL(url);
  urlObj.searchParams.set(key, value);
  return urlObj.href;
}

function getQueryParam(url, key) {
  var urlObj = new URL(url);
  return urlObj.searchParams.get(key) ? decodeURIComponent(urlObj.searchParams.get(key)) : null;
}

function setPath(url, pathname) {
  var urlObj = new URL(url);
  urlObj.pathname = pathname;
  return urlObj.href;
}

function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

function createReplaceOrPushStateFunc(src, key) {
  return function (data, unused, url) {
    var pathname;
    var xbladeUrl = getQueryParam(location.href, XBLADE_APP_URL) || src;

    try {
      pathname = new URL(url).pathname;
    } catch (_unused) {
      pathname = url;
    }

    if (pathname === new URL(xbladeUrl).pathname) {
      return;
    }

    if (typeof url === 'string') {
      var newBladeAppUrl = setPath(src, pathname);
      var newUrl = setQueryParam(location.href, XBLADE_APP_URL, newBladeAppUrl);
      history[key](data, unused, newUrl);
    }
  };
}

function proxyIframeHistory(iframeWindow, src) {
  iframeWindow["__xblade__history"] = new Proxy({}, {
    get: function get(_, key) {
      if (key === 'replaceState' || key === 'pushState') {
        return createReplaceOrPushStateFunc(src, key);
      }

      if (typeof history[key] === 'function') return history[key].bind(history);
      return history[key];
    }
  });
}

function getHrefProp(url, propName) {
  var bladeAppUrl = getQueryParam(location.href, XBLADE_APP_URL) || url;
  var bladeAppUrlObj = new URL(bladeAppUrl);
  return bladeAppUrlObj[propName];
}

function proxyIframeLocation(iframeWindow, src) {
  iframeWindow["__xblade__location"] = new Proxy({}, {
    get: function get(_, key) {
      if (key === 'assign') {
        return location[key].bind(location);
      }

      if (typeof key === 'string') {
        return getHrefProp(src, key);
      }

      return location[key];
    },
    set: function set(target, key, value) {
      return Reflect.set(target, key, value);
    }
  });
}

var iframeWindowPropGetters = {
  location: function location(iframeWindow) {
    return iframeWindow["__xblade__location"];
  },
  history: function history(iframeWindow) {
    return iframeWindow["__xblade__history"];
  }
};

function proxyIframeWindow(iframeWindow) {
  iframeWindow["__xblade__window"] = new Proxy({}, {
    get: function get(_, key) {
      var propGetter = iframeWindowPropGetters[key];

      if (hasOwn(iframeWindowPropGetters, key) && propGetter) {
        return propGetter(iframeWindow);
      }

      if (typeof iframeWindow[key] === 'function') {
        return iframeWindow[key].bind(iframeWindow);
      }

      return iframeWindow[key];
    },
    set: function set(_, key, value) {
      iframeWindow[key] = value;
      return true;
    }
  });
}

function listenIframePopStateEvent(iframeWindow) {
  function popStateEventHandler(e) {
    iframeWindow.dispatchEvent(new PopStateEvent('popstate', e.state));
  }

  window.addEventListener('popstate', popStateEventHandler);
  return function () {
    window.removeEventListener('popstate', popStateEventHandler);
  };
}

var global$1 = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};
if (typeof global$1.setTimeout === 'function') ;
if (typeof global$1.clearTimeout === 'function') ; // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js

var performance = global$1.performance || {};
performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function () {
  return new Date().getTime();
};

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2019-02-25
 * fork from https://github.com/systemjs/systemjs/blob/master/src/extras/global.js
 */


typeof navigator !== 'undefined' && navigator.userAgent.indexOf('Trident') !== -1;

function getInlineCode(match) {
  var start = match.indexOf('>') + 1;
  var end = match.lastIndexOf('<');
  return match.substring(start, end);
}

function defaultGetPublicPath(entry) {
  if (_typeof(entry) === 'object') {
    return '/';
  }

  try {
    var _URL = new URL(entry, location.href),
        origin = _URL.origin,
        pathname = _URL.pathname;

    var paths = pathname.split('/'); // 移除最后一个元素

    paths.pop();
    return "".concat(origin).concat(paths.join('/'), "/");
  } catch (e) {
    console.warn(e);
    return '';
  }
} // Detect whether browser supports `<script type=module>` or not


function isModuleScriptSupported() {
  var s = document.createElement('script');
  return 'noModule' in s;
} // RIC and shim for browsers setTimeout() without it


var requestIdleCallback = window.requestIdleCallback || function requestIdleCallback(cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

function readResAsString(response, autoDetectCharset) {
  // 未启用自动检测
  if (!autoDetectCharset) {
    return response.text();
  } // 如果没headers，发生在test环境下的mock数据，为兼容原有测试用例


  if (!response.headers) {
    return response.text();
  } // 如果没返回content-type，走默认逻辑


  var contentType = response.headers.get('Content-Type');

  if (!contentType) {
    return response.text();
  } // 解析content-type内的charset
  // Content-Type: text/html; charset=utf-8
  // Content-Type: multipart/form-data; boundary=something
  // GET请求下不会出现第二种content-type


  var charset = 'utf-8';
  var parts = contentType.split(';');

  if (parts.length === 2) {
    var _parts$1$split = parts[1].split('='),
        _parts$1$split2 = _slicedToArray(_parts$1$split, 2),
        value = _parts$1$split2[1];

    var encoding = value && value.trim();

    if (encoding) {
      charset = encoding;
    }
  } // 如果还是utf-8，那么走默认，兼容原有逻辑，这段代码删除也应该工作


  if (charset.toUpperCase() === 'UTF-8') {
    return response.text();
  } // 走流读取，编码可能是gbk，gb2312等，比如sofa 3默认是gbk编码


  return response.blob().then(function (file) {
    return new Promise(function (resolve, reject) {
      var reader = new window.FileReader();

      reader.onload = function () {
        resolve(reader.result);
      };

      reader.onerror = reject;
      reader.readAsText(file, charset);
    });
  });
}

var ALL_SCRIPT_REGEX = /(<script[\s\S]*?>)[\s\S]*?<\/script>/gi;
var SCRIPT_TAG_REGEX = /<(script)\s+((?!type=('|")text\/ng\x2Dtemplate\3)[\s\S])*?>[\s\S]*?<\/\1>/i;
var SCRIPT_SRC_REGEX = /.*\ssrc=('|")?([^>'"\s]+)/;
var SCRIPT_TYPE_REGEX = /.*\stype=('|")?([^>'"\s]+)/;
var SCRIPT_ENTRY_REGEX = /.*\sentry\s*.*/;
var SCRIPT_ASYNC_REGEX = /.*\sasync\s*.*/;
var SCRIPT_NO_MODULE_REGEX = /.*\snomodule\s*.*/;
var SCRIPT_MODULE_REGEX = /.*\stype=('|")?module('|")?\s*.*/;
var LINK_TAG_REGEX = /<(link)\s+[\s\S]*?>/ig;
var LINK_PRELOAD_OR_PREFETCH_REGEX = /\srel=('|")?(preload|prefetch)\1/;
var LINK_HREF_REGEX = /.*\shref=('|")?([^>'"\s]+)/;
var LINK_AS_FONT = /.*\sas=('|")?font\1.*/;
var STYLE_TAG_REGEX = /<style[^>]*>[\s\S]*?<\/style>/gi;
var STYLE_TYPE_REGEX = /\s+rel=('|")?stylesheet\1.*/;
var STYLE_HREF_REGEX = /.*\shref=('|")?([^>'"\s]+)/;
var HTML_COMMENT_REGEX = /<!--([\s\S]*?)-->/g;
var LINK_IGNORE_REGEX = /<link(\s+|\s+[\s\S]+\s+)ignore(\s*|\s+[\s\S]*|=[\s\S]*)>/i;
var STYLE_IGNORE_REGEX = /<style(\s+|\s+[\s\S]+\s+)ignore(\s*|\s+[\s\S]*|=[\s\S]*)>/i;
var SCRIPT_IGNORE_REGEX = /<script(\s+|\s+[\s\S]+\s+)ignore(\s*|\s+[\s\S]*|=[\s\S]*)>/i;

function hasProtocol(url) {
  return url.startsWith('//') || url.startsWith('http://') || url.startsWith('https://');
}

function getEntirePath(path, baseURI) {
  return new URL(path, baseURI).toString();
}

function isValidJavaScriptType(type) {
  var handleTypes = ['text/javascript', 'module', 'application/javascript', 'text/ecmascript', 'application/ecmascript'];
  return !type || handleTypes.indexOf(type) !== -1;
}

var genLinkReplaceSymbol = function genLinkReplaceSymbol(linkHref) {
  var preloadOrPrefetch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return "<!-- ".concat(preloadOrPrefetch ? 'prefetch/preload' : '', " link ").concat(linkHref, " replaced by import-html-entry -->");
};

var genScriptReplaceSymbol = function genScriptReplaceSymbol(scriptSrc) {
  var async = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return "<!-- ".concat(async ? 'async' : '', " script ").concat(scriptSrc, " replaced by import-html-entry -->");
};

var inlineScriptReplaceSymbol = "<!-- inline scripts replaced by import-html-entry -->";

var genIgnoreAssetReplaceSymbol = function genIgnoreAssetReplaceSymbol(url) {
  return "<!-- ignore asset ".concat(url || 'file', " replaced by import-html-entry -->");
};

var genModuleScriptReplaceSymbol = function genModuleScriptReplaceSymbol(scriptSrc, moduleSupport) {
  return "<!-- ".concat(moduleSupport ? 'nomodule' : 'module', " script ").concat(scriptSrc, " ignored by import-html-entry -->");
};
/**
 * parse the script link from the template
 * 1. collect stylesheets
 * 2. use global eval to evaluate the inline scripts
 *    see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function#Difference_between_Function_constructor_and_function_declaration
 *    see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Do_not_ever_use_eval!
 * @param tpl
 * @param baseURI
 * @stripStyles whether to strip the css links
 * @returns {{template: void | string | *, scripts: *[], entry: *}}
 */


function processTpl(tpl, baseURI, postProcessTemplate) {
  var scripts = [];
  var styles = [];
  var entry = null;
  var moduleSupport = isModuleScriptSupported();
  var template = tpl
  /*
  remove html comment first
  */
  .replace(HTML_COMMENT_REGEX, '').replace(LINK_TAG_REGEX, function (match) {
    /*
    change the css link
    */
    var styleType = !!match.match(STYLE_TYPE_REGEX);

    if (styleType) {
      var styleHref = match.match(STYLE_HREF_REGEX);
      var styleIgnore = match.match(LINK_IGNORE_REGEX);

      if (styleHref) {
        var href = styleHref && styleHref[2];
        var newHref = href;

        if (href && !hasProtocol(href)) {
          newHref = getEntirePath(href, baseURI);
        }

        if (styleIgnore) {
          return genIgnoreAssetReplaceSymbol(newHref);
        }

        styles.push(newHref);
        return genLinkReplaceSymbol(newHref);
      }
    }

    var preloadOrPrefetchType = match.match(LINK_PRELOAD_OR_PREFETCH_REGEX) && match.match(LINK_HREF_REGEX) && !match.match(LINK_AS_FONT);

    if (preloadOrPrefetchType) {
      var _match$match = match.match(LINK_HREF_REGEX),
          _match$match2 = _slicedToArray(_match$match, 3),
          linkHref = _match$match2[2];

      return genLinkReplaceSymbol(linkHref, true);
    }

    return match;
  }).replace(STYLE_TAG_REGEX, function (match) {
    if (STYLE_IGNORE_REGEX.test(match)) {
      return genIgnoreAssetReplaceSymbol('style file');
    }

    return match;
  }).replace(ALL_SCRIPT_REGEX, function (match, scriptTag) {
    var scriptIgnore = scriptTag.match(SCRIPT_IGNORE_REGEX);
    var moduleScriptIgnore = moduleSupport && !!scriptTag.match(SCRIPT_NO_MODULE_REGEX) || !moduleSupport && !!scriptTag.match(SCRIPT_MODULE_REGEX); // in order to keep the exec order of all javascripts

    var matchedScriptTypeMatch = scriptTag.match(SCRIPT_TYPE_REGEX);
    var matchedScriptType = matchedScriptTypeMatch && matchedScriptTypeMatch[2];

    if (!isValidJavaScriptType(matchedScriptType)) {
      return match;
    } // if it is a external script


    if (SCRIPT_TAG_REGEX.test(match) && scriptTag.match(SCRIPT_SRC_REGEX)) {
      /*
      collect scripts and replace the ref
      */
      var matchedScriptEntry = scriptTag.match(SCRIPT_ENTRY_REGEX);
      var matchedScriptSrcMatch = scriptTag.match(SCRIPT_SRC_REGEX);
      var matchedScriptSrc = matchedScriptSrcMatch && matchedScriptSrcMatch[2];

      if (entry && matchedScriptEntry) {
        throw new SyntaxError('You should not set multiply entry script!');
      } else {
        // append the domain while the script not have an protocol prefix
        if (matchedScriptSrc && !hasProtocol(matchedScriptSrc)) {
          matchedScriptSrc = getEntirePath(matchedScriptSrc, baseURI);
        }

        entry = entry || matchedScriptEntry && matchedScriptSrc;
      }

      if (scriptIgnore) {
        return genIgnoreAssetReplaceSymbol(matchedScriptSrc || 'js file');
      }

      if (moduleScriptIgnore) {
        return genModuleScriptReplaceSymbol(matchedScriptSrc || 'js file', moduleSupport);
      }

      if (matchedScriptSrc) {
        var asyncScript = !!scriptTag.match(SCRIPT_ASYNC_REGEX);
        scripts.push(asyncScript ? {
          async: true,
          src: matchedScriptSrc
        } : matchedScriptSrc);
        return genScriptReplaceSymbol(matchedScriptSrc, asyncScript);
      }

      return match;
    } else {
      if (scriptIgnore) {
        return genIgnoreAssetReplaceSymbol('js file');
      }

      if (moduleScriptIgnore) {
        return genModuleScriptReplaceSymbol('js file', moduleSupport);
      } // if it is an inline script


      var code = getInlineCode(match); // remove script blocks when all of these lines are comments.

      var isPureCommentBlock = code.split(/[\r\n]+/).every(function (line) {
        return !line.trim() || line.trim().startsWith('//');
      });

      if (!isPureCommentBlock) {
        scripts.push(match);
      }

      return inlineScriptReplaceSymbol;
    }
  });
  scripts = scripts.filter(function (script) {
    // filter empty script
    return !!script;
  });
  var tplResult = {
    template: template,
    scripts: scripts,
    styles: styles,
    // set the last script as entry if have not set
    entry: entry || scripts[scripts.length - 1]
  };

  if (typeof postProcessTemplate === 'function') {
    tplResult = postProcessTemplate(tplResult);
  }

  return tplResult;
}

var styleCache = {};
var scriptCache = {};
var embedHTMLCache = {};

if (!window.fetch) {
  throw new Error('[import-html-entry] Here is no "fetch" on the window env, you need to polyfill it');
}

var defaultFetch = window.fetch.bind(window);

function defaultGetTemplate(tpl) {
  return tpl;
}
/**
 * convert external css link to inline style for performance optimization
 * @param template
 * @param styles
 * @param opts
 * @return embedHTML
 */


function getEmbedHTML(template, styles) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _opts$fetch = opts.fetch,
      fetch = _opts$fetch === void 0 ? defaultFetch : _opts$fetch;
  var embedHTML = template;
  return _getExternalStyleSheets(styles, fetch).then(function (styleSheets) {
    embedHTML = styles.reduce(function (html, styleSrc, i) {
      html = html.replace(genLinkReplaceSymbol(styleSrc), "<style>/* ".concat(styleSrc, " */").concat(styleSheets[i], "</style>"));
      return html;
    }, embedHTML);
    return embedHTML;
  });
}

var isInlineCode = function isInlineCode(code) {
  return code.startsWith('<');
};

function _getExternalStyleSheets(styles) {
  var fetch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultFetch;
  return Promise.all(styles.map(function (styleLink) {
    if (isInlineCode(styleLink)) {
      // if it is inline style
      return getInlineCode(styleLink);
    } else {
      // external styles
      return styleCache[styleLink] || (styleCache[styleLink] = fetch(styleLink).then(function (response) {
        return response.text();
      }));
    }
  }));
} // for prefetch


function _getExternalScripts(scripts) {
  var fetch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultFetch;
  var errorCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  var fetchScript = function fetchScript(scriptUrl) {
    return scriptCache[scriptUrl] || (scriptCache[scriptUrl] = fetch(scriptUrl).then(function (response) {
      // usually browser treats 4xx and 5xx response of script loading as an error and will fire a script error event
      // https://stackoverflow.com/questions/5625420/what-http-headers-responses-trigger-the-onerror-handler-on-a-script-tag/5625603
      if (response.status >= 400) {
        errorCallback();
        throw new Error("".concat(scriptUrl, " load failed with status ").concat(response.status));
      }

      return response.text();
    })["catch"](function (e) {
      errorCallback();
      throw e;
    }));
  };

  return Promise.all(scripts.map(function (script) {
    if (typeof script === 'string') {
      if (isInlineCode(script)) {
        // if it is inline script
        return getInlineCode(script);
      } else {
        // external script
        return fetchScript(script);
      }
    } else {
      // use idle time to load async script
      var src = script.src,
          async = script.async;

      if (async) {
        return {
          src: src,
          async: true,
          content: new Promise(function (resolve, reject) {
            return requestIdleCallback(function () {
              return fetchScript(src).then(resolve, reject);
            });
          })
        };
      }

      return fetchScript(src);
    }
  }));
}

function parseHtml(url) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fetch = defaultFetch;
  var autoDecodeResponse = false;
  var getPublicPath = defaultGetPublicPath;
  var getTemplate = defaultGetTemplate;
  var postProcessTemplate = opts.postProcessTemplate; // compatible with the legacy importHTML api

  if (typeof opts === 'function') {
    fetch = opts;
  } else {
    // fetch option is availble
    if (opts.fetch) {
      // fetch is a funciton
      if (typeof opts.fetch === 'function') {
        fetch = opts.fetch;
      } else {
        // configuration
        fetch = opts.fetch.fn || defaultFetch;
        autoDecodeResponse = !!opts.fetch.autoDecodeResponse;
      }
    }

    getPublicPath = opts.getPublicPath || opts.getDomain || defaultGetPublicPath;
    getTemplate = opts.getTemplate || defaultGetTemplate;
  }

  return embedHTMLCache[url] || (embedHTMLCache[url] = fetch(url).then(function (response) {
    return readResAsString(response, autoDecodeResponse);
  }).then(function (html) {
    var assetPublicPath = getPublicPath(url);

    var _processTpl2 = processTpl(getTemplate(html), assetPublicPath, postProcessTemplate),
        template = _processTpl2.template,
        scripts = _processTpl2.scripts,
        entry = _processTpl2.entry,
        styles = _processTpl2.styles;

    return getEmbedHTML(template, styles, {
      fetch: fetch
    }).then(function (embedHTML) {
      return {
        template: embedHTML,
        scripts: scripts,
        entry: entry,
        styles: styles
      };
    });
  }));
}

function overrideIframeScriptGlobalVars(iframe, scripts) {
  _getExternalScripts(scripts, fetch, function () {}).then(function (scriptContents) {
    scriptContents.map(function (s) {
      var scriptElement = iframe.contentDocument.createElement('script');

      if (typeof s === 'string') {
        var code = "(function(window, self, location, history){\n          try{\n            ".concat(s, "\n          } catch(e){\n            console.log(e)\n          }\n          \n\n        }).bind(window.__xblade__window)(\n          window.__xblade__window,\n          window.__xblade__window,\n          window.__xblade__location,\n          window.__xblade__history\n        );");
        scriptElement.text = code;
      }

      iframe.contentDocument.head.appendChild(scriptElement);
    });
  });
}

function urlRoutingPlugin(context) {
  var sandbox = context.sandbox,
      iframe = context.iframe,
      scripts = context.scripts;
  var iframeWindow = iframe.contentWindow;
  proxyIframeHistory(iframeWindow, sandbox.src);
  proxyIframeLocation(iframeWindow, sandbox.src);
  proxyIframeWindow(iframeWindow);
  var removeCallback = listenIframePopStateEvent(iframeWindow);
  overrideIframeScriptGlobalVars(iframe, scripts);
  return {
    onDestroy: {
      name: 'clearPulginEffect',
      fn: removeCallback
    }
  };
}

function resetIframeStyle(iframe) {
  iframe.style.border = '0';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
}

function getNeedToObservedElSelectors(el) {
  var _el$getAttribute;

  return ((_el$getAttribute = el.getAttribute('selectors')) === null || _el$getAttribute === void 0 ? void 0 : _el$getAttribute.split(' ')) || [];
}

function resetIframeStaticResOrigin(iframe, origin) {
  var baseElement = iframe.contentDocument.createElement('base');
  baseElement.href = origin;
  iframe.contentDocument.head.appendChild(baseElement);
}

var Sandbox = /*#__PURE__*/function () {
  function Sandbox() {
    _classCallCheck(this, Sandbox);
  }

  _createClass(Sandbox, [{
    key: "render",
    value: function render() {
      throw new Error('Sandbox must have a render function');
    }
  }, {
    key: "destroy",
    value: function destroy() {}
  }]);

  return Sandbox;
}();

function noop() {}

var Hook = /*#__PURE__*/function () {
  function Hook(hooksName) {
    var _this = this;

    _classCallCheck(this, Hook);

    _defineProperty(this, "handlers", void 0);

    _defineProperty(this, "hooks", void 0);

    _defineProperty(this, "_args", void 0);

    var hooks = {};
    hooksName.forEach(function (name) {
      hooks[name] = noop;
    });
    this.handlers = {};
    this.hooks = new Proxy(hooks, {
      get: function get(target, key) {
        var handlers = _this.handlers[key];

        var _iterator = _createForOfIteratorHelper(handlers),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var handler = _step.value;
            var result = handler.fn(_this._args);

            if (_typeof$1(result) === 'object' && result !== null) {
              var keys = Object.keys(result);

              for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
                var _key = _keys[_i];

                _this.add(_key, result[_key]);
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return target[key];
      }
    });
  }

  _createClass(Hook, [{
    key: "add",
    value: function add(hookName, handler) {
      if (this.handlers[hookName]) {
        this.handlers[hookName].push(handler);
      } else {
        this.handlers[hookName] = [handler];
      }
    }
  }, {
    key: "run",
    value: function run(hookName, args) {
      this._args = args;
      this.hooks[hookName]();
      this._args = null;
    }
  }]);

  return Hook;
}();

var IframeSandbox = /*#__PURE__*/function (_Sandbox) {
  _inherits(IframeSandbox, _Sandbox);

  var _super = _createSuper(IframeSandbox);

  function IframeSandbox(options) {
    var _this;

    _classCallCheck(this, IframeSandbox);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "container", void 0);

    _defineProperty(_assertThisInitialized(_this), "observer", void 0);

    _defineProperty(_assertThisInitialized(_this), "hooks", void 0);

    _defineProperty(_assertThisInitialized(_this), "iframeElement", void 0);

    _defineProperty(_assertThisInitialized(_this), "src", void 0);

    _defineProperty(_assertThisInitialized(_this), "href", void 0);

    _defineProperty(_assertThisInitialized(_this), "selectors", void 0);

    _this.container = options.container;
    _this.hooks = new Hook(['onIframeLoad', 'onDestroy']);
    _this.iframeElement = document.createElement('iframe');
    _this.src = options.container.getAttribute('src');
    _this.href = new URL(_this.src);
    _this.selectors = getNeedToObservedElSelectors(options.container);

    _this.registerPlugin();

    return _this;
  }

  _createClass(IframeSandbox, [{
    key: "registerPlugin",
    value: function registerPlugin() {
      var _this2 = this;

      [domDuplicatePlugin, urlRoutingPlugin].forEach(function (plugin) {
        return _this2.hooks.add('onIframeLoad', {
          name: plugin.name,
          fn: plugin
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var container = this.container,
          src = this.src,
          href = this.href;
      var iframe = document.createElement('iframe');
      resetIframeStyle(iframe);
      var shadowRoot = container.attachShadow({
        mode: 'open'
      });
      shadowRoot.appendChild(iframe);
      var overlayElement = document.createElement('div');
      shadowRoot.appendChild(overlayElement);
      parseHtml(src, {
        fetch: {
          fn: function fn() {
            return window.fetch(arguments.length <= 0 ? undefined : arguments[0]);
          }
        }
      }).then(function (res) {
        var template = res.template,
            scripts = res.scripts;
        iframe.srcdoc = template;

        iframe.onload = function () {
          resetIframeStaticResOrigin(iframe, href.origin);
          var context = {
            sandbox: _this3,
            iframe: iframe,
            shadowRoot: shadowRoot,
            overlayElement: overlayElement,
            scripts: scripts
          };

          _this3.hooks.run('onIframeLoad', context);
        };
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.hooks.run('onDestroy');
    }
  }]);

  return IframeSandbox;
}(Sandbox);

var XBlade = /*#__PURE__*/function (_HTMLElement) {
  _inherits(XBlade, _HTMLElement);

  var _super = _createSuper(XBlade);

  function XBlade() {
    var _this;

    _classCallCheck(this, XBlade);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "sandbox", void 0);

    _this.initBladeStyle();

    return _this;
  }

  _createClass(XBlade, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.sandbox = new IframeSandbox({
        container: this
      });
      this.sandbox.render();
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.sandbox.destroy();
    }
  }, {
    key: "initBladeStyle",
    value: function initBladeStyle() {
      this.style.display = 'block';
    }
  }]);

  return XBlade;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

function registerBladeElement() {
  customElements.define('xblade-edge', XBlade);
}

registerBladeElement();

class Listeners {
  constructor() {
    this.handlers = [];
  }

  push(fn) {
    this.handlers.push(fn);
  }

  run(arg) {
    this.handlers.forEach(fn => fn(arg));
  }

}

function createHistoryRouter(routes) {
  let index = 0;
  const listeners = new Listeners();
  return {
    listeners,

    push(path) {
      const matchRoute = routes.find(route => route.path === path);
      history.pushState({
        idx: index + 1
      }, '', path);
      listeners.run(matchRoute.element);
    }

  };
}

function aTagClickHandler(path) {
  return function (e) {
    e.preventDefault();
    console.log(path, window.location.pathname, path === window.location.pathname);
    if (path === window.location.pathname) return;
    router.push(path);
  };
}

const routes = [{
  path: '/react18',
  element: '<xblade-edge src="http://localhost:8001/" selectors=".ant-drawer .ant-modal-root" style="width: 100%; height: 1000px"></blade-app>'
}, {
  path: '/vue3',
  element: '<xblade-edge src="http://localhost:8002/" selectors=".el-overlay" style="width: 100%; height: 800px"></blade-app>'
}];
const router = createHistoryRouter(routes);

function render(targetElement) {
  router.listeners.push(el => {
    targetElement.innerHTML = el;
  });
  document.querySelector('[href=\'/react18\']').addEventListener('click', aTagClickHandler('/react18'));
  document.querySelector('[href=\'/vue3\']').addEventListener('click', aTagClickHandler('/vue3'));
  router.push('/react18');
}

render(document.querySelector('#root'));
