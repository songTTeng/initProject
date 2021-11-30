/*
 * @Description: 
 * @Version: 1.00
 * @Autor: songTeng
 * @Date: 2021-11-03 09:48:40
 * @LastEditors: songTeng
 * @LastEditTime: 2021-11-29 16:26:57
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/common.scss'
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
