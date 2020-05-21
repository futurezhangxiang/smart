import Vue from 'vue'
import Router from 'vue-router'
import bus from '@/bus'
Vue.use(Router)

import Main from '@/views/Main'
import {checkToken} from '@/service/getData'
const routes = [
  {
    path: '/',
    // 路由懒加载
    // component: () => import('@/views/Main.vue')
    component: Main,
    // 重定向，如果访问当前路由则直接跳转到设置的路由
    redirect: '/channel/1',
    children: [
      {
        path: 'login',
        component: () => import('@/views/Main/Login.vue')
      }, {
        name: 'channel',
        path: 'channel/:id(\\d+)/:page?',
        component: () => import('@/views/Main/Channel.vue')
      }, {
        name: 'article',
        path: 'article/:id(\\d+)',
        component: () => import('@/views/Main/Article.vue')
      }, {
        path: 'setting',
        component: () => import('@/views/Main/Setting.vue'),
        meta: {
          requiredAuth: true
        },
        children: [
          {
            path: 'base'
          }, {
            path: 'avatar'
          }, {
            path: 'password'
          }
        ]
      }, {
        path: 'about'
      }, {
        path: 'join'
      }
    ]
  }, {
    path: '/user/:id'
  }
]

const router = new Router({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  // 获取到对应的user
  
  if (to.matched.some(route => route.meta.requiredAuth)) {
    // 检测token是否有效
    const token = localStorage.getItem('token')
    checkToken(token).then(res => {
      if (res.data.res_code === 200) {
        // 表示已经登录
        next()
      } else {
        next({
          path: '/login',
          query: {
            returnurl: to.path
          }
        })
      }
    })
    
  } else {
    next()
  }
})


router.afterEach((to, from, next) => {
  const user = localStorage.getItem('user')
  console.log(user)
  bus.$emit('sendUser', user ? user : null)
})



export default router