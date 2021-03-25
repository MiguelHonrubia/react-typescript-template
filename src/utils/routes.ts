import * as React from "react";

const Home = React.lazy(() => import("../pages/Home"));
const User = React.lazy(() => import("../pages/user/User"));
const UserList = React.lazy(() => import("../pages/user/List"));

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
    Component: User,
  },
  {
    path: "/list",
    name: "pages.user.list",
    authRequired: false,
    exact: true,
    Component: UserList,
  },
];
