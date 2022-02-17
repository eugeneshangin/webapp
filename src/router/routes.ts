import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/TheMain/index.vue'),
    children: [{
      path: '',
      name: 'main',
      component: () => import('pages/Main/index.vue')
    }, {
      path: 'contacts',
      name: 'contacts',
      component: () => import('pages/Contacts/index.vue')
    }, {
      path: 'education',
      name: 'education',
      component: () => import('pages/Education/index.vue')
    }, {
      path: 'examples',
      name: 'examples',
      component: () => import('pages/WorkExamples/index.vue')
    }],
  },
  {
    path: '/admin',
    component: () => import('layouts/TheAdmin/index.vue'),
    children: [{
      path: '',
      name: 'admin',
      component: () => import('pages/AdminPanel/index.vue')
    }]
  },
  {
    path: '/login',
    component: () => import('layouts/TheAdmin/index.vue'),
    children: [{
      path: '',
      name: 'login',
      component: () => import('pages/Auth/index.vue')
    }]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
