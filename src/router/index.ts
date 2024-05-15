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
            path: '/coins/',
            name: 'Coins',
            component: () => import('@/views/CoinView.vue')
        },
        {
            path: '/:catchAll(.*)',
            name: 'Page Not Found',
            component: () => import('@/views/PageNotFoundView.vue')
        }
    ]
})

router.beforeEach((to, from, next) => {
    document.title= String(to.name) + ` | Wrub Coinbase` || "Wrub | Coinbase"
    next()
})

export default router
