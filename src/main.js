import { createApp } from 'vue'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'
import './assets/tailwind.css'
import 'animate.css'
import store from './store'
import router from './router'

createApp(App).use(router).use(MotionPlugin ).use(store).mount('#app')
