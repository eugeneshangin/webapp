import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'
import routes from './routes'

const createHistory = process.env.VUE_ROUTER_MODE === 'history'
  ? createWebHistory
  : createWebHashHistory

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation.
 */
export default createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes,

  // Leave this as is and make changes in quasar.conf.js instead!
  // quasar.conf.js -> build -> vueRouterMode
  // quasar.conf.js -> build -> publicPath
  history: createHistory(process.env.VUE_ROUTER_BASE),
})
