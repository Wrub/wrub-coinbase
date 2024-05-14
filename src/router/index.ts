import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/views/HomeView.vue')
        },
        {
            path: '/coins',
            name: 'Coins',
            component: () => import('@/views/CoinView.vue')
        },
        {
            path: '/:catchAll(.*)',
            name: 'PageNotFound',
            component: () => import('@/views/PageNotFoundView.vue')
        }
    ]
})

export default router
