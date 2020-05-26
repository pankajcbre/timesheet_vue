import Vue from 'vue'
import Router from 'vue-router'
import routes from 'vue-auto-routing'
import {
  createRouterLayout
} from 'vue-router-layout'

Vue.use(Router)

const RouterLayout = createRouterLayout(layout => {
  return import('@/layouts/' + layout + '.vue')
})

export default new Router({
  routes: [{
      path: '/',
      component: RouterLayout,
      children: routes
    },
    {
      path: '/Dashboard',
      name: "Dashboard",
      component: () => import("@/pages/Dashboard.vue")

    },
    {
      path: '/Register',
      name: "Register",
      component: () => import("@/pages/Register.vue")

    }
  ]
})