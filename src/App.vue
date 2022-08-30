<template>
       <Navbar/>
       <router-view/>
</template>

<script>
import Navbar from '@/views/Navbar.vue'
export default {

    components: {
    Navbar
    }
}



</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0 auto;
  color: #2c3e50;
}


</style>
