import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/main.scss'

import ElementPlus from 'element-plus'

createApp(App).use(store, axios, VueAxios, ElementPlus).use(router).mount('#app')
