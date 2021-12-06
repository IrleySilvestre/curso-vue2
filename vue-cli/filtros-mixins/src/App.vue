<template>
  <div id="app">
    <h1>Filtros - Mixins</h1>
    <hr />
    <p>{{ cpf | cpf }}</p>

    <p>{{ cpf | inverter | cpf }}</p>

    <hr />
    <Frutas />
  </div>
</template>

<script>
import Frutas from "./components/Frutas.vue";
export default {
  name: "App",
  components: {
    Frutas,
  },
  data() {
    return {
      cpf: "86603477149",
    };
  },
  filters: {
    cpf(valor) {
      const arr = valor.split("");
      arr.splice(3, 0, ".");
      arr.splice(7, 0, ".");
      arr.splice(11, 0, "-");
      return arr.join("");
    },
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
