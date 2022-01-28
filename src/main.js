import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

createApp(App).use(router, axios, VueAxios).mount('#app');
