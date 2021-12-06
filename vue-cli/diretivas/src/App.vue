<template>
  <div id="app">
    <Diretivas />
  </div>
</template>

<script>
import Diretivas from "./components/Diretivas.vue";

export default {
  name: "App",
  components: {
    Diretivas,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
