import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/main.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

createApp(App).use(store, axios, VueAxios, ElementUI).use(router).mount('#app')
