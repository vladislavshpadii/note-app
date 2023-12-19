import { createRouter, createWebHistory } from 'vue-router'

import routeNames from '@/router/route-names'

import Home from '@/views/HomeView.vue'
import Statistics from '@/views/StatisticsView.vue'
import EditNote from '@/views/EditNoteView.vue'

const routes = [
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