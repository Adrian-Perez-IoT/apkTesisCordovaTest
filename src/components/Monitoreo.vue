<template>
  <div>    
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
import { mapState } from "vuex";
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
      desserts: [
        {
          hhmmss: "23:15:00",
          mq2: "normal",
          mag: "closed",
          pir1: "no",
          pir2: "no"
        },
        {
          hhmmss: "23:15:01",
          mq2: "warning",
          mag: "closed",
          pir1: "no",
          pir2: "no"
        },
        {
          hhmmss: "23:15:02",
          mq2: "warning",
          mag: "closed",
          pir1: "no",
          pir2: "no"
        },
        {
          hhmmss: "23:15:03",
          mq2: "warning",
          mag: "open",
          pir1: "no",
          pir2: "yes"
        },
        {
          hhmmss: "23:15:04",
          mq2: "warning",
          mag: "open",
          pir1: "yes",
          pir2: "no"
        },
        {
          hhmmss: "23:15:05",
          mq2: "warning",
          mag: "open",
          pir1: "yes",
          pir2: "yes"
        },
        {
          hhmmss: "23:15:06",
          mq2: "warning",
          mag: "open",
          pir1: "no",
          pir2: "no"
        },
        {
          hhmmss: "23:15:07",
          mq2: "danger",
          mag: "closed",
          pir1: "no",
          pir2: "no"
        },
        {
          hhmmss: "23:15:08",
          mq2: "danger",
          mag: "closed",
          pir1: "no",
          pir2: "yes"
        },
        {
          hhmmss: "23:15:09",
          mq2: "danger",
          mag: "closed",
          pir1: "yes",
          pir2: "no"
        }
      ]
    };
  },
  methods: {
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
