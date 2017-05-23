import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import password from '../views/password'
// import login from '@/views/login'
import login from '../views/login'
//const login =resover=>require(['views/login'],resover);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
// {
//    path: '/',
//       name: 'Head',
//       component: Head,
// },
{
  path:'/login',
  name:'login',
  component: login,
}
  ]
})
