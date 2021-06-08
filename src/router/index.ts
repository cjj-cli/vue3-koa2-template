import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from './home';

const routes: Array<RouteRecordRaw> = [
  ...Home,
  {
    name: 'login',
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login/Index.vue'),
  },
  {
    name: 'NotFound',
    path: '/:catchAll(.*)',
    component: () => import(/* webpackChunkName: "notFound" */ '@/views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
