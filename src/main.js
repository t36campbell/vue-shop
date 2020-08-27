import Vue from 'vue'
import VueMq from 'vue-mq'
import Vuelidate from 'vuelidate'
import App from './App'
import router from './router';
import * as VueGoogleMaps from "vue2-google-maps";

// VGM Config
import { vgmAPIKey } from './vgm-config'

import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.prototype.$apiKey = vgmAPIKey;
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
  vuetify,
  render: h => h(App)
}).$mount('#app')
