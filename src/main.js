import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import vSelect from 'vue-select';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-select/dist/vue-select.css';
import App from './App.vue';
import router from './router';
import store from './store';

// Install BootstrapVue
Vue.use(BootstrapVue);

Vue.component('v-select', vSelect);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  router,
  store,

  render: function (hyperscript) {
    return hyperscript(App);
  }
}).$mount('#app');
