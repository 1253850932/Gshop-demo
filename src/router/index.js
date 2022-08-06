import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "Msite",
    path: "/",
    component: () => import("../pages/Msite/Msite.vue"),
    meta: {
      showFooter: true,
    },
  },
  {
    name: "Order",
    path: "/order",
    component: () => import("../pages/Order/Order.vue"),
    meta: {
      showFooter: true,
    },
  },
  {
    name: "Profile",
    path: "/profile",
    component: () => import("../pages/Profile/Profile.vue"),
    meta: {
      showFooter: true,
    },
  },
  {
    name: "Search",
    path: "/search",
    component: () => import("../pages/Search/Search.vue"),
    meta: {
      showFooter: true,
    },
  },
  {
    name: "Login",
    path: "/login",
    component: () => import("../pages/Login/Login.vue"),
  },
  {
    name: "Shop",
    path: "/shop",
    component: () => import("../pages/Shop/Shop.vue"),
    children: [
      {
        name: "ShopGoods",
        path: "/shop/",
        component: () => import("../pages/Shop/ShopGoods/ShopGoods.vue"),
      },
	  {
        name: "ShopRatings",
        path: "/shop/ratings",
        component: () => import("../pages/Shop/ShopRatings/ShopRatings.vue"),
      },
	  {
        name: "ShopInfo",
        path: "/shop/info",
        component: () => import("../pages/Shop/ShopInfo/ShopInfo.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
