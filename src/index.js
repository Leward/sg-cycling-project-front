import Vue from 'vue';

import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import router from './router';

export default new Vue({
  el: '#root',
  router,
  render: h => h('router-view')
});
