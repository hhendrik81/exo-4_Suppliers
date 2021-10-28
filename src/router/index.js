import { createRouter, createWebHistory } from 'vue-router'
import SuppliersList from '../components/SuppliersList.vue'
import SuppliersMap from '../components/SuppliersMap.vue'

const routes = [
    {path: '/suppliers', component: SuppliersList},
    {path: '/map', component: SuppliersMap}
]
let router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
    