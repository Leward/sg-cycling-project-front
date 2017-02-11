import Hello from './app/Hello.vue';
import Map from './app/Map.vue';

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: Hello
      }
    },
    {
      path: '/parking',
      components: {
        default: Map
      }
    }
  ]
});

export default router;
