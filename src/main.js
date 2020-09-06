import Vue from 'vue'
import VueMq from 'vue-mq'
import Vuelidate from 'vuelidate'
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import App from './App'
import router from './router';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as VueGoogleMaps from "vue2-google-maps";

// VGM Config
import { vgmAPIKey } from './vgm-config'

import vuetify from './plugins/vuetify';
const firebaseConfig = {
  apiKey: "AIzaSyCbn9aLLWWpYxFjSIUqPHQXikP-4HgpKJo",
  authDomain: "modular-virtue-280119.firebaseapp.com",
  databaseURL: "https://modular-virtue-280119.firebaseio.com",
  projectId: "modular-virtue-280119",
  storageBucket: "modular-virtue-280119.appspot.com",
  messagingSenderId: "303207645239",
  appId: "1:303207645239:web:71dd3bb23ebde7b24fbfb2",
  measurementId: "G-NFN2VQ5GK1"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
Vue.config.productionTip = false;
Vue.prototype.$apiKey = vgmAPIKey;
Vue.use(BootstrapVue)
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