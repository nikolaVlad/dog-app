import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FilterView from '../views/FilterView.vue'
import DogView from '../views/DogView.vue'

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
    path: '/dog',
    name: 'dog',
    component: DogView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
