import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/Home.vue'
import Dashboard from './../components/dashboard/dashboard.vue'
import Task from './../components/task/task.vue'
import HolidayList from './../components/holiday-list/holiday-list.vue'
import LeavePlan from './../components/leave-plan/leave-plan.vue'
import Timesheet from './../components/timesheet/timesheet.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/task',
    name: 'Task',
    component: Task
  },
  {
    path: '/holiday-list',
    name: 'HolidayList',
    component: HolidayList
  },
  {
    path: '/leave-plan',
    name: 'LeavePlan',
    component: LeavePlan
  },
  {
    path: '/timesheet',
    name: 'Timesheet',
    component: Timesheet
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
