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

import VueVideoPlayer from 'vue-video-player'
require('/node_modules/video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

import VueCoreVideoPlayer from 'vue-core-video-player'


// 将axios挂在到原型上
Vue.prototype.axios = axios;
Vue.prototype.axios = axios;
//关闭Vue的生产提示
Vue.config.productionTip = false;
Vue.use(VueCoreVideoPlayer, {
    lang: 'zh-CN'
})
Vue.use(VueVideoPlayer)
Vue.use(VueRouter);
Vue.use(ElementUI);
//创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router,
})
