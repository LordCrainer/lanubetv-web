// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import added from "./-added";
import router from "./-router";

import AOS from "aos";
import "aos/dist/aos.css";
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  created() {
    AOS.init();
  },
  components: { App },
  router,
  template: "<App/>"
});
