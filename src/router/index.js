import Vue from "vue";
import VueRouter from "vue-router";
import Login from  '../views/loggin/index.vue';
// import Layout from '../components/Layout.vue';

Vue.use(VueRouter);

const routes = [
 {
  path:"/Login",
  name:"login",
  component:Login
 },
//  {
//    path:"/",
//    component:Layout
//  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
