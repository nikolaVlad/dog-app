import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FilterView from '../views/FilterView.vue'
import DogView from '../views/DogView.vue'
import DogTimeline from '../views/DogTimeline.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/filter',
    name: 'filter',
    component: FilterView
  },
  {
    path: '/dog/:id',
    name: 'dog',
    component: DogView
  },
  {
    path: '/dog-timeline/:id',
    name: 'dogTimeline',
    component: DogTimeline
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
