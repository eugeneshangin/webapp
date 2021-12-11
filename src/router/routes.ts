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

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
