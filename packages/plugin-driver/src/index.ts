function noop() {}

type HookName = 'onIframeLoad' | 'onDestroy';

class Hook {
  handlers: {
    [key in HookName]?: {
      name: string;
      fn: (params: any) =>
        | {
            [key in HookName]?: { name: string; fn: (params: any) => void };
          }
        | void;
    }[];
  };
  hooks: any;
  _args: any;
  constructor(hooksName: HookName[]) {
    const hooks: Record<string, typeof noop> = {};
    hooksName.forEach((name) => {
      hooks[name] = noop;
    });
    this.handlers = {};
    this.hooks = new Proxy(hooks, {
      get: (target, key: HookName) => {
        const handlers = this.handlers[key];
        for (const handler of handlers) {
          const result = handler.fn(this._args);
          if (typeof result === 'object' && result !== null) {
            const keys = Object.keys(result) as HookName[];
            for (const key of keys) {
              this.add(key, result[key]);
            }
          }
        }
        return target[key];
      },
    });
  }

  add(
    hookName: HookName,
    handler: {
      name: string;
      fn: (params: any) =>
        | {
            [key in HookName]?: { name: string; fn: (params: any) => void };
          }
        | void;
    }
  ) {
    if (this.handlers[hookName]) {
      this.handlers[hookName].push(handler);
    } else {
      this.handlers[hookName] = [handler];
    }
  }

  run(hookName: HookName, args?: any) {
    this._args = args;
    this.hooks[hookName]();
    this._args = null;
  }
}

export { Hook };
