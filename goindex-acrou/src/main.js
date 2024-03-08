import Vue from "vue";
import App from "./App.vue";
import { Loading } from "element-ui";
import "element-ui/lib/theme-chalk/icon.css";
import "element-ui/lib/theme-chalk/notification.css";
import "element-ui/lib/theme-chalk/loading.css";
import axios from "@/plugin/axios";
import VueAxios from "vue-axios";
import router from "./router";
import i18n from "./i18n";
// store
import store from "@/store/index";
import Clipboard from "@/plugin/clipboard";
import VueLazyload from "vue-lazyload";
import Viewer from "v-viewer";
import cdnpath from "./libs/util.cdn";
// 组件
import "@/components";
import "viewerjs/dist/viewer.css";
import "@/assets/style/theme/register.scss";

Vue.config.productionTip = false;
Vue.prototype.$cdnpath = cdnpath;
Vue.use(Loading);
Vue.use(VueAxios, axios);
Vue.use(Clipboard);
Vue.use(VueLazyload, {
  loading: cdnpath("images/airplane.gif"),
});
Vue.use(Viewer);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
  mounted() {
    this.$store.dispatch("acrou/view/load");
  },
}).$mount("#app");
