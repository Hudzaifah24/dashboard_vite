import { createRouter, createWebHashHistory } from "vue-router";

import Dashboard from './views/dashboard.vue'
import Table from './views/table.vue'

const routes = [
    {path: '/', component: Dashboard},
    {path: '/table', component: Table}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router