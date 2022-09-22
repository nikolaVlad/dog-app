import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/main.scss'
import Paginate from 'vuejs-paginate-next'

createApp(App).use(store, axios, VueAxios).use(router).use(Paginate).mount('#app')
