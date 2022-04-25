import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/fotos.vue'
import Arquivo from '@/views/arquivos.vue'

const routes = [
 
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/fotos',
    name: 'About',
    component: About
  },
  {
    path: '/arquivos',
    name: 'Arquivos',
    component: Arquivo
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
