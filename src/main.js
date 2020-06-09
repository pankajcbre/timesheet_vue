import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import vuetify from './plugins/vuetify'
import VueTextareaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/app'
import 'firebase/firestore'
import store from '@/store/index'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'

import './assets/scss/style.scss'


Vue.use(VueTextareaAutosize, VueMoment, {
  moment,
});
Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyDPUuad4XD4ziEBL55REFgjvf639T-syS4",
  authDomain: "leaveplanner-df9b8.firebaseapp.com",
  databaseURL: "https://leaveplanner-df9b8.firebaseio.com",
  projectId: "leaveplanner-df9b8",
  storageBucket: "leaveplanner-df9b8.appspot.com",
  messagingSenderId: "917597276289",
  appId: "1:917597276289:web:764353f23bd9be12e82580"

});

export const db = firebase.firestore();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')