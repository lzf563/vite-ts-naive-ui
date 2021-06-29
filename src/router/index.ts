import { createRouter, createWebHistory, RouteRecordRaw, RouterOptions } from 'vue-router'

const routes:Array<RouteRecordRaw> = [
    {
      path:'/',
      name:'Home',
      component: ()=> import('../views/home/home.vue'),
      children:[
        {
          path:"/one",
          name:'第一页',
          component: ()=> import('../views/page/one.vue'),
        },
        {
          path:'/two',
          name:'第二页',
          component:()=> import('../views/page/two.vue')
        }
      ]
    }
]

// Vue-router新版本中，需要使用createRouter来创建路由
/**
 * createWebHashHistory hash模式
 * createWebHistory History模式
 */

const router = createRouter({
  history:createWebHistory(),
  routes
} as RouterOptions)


router.afterEach(()=>{
  console.log("路由切换了哈。")
})


export default router;