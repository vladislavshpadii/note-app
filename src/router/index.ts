import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import routeNames from '@/router/route-names'

import Home from '@/views/Home.vue'
import Statistics from '@/views/Statistics.vue'
import EditNote from '@/views/EditNote.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: routeNames.home,
    component: Home,
  },
  {
    path: '/statistics',
    name: routeNames.statistics,
    component: Statistics,
  },
  {
    path: '/notes/:id',
    name: routeNames.editNote,
    component: EditNote,
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router