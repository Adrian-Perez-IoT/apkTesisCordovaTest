import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import firebase from 'firebase'
import { log } from 'util';

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDaPl-WfltavFvF1FdwTNLSHfMry9mVA5I",
  authDomain: "backend-de7e2.firebaseapp.com",
  databaseURL: "https://backend-de7e2.firebaseio.com",
  projectId: "backend-de7e2",
  storageBucket: "backend-de7e2.appspot.com",
  messagingSenderId: "696120565365",
  appId: "1:696120565365:web:df9414fea17efba351223c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user){
  log('Se inicializo firebase con el usario:', user);
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app') 
    
})


