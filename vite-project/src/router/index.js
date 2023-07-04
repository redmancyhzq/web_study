import {createRouter,createWebHistory} from "vue-router";
//创建路由规则
const routes = [
  {
    path:"/",
    component: () => import("../components/login.vue")
  },
  {
    path:"/login",
    component: () => import("../components/login.vue")
  },
  { 
    path:"/home",
    component: () => import("../components/home.vue")
  },
  {
    path:"/",
    component: () => import("../components/main.vue"),
    children:[
      
        {
          path:"/login",
          component: () => import("../components/login.vue")
        },
        { 
          path:"/home",
          component: () => import("../components/home.vue")
        },
      
    ]
  },
];

//创建路由实例

const router=createRouter ({
  history:createWebHistory(),
  routes,
})
export default router