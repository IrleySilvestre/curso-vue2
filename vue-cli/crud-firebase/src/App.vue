<template>
  <div id="app">
    <FormUser />
  </div>
</template>

<script>
import FormUser from "./components/FormUser.vue";

export default {
  name: "App",
  components: {
    FormUser,
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
