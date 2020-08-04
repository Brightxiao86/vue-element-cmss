// 模块引入
import Vue from 'vue'
import VueRouter from 'vue-router'
// 注册，使用Vue.use()注册路由
Vue.use(VueRouter)

// 路由懒加载，按需加载，节省应用程序的性能

import routes from '@/views/'
const Login=()=>import('./components/login/Login.vue')



//导航栏循环
//创建数组
const arr = []
//循环第一层导航
routes.map(ele=>{
    //如果为子导航
    if(ele.children) {
        //循环自导航里的对象
        ele.children.map(ele=>{
            //动态添加地址 添加到arr数组里面
            arr.push({path: ele.path, component: ele.component})
        })
    }
})
const router = new VueRouter({
    // 用于指定路由模式，常用有两种，分别是hash和history
    mode: 'history',
    // 定义路由匹配规则
    routes:[
        //合并数组
        ...arr,
        //地址 和它组件的名字和组件
        { path:'/login',components: {login:Login}},

        // { path:'/*',redirect:'/login'}
    ]
})

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

// 使用ES6的模块化语法，把当前路由实例抛出去
export default router