<template>
  <div id="app">
    <User />
  </div>
</template>

<script>
import User from "./components/User.vue";

export default {
  name: "App",
  components: {
    User,
  },

  created() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
