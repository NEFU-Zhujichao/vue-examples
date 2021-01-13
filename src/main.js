import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
process.env.NODE_ENV == "development" && import("@/mock/index");
import vuetify from "@/plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
