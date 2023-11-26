import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from "axios";
import store from './stores/index';

if (typeof(WebSocket) === "undefined") {
    alert("您的浏览器不支持socket")
}



const app = createApp(App)

// axios.defaults.baseURL = 'http://172.17.192.1:8082';
// axios.get('https://www.dev-api.com').then(res => {
//     const baseURL = res.data.baseURL
//     app.provide('global', {
//         baseURL
//     })
//     app.use(Antd).mount('#app')
// })

app.use(createPinia())
app.use(router)
app.use(store)



app.mount('#app')
