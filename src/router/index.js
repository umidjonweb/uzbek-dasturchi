import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InputForm from '../views/InputForm.vue'
import Error from '../views/Error.vue'
Vue.use(VueRouter)

const routes = [
   {
      path: '/',
      name: 'home',
      component: HomeView
   },
   {
      path: '/InputForm',
      name: 'InputForm',
      component: InputForm
   },

   {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
   },

   {
      path: '*',
      name: 'Error',
      component: Error
   },
]

const router = new VueRouter({
   routes
})

export default router
