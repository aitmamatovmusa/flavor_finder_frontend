import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home/Home.vue';
import DetailPlace from '@/pages/DetailPlace/DetailPlace.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: 'DetailPlace',
      path: '/place/:id',
      component: DetailPlace,
    },
  ],
});

export default router;
