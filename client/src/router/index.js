import Vue from "vue";
import Router from "vue-router";

// Users
import UserIndex from "@/components/Users/Index";
import UserCreate from "@/components/Users/CreateUser";
import UserEdit from "@/components/Users/EditUser";
import UserShow from "@/components/Users/ShowUser";
import Login from "@/components/Login";

// TV Shows
import TvIndex from "@/components/Tv/TvIndex";
import TvCreate from "@/components/Tv/TvCreate";
import TvEdit from "@/components/Tv/TvEdit";
import TvShow from "@/components/Tv/TvShow";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/users",
      name: "users",
      component: UserIndex
    },
    {
      path: "/user/create",
      name: "users-create",
      component: UserCreate
    },
    {
      path: "/user/edit/:userId",
      name: "users-edit",
      component: UserEdit
    },
    {
      path: "/user/:userId",
      name: "user",
      component: UserShow
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    // TV Shows Routes
    {
      path: "/tvs",
      name: "tvs",
      component: TvIndex
    },
    {
      path: "/tv/create",
      name: "tvs-create",
      component: TvCreate
    },
    {
      path: "/tv/edit/:tvId",
      name: "tvs-edit",
      component: TvEdit
    },
    {
      path: "/tv/:tvId",
      name: "tv",
      component: TvShow
    }
  ]
});
