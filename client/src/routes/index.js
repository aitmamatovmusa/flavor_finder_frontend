import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/views/MainView.vue';
import Detail from '@/views/DetailView.vue';

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
