import { createApp } from 'vue'
import App from './App.vue'
import XUI from '../../src/index'
import '../../src/styles/index.scss'

createApp(App)
.use(XUI)
.mount('#root')