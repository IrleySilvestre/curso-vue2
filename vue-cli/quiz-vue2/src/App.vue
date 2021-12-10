<template>
  <div id="app">
    <h1 @click="selectComponent">Quiz</h1>
    <component :is="componentSelected"></component>
  </div>
</template>

<script>
import Questions from "./components/Questions.vue";
import Result from "./components/Result.vue";
export default {
  name: "App",
  components: { Questions, Result },
  data() {
    return {
      componentSelected: "Questions",
    };
  },
  methods: {
    selectComponent() {
      return (this.componentSelected =
        this.componentSelected == "Questions" ? "Result" : "Questions");
    },
  },
};
</script>

<style>
body {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 16, 121, 1) 16%,
    rgba(32, 55, 173, 1) 97%
  );
  font-family: "Roboto", sans-serif;
  color: #ffffff;
  height: 100vh;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#app h1 {
  font-weight: bold;
  font-size: 4rem;
}
</style>
