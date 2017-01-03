import Vue from 'vue'
import Home from '../list/main.vue'
import About from '../components/About.vue'
// import Counter from '../components/Counter.vue'
import Topics from '../components/Topics.vue'
import VueRouter from 'vue-router'
import { createFeiView } from '../components/createFeiView'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/long', component: Home },
    { path: '/Topics', component: Topics },
    { path: '/Counter', component: createFeiView('topics') },
    { path: '/About', component: About }
  ]
})

export default router
