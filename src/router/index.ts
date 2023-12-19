// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createRouter, createWebHistory, RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

import routeNames from '@/router/route-names'

import Home from '@/views/HomeView.vue'
import Statistics from '@/views/StatisticsView.vue'
import EditNote from '@/views/EditNoteView.vue'
import PageNotFound from '@/views/PageNotFoundView.vue'

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
    beforeEnter: (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext ) => {
      if (to.params.id) {
        next()
      }     
    }
  },
  {
    path: '/404',
    name: routeNames.pageNotFound,
    component: PageNotFound,
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router