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
    path: '/',
    name: 'register',
    component:RegisterPage
  },
  {
    path: '/',
    name: 'register',
    component: RegisterPage,
    meta : {
      requiresGuest : true
    }
    
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta : {
      requiresGuest : true
    }
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
      requiresAuth : true
    },
    children:[
      {
        path: ":id",
        name: "product",
        component: IntialPageVue,
        meta : {
          requiresAuth : true
        }
      },
      {
        path: "category/:id",
        name: "category",
        component: CategoriesPage,
        meta : {
          requiresAuth : true
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
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
//   const requiresGuest = to.matched.some(record => record.meta.requiresGuest)
//   const currentUser = auth.currentUser

//   if (requiresAuth && !currentUser) {
//     next({ name: 'login' })
//   } else if (requiresGuest && currentUser) {
//     next({ name: 'product', params: { id: currentUser.uid } })
//   } else {
//     next()
//   }
// })

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
