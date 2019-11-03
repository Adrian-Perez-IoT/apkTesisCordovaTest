<template>
  <div>
      <!-- <v-btn color="primary" dark @click="readNotifications">LeerNotificaciones</v-btn> -->
    <v-expansion-panels v-model="panel" :readonly="readonly" multiple >
          <!-- <Notificacion v-for="(item, index) in notifications" :key="index"/>       -->
          <v-expansion-panel v-for="(item, index) in notifications" :key="index">
            <v-expansion-panel-header>
              <v-chip color="orange" text-color="dark">
                <v-avatar left>
                  <v-icon>mdi-bell-outline</v-icon>
                </v-avatar>Place: {{item.place}}
              </v-chip>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row dense>
                <v-col cols="12">
                  <v-card color="#ff98000F" :shaped='true'>
                    <v-card-subtitle
                      class="my-0 subtitle-1 black--text"
                    >It was detected: {{item.sensorType}} </v-card-subtitle>
                    <v-card-text>
                      <div class="font-weight-regular black--text">Moment:</div>
                      <div class="font-weight-regular black--text mb-3">{{item.moment}}</div>
                      <v-divider class="mx-4"></v-divider>
                      <div class="font-weight-regular black--text mt-3">Site:</div>
                      <div class="font-weight-regular black--text mb-3">{{item.place}}</div>
                      <v-divider class="mx-4"></v-divider>
                      <div class="font-weight-regular black--text mt-3">Triggered by sensor:</div>
                      <div class="font-weight-regular black--text mb-3">{{item.sensorName}}</div>
                      <v-divider class="mx-4"></v-divider>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
    </v-expansion-panels>

  </div>
</template>

<script>
import { mapState, mapActions} from "vuex";
// import Notificacion from '@/components/Notificacion.vue'

export default {
  name: 'notificaciones',
  computed: {
    ...mapState(["notifications"])
  },
  mounted(){
    this.readNotifications()
  },
  data(){
    return{
      otherNotifications:[
        {moment:"20 de Octubre de 2019, 11:52 AM", lugar:"Living roo"},
        {moment:"21 de Octubre de 2019, 21:06 AM", lugar:"Backyard"},
        {moment:"20 de Octubre de 2019, 11:52 AM", lugar:"Living roo"},
        {moment:"21 de Octubre de 2019, 21:06 AM", lugar:"Backyard"},
        {moment:"20 de Octubre de 2019, 11:52 AM", lugar:"Living roo"},
        {moment:"21 de Octubre de 2019, 21:06 AM", lugar:"Backyard"},
      ],
      panel: [], //esto son los paneles que quiero que se muestren abiertos?
      readonly: false,  
    }    
  },
  components: {
    // Notificacion
  },  
  methods:{
    ...mapActions(['readNotifications']),
  }
    
}
</script>
