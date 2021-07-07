import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// import Home from '../components/home'
// import About from '../components/about'
// import User from '../components/User'

// 懒加载
const Home = () => import('../components/home.vue')
const About = () => import('../components/about.vue')
const User = () => import('../components/User.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')
const Profile = () => import('../components/profile.vue')


// 1 通过Vue.use(插件)，安装插件
Vue.use(Router)


// 2 将router对象传入到vue实例
export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path:'/',
    //   // redirect:'/home' // redirect重定向
    // },
    {
      path:'/home',
      component:Home,
      name:'home',
      children:[
        // {
        //   // path:'',
        //   // redirect:'news',
        // },
        {
          path:'news', // 注：子路由不需要加'/'
          component:HomeNews,
        },
        {
          path:'message',
          component:HomeMessage,
        },
      ]
    },
    {
      path: '/about',
      component: About,
      name:'about'
    },
    {
      path:'/User/:id',
      component: User
    },
    {
      path:'/profile',
      component:Profile
    },
  ]
})
