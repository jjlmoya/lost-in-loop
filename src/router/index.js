import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Splash from '@/views/Splash.vue'
import Selection from '@/views/Selection.vue'
import Hall from '@/views/Hall.vue'


const routes = [
    { path: '/', component: Splash },
    { name:'home', path: '/home', component: Home },
    { name:'selection', path: '/selection', component: Selection },
    { name:'hall', path: '/hall', component: Hall },

]




const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL || '/'),
    routes,
    scrollBehavior () {
        return { top: 0 }
    }
})

export default router
