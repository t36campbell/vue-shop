// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import vueSmoothScroll from 'vue2-smooth-scroll'
import Vuelidate from 'vuelidate'
import $ from 'jquery'
import App from './App'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(vueSmoothScroll)
Vue.use(Vuelidate)
Vue.use($)
/* eslint-disable no-new */
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyA5-ODvORC_erNqFZ8Jrd1IAEvMmuLdiIo",
    libraries: "places" 
  }
});
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
