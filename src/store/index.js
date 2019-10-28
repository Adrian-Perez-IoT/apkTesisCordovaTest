import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import { log } from 'util';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sensorsReadings:[]
  },
  mutations: {
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
    setVapidAndRequestPermission:function(){
      const messaging = firebase.messaging();
      messaging.usePublicVapidKey("BAX59fGcl36uH9EqPMZbV7O-bvV0Wv5Bt-hzhlnUTqxdaVbazqS9qMawIzSO_OE9p0IAofUnjy2b92mgWZD3wu8");
      
      messaging.requestPermission().then((permission) => {
        if (permission === 'granted') {
          log('Notification permission granted.');
          // TODO(developer): Retrieve an Instance ID token for use with FCM.
          // ...
        } else {
          log('Unable to get permission to notify.');
        }
      });
    },
    recuperarToken:function(){
      const messaging = firebase.messaging();
      messaging.getToken().then((currentToken) => {
        if (currentToken) {
          log(currentToken);
        } else {
          // Show permission request.
          log('No Instance ID token available. Request permission to generate one.');
          // Show permission UI.
          // updateUIForPushPermissionRequired();
          // setTokenSentToServer(false);
        }
      }).catch((err) => {
        log('An error occurred while retrieving token. ', err);
        // showToken('Error retrieving Instance ID token. ', err);
        // setTokenSentToServer(false);
      });
      
      
    },
  },
  modules: {
  },
  getters:{

  }
})
