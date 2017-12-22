import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/components/PageHome'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome
  }
]

export default new Router({
  routes
})
