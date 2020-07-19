// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import jsPlumb from 'jsplumb'
Vue.prototype.$jsPlumb = jsPlumb.jsPlumb
import ElementUI from 'element-ui' //new
import 'element-ui/lib/theme-chalk/index.css' //new
import VueBus from "vue-bus";

Vue.use(ElementUI)
Vue.use(VueBus)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
