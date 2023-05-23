import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/pages/Home/Home.vue';
import Detail from '@/pages/DetailView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'Main',
      path: '/',
      component: Main,
    },
    {
      name: 'Detail',
      path: '/detail',
      component: Detail,
    },
  ],
});

export default router;
