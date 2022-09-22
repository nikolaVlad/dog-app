import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/main.scss'

createApp(App).use(store, axios, VueAxios).use(router).mount('#app')
