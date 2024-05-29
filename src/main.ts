import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import naive from "naive-ui";
import VueApexCharts from "vue3-apexcharts";

createApp(App)
    .use(naive)
    .use(VueApexCharts)
    .use(store)
    .use(router)
    .mount('#app')
