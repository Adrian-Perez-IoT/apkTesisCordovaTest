<template>
  <div>
    <Notificacion/>
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
      notifications:[
      {moment:"20 de Octubre de 2019, 11:52 AM", lugar:"Living roo"},
      {moment:"21 de Octubre de 2019, 21:06 AM", lugar:"Backyard"},
    ]
    }
    
  }
}
</script>
