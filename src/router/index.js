import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/MenuView.vue'),
    },
    {
      path: '/daily',
      name: 'daily',
      component: () => import('../views/DailyView.vue'),
    },
    {
      path: '/playlist',
      name: 'playlist',
      component: () => import('../views/PlaylistView.vue'),
    },
    {
      path: '/secret-messages',
      name: 'secret-messages',
      component: () => import('../views/SecretMessagesView.vue'),
    },
    {
      path: '/birthday',
      name: 'birthday',
      component: () => import('../views/BirthdayPageView.vue'),
    },
    {
      path: '/love-reason',
      name: 'love-reason',
      component: () => import('../views/LoveReasonView.vue'),
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/GalleryView.vue'),
    },
  ],
})

export default router
