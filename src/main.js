import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/main.scss'
import Paginate from 'vuejs-paginate-next'
import VueNextTimeline from 'vue-next-timeline'

createApp(App).use(store, axios, VueAxios).use(router).use(Paginate).use(VueNextTimeline).mount('#app')
