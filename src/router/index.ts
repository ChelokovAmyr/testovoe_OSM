import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import TableView from '../views/TableView.vue'
import ChartView from '../views/ChartView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: TableView
  },
  {
    path: '/chart',
    name: 'about',
    component: ChartView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
