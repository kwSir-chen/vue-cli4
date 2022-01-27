import { createRouter, createWebHistory } from 'vue-router'
import TestAsync from '../views/TestAsync.vue'
import AsyncComponent from '../components/AsyncComponent.vue'

const routes = [
  {
    path: '/testasync',
    name: 'TestAsync',
    component: TestAsync
  },
  {
    path: '/test',
    name: 'TestAsync112',
    component: AsyncComponent
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
