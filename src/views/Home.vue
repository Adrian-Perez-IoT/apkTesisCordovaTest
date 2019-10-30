<template>
    <Monitoreo/>
</template>

<script>
// @ is an alias to /src pero no se funciona en la app android usando cordova (solo funciona en el browser firefox/chrome, etc)
// import HelloWorld from '@/components/HelloWorld.vue'
import Monitoreo from '../components/Monitoreo.vue'

export default {
  name: 'Home',
  components: {
    Monitoreo
  }
}
</script>
