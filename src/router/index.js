import vue from 'vue';
import VueRouter from 'vue-router';
const Home = () => import('../views/home/home')
vue.use(VueRouter);
const routes=[
    {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        component: Home
      }
]
const route =new VueRouter({
    routes,
    mode:'history'
})
export default route;