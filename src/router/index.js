import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import ProductsView from "../views/ProductsView.vue";
import CreateProductsView from "../views/CreateProductsView.vue";
import EditProductsView from "../views/EditProductsView.vue";

//import store from '../store';

Vue.use(VueRouter);





const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes : [
    {
      path: "/",
      name: "home",
      component: HomeView,
      
    },
  
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta : {
        guest: true
      }
    },
  
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      meta : {
        guest: true
      }
    },
  
    {
      path: "/products",
      name: "products",
      component: ProductsView,
  
      meta : {
        secure: true
      }
    },
  
    {
      path: "/create-products",
      name: "createProducts",
      component: CreateProductsView,
  
      meta : {
        secure: true
      }
    },
  
  
    {
      path: "/:id/edit",
      name: "editProducts",
      component: EditProductsView,
  
      meta : {
        secure: true
      }
    }

  ]
});

router.beforeEach(( to, from, next) => {

  if(to.matched.some(record => record.meta.secure)) {

    if(!localStorage.getItem("token") == null) {

      next({
        path : '/login'
      });

      

    } else {
      next();
    }

  } else if(to.matched.some(record => record.meta.guest)) {

    if(localStorage.getItem("token") == null) {

     

      next();
     

    } else {

      next({
        path : '/'
      });

    }


  } else {
    if(localStorage.getItem("token") == null) {

      next({
        path : '/login'
      });
     

    } 
  }
});




export default router;
