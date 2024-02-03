import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodsList from "@/views/FoodList.vue";
import FoodDetail from "@/views/FoodDetail.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/food',
    name: 'Food',
    component: FoodsList
  },
  {
    path: '/food/:id',
    name: 'FoodDetail',
    component: FoodDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
