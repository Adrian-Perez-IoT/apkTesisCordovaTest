<template>  
      <v-expansion-panel>
        <v-expansion-panel-header>
          <v-chip color="orange" text-color="dark">
            <v-avatar left>
              <v-icon>mdi-bell-outline</v-icon>
            </v-avatar>Movement on home living room
          </v-chip>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row dense>
            <v-col cols="12">
              <v-card color="#ff98000F" :shaped='true'>
                <v-card-subtitle
                  class="my-0 subtitle-1 black--text"
                >Living room: movimiento detectado</v-card-subtitle>
                <v-card-text>
                  <div class="font-weight-regular black--text">Moment:</div>
                  <div class="font-weight-regular black--text mb-3">29 de Octubre de 2019, 11:59 AM</div>
                  <v-divider class="mx-4"></v-divider>
                  <div class="font-weight-regular black--text mt-3">Site:</div>
                  <div class="font-weight-regular black--text mb-3">Living room</div>
                  <v-divider class="mx-4"></v-divider>
                  <div class="font-weight-regular black--text mt-3">Triggered by:</div>
                  <div class="font-weight-regular black--text mb-3">Sensor Pir2</div>
                  <v-divider class="mx-4"></v-divider>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    
    <!-- <v-expansion-panels v-model="panel" :readonly="readonly" multiple>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <v-chip color="orange" text-color="dark">
            <v-avatar left>
              <v-icon>mdi-bell-outline</v-icon>
            </v-avatar>Movement on home living room
          </v-chip>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row dense>
            <v-col cols="12">
              <v-card color="#ff98000F" :shaped='true'>
                <v-card-subtitle
                  class="my-0 subtitle-1 black--text"
                >Living room: movimiento detectado</v-card-subtitle>
                <v-card-text>
                  <div class="font-weight-regular black--text">Moment:</div>
                  <div class="font-weight-regular black--text mb-3">29 de Octubre de 2019, 11:59 AM</div>
                  <v-divider class="mx-4"></v-divider>
                  <div class="font-weight-regular black--text mt-3">Site:</div>
                  <div class="font-weight-regular black--text mb-3">Living room</div>
                  <v-divider class="mx-4"></v-divider>
                  <div class="font-weight-regular black--text mt-3">Triggered by:</div>
                  <div class="font-weight-regular black--text mb-3">Sensor Pir2</div>
                  <v-divider class="mx-4"></v-divider>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Panel 2</v-expansion-panel-header>
        <v-expansion-panel-content>Some content</v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Panel 3</v-expansion-panel-header>
        <v-expansion-panel-content>Some content</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels> -->
  
</template>

<script>
// import { mapState, mapMutations, mapActions} from "vuex";
import { log } from "util";

export default {
  name: "Notificacion",
  created() {},
  /* computed: {
    ...mapState([""])
  }, */
  data() {
    return {
      notifications:[
        {moment:"20 de Octubre de 2019, 11:52 AM", lugar:"Living roo"},
        {moment:"21 de Octubre de 2019, 21:06 AM", lugar:"Backyard"},
      ],
      panel: [0, 1],
      readonly: false,
    };
  },
  methods: {
    /* ...mapActions(['','']),
    ...mapMutations(['']),
 */
    myFunction() {
      log("Estoy en myFunction");
    },

    myFuncion() {}
  }
};
</script>
