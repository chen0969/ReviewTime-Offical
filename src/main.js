import { createApp } from 'vue'
import router from './utils/router'
import '../src/style/style.scss'
import App from './App.vue'
// bootstrap and bootstrap icons\
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// animate.css
import 'animate.css';


createApp(App).use(router).mount('#app')