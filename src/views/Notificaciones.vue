<template>
  <div>
    <v-expansion-panels v-model="panel" :readonly="readonly" multiple >
          <Notificacion v-for="(item, index) in notifications" :key="index"/>      
    </v-expansion-panels>

  </div>
</template>

<script>

import Notificacion from '@/components/Notificacion.vue'

export default {
  name: 'notificaciones',
  components: {
    Notificacion
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
      panel: [], //esto son los paneles que quiero que se muestren abiertos
      readonly: false,
      
    }
    
  }
}
</script>
