import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/mainPages/mainPages'
import Kitchen from '@/pages/kitchenPages/kitchenPages'
import kitchenMatteo from '@/components/AK-PageItem'
import Reviews from '@/pages/reviewsPages/reviewsPages'
import Video from '@/pages/videoPages/videoPages'

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/kitchen',
        component: Kitchen
    },
    {
        path: '/KitchenName',
        name: 'KitchenName',
        component: kitchenMatteo
    },
    {
        path: '/reviews',
        component: Reviews
    },
    {
        path: '/video',
        component: Video
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),

})

router.afterEach((to,from,next) => {
    window.scrollTo(0,0);
})

export default router;
