import Vue from 'vue'

import About from '../components/About.vue'
// import Counter from '../components/Counter.vue'
import list from '../views/list.vue'
import VueRouter from 'vue-router'
// import { createFeiView } from '../components/createFeiView.js'
import { createCineView } from '../views/createCineView'
import Home from '../views/main.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: createCineView('main') },
    { path: '/long', component: Home },
    { path: '/list', component: list },
    // { path: '/Counter', component: createFeiView('topics') },
    { path: '/About', component: About }
  ]
})

export default router
