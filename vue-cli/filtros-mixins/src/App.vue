<template>
  <div id="app">
    <h1>Filtros - Mixins</h1>
    <hr />
    <p>{{ cpf | cpf }}</p>

    <p>{{ cpf | inverter | cpf }}</p>

    <hr />
    <Frutas />
    <hr />
    <div>
      <div class="content">
        <div>
          <input @keypress.enter="add" type="text" v-model="fruta" />
          <button @click="add">+</button>
        </div>
        <ul>
          <li v-for="(fruta, index) in frutas" :key="index">{{ fruta }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Frutas from "./components/Frutas.vue";
import FrutasMixing from "./FrutasMixins";
export default {
  name: "App",
  components: {
    Frutas,
  },
  mixins: [FrutasMixing],
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
div {
  display: flex;
  justify-content: center;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 5px 3px;
  background-color: #dad4d4;
  padding: 15px;
  width: 380px;
}
input {
  font-size: 1.5rem;
}
button {
  padding: 0;
  height: 2.5rem;
  width: 2.5rem;
}
ul {
  width: 80%;
  padding: 0;
}
li {
  text-align: left;
  padding: 10px;
  margin: 0 0 5px 0;
  list-style-type: none;
  background-color: #f5e7e7;
  box-shadow: 1px 1px 1px;
}
li:hover {
  transition-property: opacity, left;
  transition-duration: 3s, 5s;
}
</style>
