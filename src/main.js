import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// 加载mockServer
import './components/mock/mockServer'
// vue懒加载
import VueLazyload from 'vue-lazyload'
axios.defaults.baseURL = '/api'
const loadimage = require('./assets/loading.gif')
// 加载过滤器
const vueApp = createApp(App)
vueApp.use(store).use(router).use(VueLazyload,{
	preLoad: 1.3,
	loading: loadimage,
	attempt: 1
})
vueApp.mount('#app')
