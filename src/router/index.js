import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/freya-portfolio'
  },
  {
    path: '/freya-portfolio',
    name: 'freya-portfolio',
    component: Home
  },
  {
    path: '/freya-portfolio/vue',
    name: 'Vue',
    component: () => import(
      '../views/Vue.vue'
    )
  },
  {
    path: '/freya-portfolio/RWD',
    name: 'RWD',
    component: () => import(
      '../views/RWD.vue'
    )
  },
  {
    path: '/freya-portfolio/Bootstrap',
    name: 'Bootstrap',
    component: () => import(
      '../views/Bootstrap.vue'
    )
  },
  {
    path: '/freya-portfolio/Express',
    name: 'Express',
    component: () => import(
      '../views/Express.vue'
    )
  },
  {
    path: '/freya-portfolio/React',
    name: 'React',
    component: () => import(
      '../views/React.vue'
    )
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  },
]

const router = new VueRouter({
  routes
})

export default router
