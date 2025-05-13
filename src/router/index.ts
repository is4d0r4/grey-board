import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import NewLogin from '../views/NewLoginForm.vue'
import GreysBoard from '@/views/GreysBoard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/newLogin',
      name: 'novo login',
      component: NewLogin,
    },
    {
      path: '/grey-board',
      name: 'grey board',
      component: GreysBoard,
    },
  ],
})

export default router
