<template>
  <div>    
  <button @click="escribirBD">ButtonEscribirBD</button>
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
import { mapState, mapMutations } from "vuex";
export default {
  name: "Monitoreo",
  computed: {
    ...mapState(["sensorsReadings"])
  },
  data() {
    return {
      headers: [
        {
          text: "hour:minute:second",
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
    ...mapMutations(['escribirBD']),
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
