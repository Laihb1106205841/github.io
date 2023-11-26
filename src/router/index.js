import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/PlayThePiano',
      name: 'PlayThePiano',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PlayThePiano.vue')
    },
    {
      path: '/upload',
      name: 'upload',
      component:() => import('../components/upload.vue')
    },
    {
      path:'/PlayPiano',
      name:'PlayPiano',
      component:() => import('../views/Navagation.vue')
    }



  ]
})

export default router
