<template>
  <div id="app">
    <Usuario/>
  </div>
</template>

<script>
import Usuario from './components/Usuario.vue'

export default {
  name: 'App',
  components: {
    Usuario
  }
}
</script>

<style>
#app {
 
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
</style>
