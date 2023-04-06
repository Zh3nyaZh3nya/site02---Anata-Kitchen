import '@/assets/fonts/stylesFonts.css' 
import 'material-design-icons-iconfont'

import App from '@/App'
import router from '@/router/router'
import vue3StarRatings from "vue3-star-ratings";
import store from './store/store'

import { createApp } from 'vue'

const app = createApp(App) 


app
    .component("vue3-star-ratings", vue3StarRatings) 
    .use(store)
    .use(router)
    .mount('#app')


