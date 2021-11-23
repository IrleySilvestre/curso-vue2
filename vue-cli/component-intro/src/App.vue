<template>
  <div id="app">
    <app-contadores />
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 0,
    };
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
