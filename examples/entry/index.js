import '../../lib/xblade.esm.js';

class Listeners {
  constructor() {
    this.handlers = [];
  }

  push(fn) {
    this.handlers.push(fn);
  }

  run(arg) {
    this.handlers.forEach((fn) => fn(arg));
  }
}

function createHistoryRouter(routes) {
  let index = 0;
  const listeners = new Listeners();

  return {
    listeners,
    push(path) {
      const matchRoute = routes.find((route) => route.path === path);

      history.pushState({ idx: index + 1 }, '', path);

      listeners.run(matchRoute.element);
    },
  };
}

function aTagClickHandler(path) {
  return function (e) {
    e.preventDefault();
    console.log(
      path,
      window.location.pathname,
      path === window.location.pathname
    );
    if (path === window.location.pathname) return;
    router.push(path);
  };
}

const routes = [
  {
    path: '/react18',
    element:
      '<xblade-edge src="http://localhost:8001/" selectors=".ant-drawer .ant-modal-root" style="width: 100%; height: 1000px"></blade-app>',
  },
  {
    path: '/vue3',
    element:
      '<xblade-edge src="http://localhost:8002/" selectors=".el-overlay" style="width: 100%; height: 800px"></blade-app>',
  },
];

const router = createHistoryRouter(routes);

function render(targetElement) {
  router.listeners.push((el) => {
    targetElement.innerHTML = el;
  });

  document
    .querySelector('[href=\'/react18\']')
    .addEventListener('click', aTagClickHandler('/react18'));
  document
    .querySelector('[href=\'/vue3\']')
    .addEventListener('click', aTagClickHandler('/vue3'));

  router.push('/react18');
}

render(document.querySelector('#root'));
