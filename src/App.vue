<template>
  <v-app> 
    <ToolBar app/>
    <v-content app>      
        <!-- <Monitoreo/>Para safar, pero no es la mejor solucion para visualizar la monitorizacion apenas inicia mi app en el smartphone -->
        <router-view app></router-view>
    </v-content>    
  </v-app>
</template>

<script>
import ToolBar from './components/ToolBar';
// import Monitoreo from './views/Monitoreo.vue';

export default {
  name: 'App',
  components: {
     ToolBar, 
    //  Monitoreo
  },
  /* created() {
    this.readBroadcast()
  },
  methods:{
    ...mapActions(['readBroadcast'])
  }, */
  data: () => ({
  }),  
};
</script>
