import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sensorsReadings:[
      {hhmmss:'00:46:00', mag:'closed', mq2:'normal', pir1:'no', pir2:'no'},
      {hhmmss:'00:46:01', mag:'open', mq2:'warning', pir1:'no', pir2:'yes'},
      {hhmmss:'00:46:02', mag:'closed', mq2:'danger', pir1:'yes', pir2:'no'},
      {hhmmss:'00:46:03', mag:'closed', mq2:'danger', pir1:'yes', pir2:'yes'},
      {hhmmss:'00:46:00', mag:'closed', mq2:'normal', pir1:'no', pir2:'no'},
      {hhmmss:'00:46:01', mag:'open', mq2:'warning', pir1:'no', pir2:'yes'},
      {hhmmss:'00:46:02', mag:'closed', mq2:'danger', pir1:'yes', pir2:'no'},
      {hhmmss:'00:46:03', mag:'closed', mq2:'danger', pir1:'yes', pir2:'yes'},
      {hhmmss:'00:46:00', mag:'closed', mq2:'normal', pir1:'no', pir2:'no'},
      {hhmmss:'00:46:01', mag:'open', mq2:'warning', pir1:'no', pir2:'yes'},
      {hhmmss:'00:46:02', mag:'closed', mq2:'danger', pir1:'yes', pir2:'no'},
      {hhmmss:'00:46:03', mag:'closed', mq2:'danger', pir1:'yes', pir2:'yes'},
      {hhmmss:'00:46:00', mag:'closed', mq2:'normal', pir1:'no', pir2:'no'},
      {hhmmss:'00:46:01', mag:'open', mq2:'warning', pir1:'no', pir2:'yes'},
      {hhmmss:'00:46:02', mag:'closed', mq2:'danger', pir1:'yes', pir2:'no'},
      {hhmmss:'00:46:03', mag:'closed', mq2:'danger', pir1:'yes', pir2:'yes'},
    ]
  },
  mutations: {
    escribirBD:function(){
      firebase.database().ref('/salas/1').set("algoAqui")
    }

  },
  actions: {
    
  },
  modules: {
  },
  getters:{

  }
})
