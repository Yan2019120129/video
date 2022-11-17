//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue';

import VueRouter from 'vue-router';

import router from './router';

import store from './store';

import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios';

// 将axios挂在到原型上
Vue.prototype.axios = axios;
//关闭Vue的生产提示
Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(ElementUI);
//创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router,
})
