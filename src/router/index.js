import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import RegisterPage from '../views/RegisterPage.vue'
import LoginPage from '../views/LoginPage.vue'
import ProductPageVue from '@/views/ProductPage.vue'
import CategoriesPage from "../components/CategoriesPage.vue"
import IntialPageVue from '@/components/IntialPage.vue'
import EachProduct from '@/components/EachProduct.vue'
// import ErrorPageVue from '@/components/ErrorPage.vue'
// import { auth } from '@/components/Firebase/firebaseconfig'

const routes = [
  {
    path: '/register',
    name: 'register',
    component: RegisterPage,
    
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path : '/:id',
    name : "EachProduct",
    component : EachProduct,
    meta : {
      requiresGuest : true
    },
    children:[
      {
        path:  '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('@/components/ErrorPage.vue')
      }
    ]
  },
  {
    path: '/product',
    name: 'product',
    component: ProductPageVue,
    meta : {
      requiresGuest : true
    },
    children:[
      {
        path: ":id",
        name: "product",
        component: IntialPageVue,
        meta : {
          requiresGuest : true
        }
      },
      {
        path: "category/:id",
        name: "category",
        component: CategoriesPage,
        meta : {
          requiresGuest : true
        },
        children:[
          {
            path:  '/:pathMatch(.*)*',
            name: 'not-found',
            component: () => import('@/components/ErrorPage.vue')
          }
        ]
      }
    ]
    
  },
  {
    path:  '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/components/ErrorPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   if(to.path === '/login' || to.path === '/register' && auth.currentUser){
//     next('/product/:id')
// }
// if(to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser){
//   next('/login')
//   return
// }

// })
 
export default router
