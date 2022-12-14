import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueMask from 'v-mask'

Vue.config.productionTip = false
Vue.use(VueMask);
Vue.use(ElementUI);

new Vue({
   el: '#app',
   router,
   store,
   render: h => h(App)
})
