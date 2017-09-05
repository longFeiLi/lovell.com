import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from './router'
import { sync } from 'vuex-router-sync'
import ElementUI from 'element-ui'
//  不支付服务器端渲染
// import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
