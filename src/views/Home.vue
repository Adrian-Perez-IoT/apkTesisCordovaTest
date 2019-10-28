<template>
  <div class="home">
    <Monitoreo/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Monitoreo from '@/components/Monitoreo.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld,
    Monitoreo
  }
}
</script>
