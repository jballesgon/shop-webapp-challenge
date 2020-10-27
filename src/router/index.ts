import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ProductList from '../views/ProductList.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'ProductList',
    component: ProductList,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/ShoppingCart.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
