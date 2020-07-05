import Vue from 'vue'
import VueMq from 'vue-mq'
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
  render: h => h(App),
}).$mount('#app')
