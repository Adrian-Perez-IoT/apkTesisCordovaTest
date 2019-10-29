<template>
  <div>    
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions} from "vuex";
import { log } from 'util';

export default {
  name: "Notificacion",
  created(){    
  },
  computed: {
    ...mapState([""])
  },
  data() {
    return {            
    };
  },
  methods: {
    ...mapActions(['','']),
    ...mapMutations(['']),

    myFunction(){      
        log ("Estoy en myFunction")
    },

    myFuncion() {      
    },    
  }
};
</script>
