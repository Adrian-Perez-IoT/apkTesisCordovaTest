import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import { log } from 'util';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sensorsReadings:[],
    notifications:[
      { moment:"Data set of default", 
        number:"Data set of default", 
        place:"Data set of default", 
        sensorType:"Data set of default", 
        sensorStatus:"Data set of default",
        sensorName:"Data set of default",
      },      
    ],
    user: null,
    loading: false,
    error: null  
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    },
    setNotifications(state, data){ 
      // state.notifications.push({moment:"20 de Octubre de 2019, 11:52 AM", lugar:"Living roo"});
      state.notifications = [];
      if (data){
        const notificationsIds = Object.keys(data);
        notificationsIds.forEach((notificationId)=>{
          // alert(readingId);
          // alert(data[readingId].hhmmss);
          state.notifications.push(
            data[notificationId]
          )
          
        })
      }
     },
    setSensorsReadings(state, data){ 
      state.sensorsReadings = [];
      if (data){
        const readingsIds = Object.keys(data);
        readingsIds.forEach((readingId)=>{
          // alert(readingId);
          // alert(data[readingId].hhmmss);
          state.sensorsReadings.push(
            data[readingId]
          )
          
        })
      }
     },
    //setError(,){  }
    escribirBD:function(){
      firebase.database().ref('/salas/3').set("MasAlgoAqui")
    }

  },
  actions: {
    logout ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
      log('Se cerro la sesion del usuario')
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              // registeredMeetups: []
            }
            commit('setUser', newUser)
            log('Se inicio sesion con el usuario', newUser.id)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            log(error)
          }
        )
    },
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              // registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            log(error)
          }
        )
    },
    clearError ({commit}) {
      commit('clearError')
    },
    async myFunction(){ 
    },
    async readNotifications (context){
      log('estoy en readNotifications');
      await firebase.database().ref('/Notifications').once('value').then(
        function(snapshot){
          context.commit('setNotifications',snapshot.val());
          // log("readNotifications:", snapshot.val());
          // log("contexto:", context);
        }
      )

    },
    // readBroadcast:function(){
    //   firebase.database().ref('/StreamingTemporary/idPush').once('value').then(
    //     function(snapshot){
    //       alert(snapshot.val().mq2)
    //     }
    //   )
    // },
    readBroadcast:function(context){
      firebase.database().ref('/StreamingTemporary').once('value').then(
        function(snapshot){
          context.commit('setSensorsReadings',snapshot.val());
        }
      )
    },
    
    obtenerToken:function(){
      log("entre a la funcion obtenerToken");
      //nota: cuando ejecuto el codigo en el navegador, el objeto "Notification" no esta definino en "window"
      /* Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          log('Notification permission granted.');
          // TODO(developer): Retrieve an Instance ID token for use with FCM.
          // ...
        } else {
          log('Unable to get permission to notify.');
        }
      }); */

      //reemplazar el uso de la libreria firebase por la libreria cordova-plugin-firebasex-lib
      // const messaging = firebase.messaging();
      // messaging.getToken()
      //   .then(
      //     (currentToken) => {
      //       if (currentToken) {
      //         log('currentToken Valido',currentToken)
      //         // sendTokenToServer(currentToken);
      //         // updateUIForPushEnabled(currentToken);
      //       } else {
      //         // Show permission request.
      //         log('No Instance ID token available. Request permission to generate one.');
      //         // Show permission UI.
      //         // updateUIForPushPermissionRequired();
      //         // setTokenSentToServer(false);
      //       }
      //     })
      //   .catch(
      //     (err) => {
      //       log('error desde el cath',err)
      //       // console.log('An error occurred while retrieving token. ', err);
      //       // showToken('Error retrieving Instance ID token. ', err);
      //       // setTokenSentToServer(false);
      //     }
      //   );
      // log('token token');
    }
  },
  modules: {
  },
  getters: {    
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  }
})
