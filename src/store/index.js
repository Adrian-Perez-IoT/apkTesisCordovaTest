import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

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
    }
  },
  modules: {
  },
  getters:{

  }
})
