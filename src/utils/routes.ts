import * as React from "react";

const Home = React.lazy(() => import("../pages/Home"));
const Login = React.lazy(() => import("../pages/user/Login"));
const Register = React.lazy(() => import("../pages/user/Register"));

export const routes = [
  {
    path: "/",
    name: "pages.home",
    authRequired: true,
    exact: true,
    Component: Home,
  },
  {
    path: "/login",
    name: "pages.login",
    authRequired: false,
    exact: true,
    Component: Login,
  },
  {
    path: "/register",
    name: "pages.register",
    authRequired: false,
    exact: true,
    Component: Register,
  },
];
