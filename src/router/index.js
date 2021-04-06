import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Create from '../views/Create.vue'
import ViewPost from '../views/ViewPost.vue'
import EditPost from '../views/EditPost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts/:id',
    name: 'post',
    component: ViewPost
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/posts/:id/edit',
    name: 'Edit',
    component: EditPost
  }
]

const router = new VueRouter({
  routes
})

export default router
