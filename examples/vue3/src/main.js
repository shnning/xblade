import { createApp } from "vue";
import * as VueRouter from "vue-router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from "./App.vue";
import Page from "./components/Page.vue";
import DrawerPage from './components/DrawerPage.vue'

function createPage(msg) {
  return {
    extends: Page,
    data() {
      return {
        msg,
      };
    },
  }
}

const routes = [
  {
    path: "/",
    component: createPage('this is path root'),
  },
  { path: "/a", component: createPage('this is path a') },
  { path: "/b", component: createPage('this is path b') },
  { path: "/drawer", component: DrawerPage },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(ElementPlus)
app.mount("#app");
