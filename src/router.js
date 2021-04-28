import { createWebHistory, createRouter } from 'vue-router';
import Home from './pages/MainPage/Home';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/NetworkSecurity',
    name: 'NetworkSecurity',
    component: () => import('./pages/MainPage/NetworkSecurity')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('./pages/MainPage/Settings')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
