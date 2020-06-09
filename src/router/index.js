import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from './../views/Home.vue'
import Dashboard from './../components/dashboard/dashboard.vue'
import Task from './../components/task/task.vue'
import HolidayList from './../components/holiday-list/holiday-list.vue'
import LeavePlanner from './../components/leave-plan/LeavePlanner.vue'
import Timesheet from './../components/timesheet/timesheet.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
//import DashboardPankaj from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
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
    path: '/LeavePlanner',
    name: 'LeavePlanner',
    component: LeavePlanner
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