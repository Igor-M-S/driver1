import { createWebHistory, createRouter } from 'vue-router'


import Arquivo from '@/views/arquivos.vue'
import Videos from '@/views/videos'
import Fotos from '@/views/fotos.vue'

const routes = [
 
  {
    path: '/',
    name: 'Foto',
    component: Fotos
  },
  
  {
    path: '/arquivos',
    name: 'Arquivos',
    component: Arquivo
  },
  {
    path: '/videos',
    name: 'Videos',
    component: Videos
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
