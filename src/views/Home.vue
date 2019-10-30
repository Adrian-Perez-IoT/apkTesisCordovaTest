<template>
  <div>    
  <!-- <v-btn color="secondary" dark @click="escribirBD">EscribirBD</v-btn> -->
  <!-- <v-btn color="primary" dark @click="obtenerToken">Get Token</v-btn> -->
  <v-btn color="primary" dark @click="readBroadcast">Actualizar</v-btn>
    <v-data-table :headers="headers" :items="sensorsReadings" class="elevation-1">
      <template v-slot:item.mq2="{ item }">
        <v-chip :color="getColorMq2(item.mq2)" dark outlined>{{ item.mq2 }}</v-chip>
      </template>
      <template v-slot:item.mag="{ item }">
        <v-chip :color="getColorMag(item.mag) " dark outlined>{{ item.mag }}</v-chip>
      </template>
      <template v-slot:item.pir1="{ item }">
        <v-chip :color="getColorPir1(item.pir1) " dark outlined>{{ item.pir1 }}</v-chip>
      </template>
      <template v-slot:item.pir2="{ item }">
        <v-chip :color="getColorPir2(item.pir2) " dark outlined>{{ item.pir2 }}</v-chip>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions} from "vuex";
import { log } from 'util';


// import func from '../../vue-temp/vue-editor-bridge';
export default {
  name: "Monitoreo",
  created(){
    this.readBroadcast()
  },
  computed: {
    ...mapState(["sensorsReadings"])
  },
  data() {
    return {
      headers: [
        {
          text: "hour:minutes:seconds",
          align: "center",
          sortable: false,
          value: "hhmmss"
        },
        { text: "Toxic gas", align: "center", value: "mq2" },
        { text: "Main door status", align: "center", value: "mag" },
        { text: "Movement (home backyard)", align: "center", value: "pir1" },
        { text: "Movement (home living room)", align: "center", value: "pir2" }
      ],      
    };
  },
  methods: {
    ...mapActions(['readBroadcast','obtenerToken']),
    ...mapMutations(['escribirBD']),

    getToken(){
      
      // algo.getToken(
      //   function(token){
      //     // save this server-side and use it to push notifications to this device
      //     log(token);
      //   },
      //   function(error){
      //     log(error);
      //   }
      // );
      log("token es:");
      // alert('token:')
    },

    getColorMq2(mq2) {
      if (mq2 === "danger") {
        return "red";
      } else {
        if (mq2 === "warning") {
          return "orange";
        } else {
          return "green";
        }
      }
    },
    getColorMag(mag) {
      if (mag === "open") return "orange";
      else return "green";
    },
    getColorPir1(pir1) {
      if (pir1 === "yes") return "orange";
      else return "green";
    },
    getColorPir2(pir2) {
      if (pir2 === "yes") return "orange";
      else return "green";
    }
  }
};
</script>
