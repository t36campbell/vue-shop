import Vue from 'vue'
import VueMq from 'vue-mq'
import BootstrapVue from 'bootstrap-vue'
import vueSmoothScroll from 'vue2-smooth-scroll'
import Vuelidate from 'vuelidate'
import App from './App'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router';
import * as VueGoogleMaps from "vue2-google-maps";
// VGM Config
import { vgmAPIKey } from './vgm-config'

Vue.config.productionTip = false
Vue.prototype.$apiKey = vgmAPIKey;
Vue.use(BootstrapVue)
Vue.use(vueSmoothScroll)
Vue.use(Vuelidate)
/* eslint-disable no-new */
Vue.use(VueGoogleMaps, {
  load: {
    key: vgmAPIKey,
    libraries: "places" 
  }
})
Vue.use(VueMq, {
  breakpoints: {
    xs: 450,
    sm: 700,
    md: 1000,
    lg: 1250,
    xl: Infinity,
  }
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
