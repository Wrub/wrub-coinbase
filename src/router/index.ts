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
            path: '/login',
            name: 'Login',
            component: () => import('@/views/LoginView.vue')
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: () => import('@/views/CoinView.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/:catchAll(.*)',
            name: 'Page Not Found',
            component: () => import('@/views/PageNotFoundView.vue')
        }
    ]
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
    const token = localStorage.getItem('token')

    if (requiresAuth && !token) {
        next('/')
    } else {
        next()
    }
})

export default router
