import HelloWorld from './components/HelloWorld.vue'
import Calendar from './components/Calendar.vue'

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/hello', component: HelloWorld },
    { path: '/calendar', component: Calendar },
  ]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router