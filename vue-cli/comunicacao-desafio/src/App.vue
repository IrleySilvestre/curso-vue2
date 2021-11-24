<template>
  <div id="app">
    <UsuarioLista :usuarios="usuarios" />
    <UsuarioDetalhe />
  </div>
</template>

<script>
import UsuarioDetalhe from "./components/UsuarioDetalhe.vue";
import UsuarioLista from "./components/UsuarioLista.vue";

export default {
  name: "App",
  components: {
    UsuarioDetalhe,
    UsuarioLista,
  },
  data() {
    return {
      usuarios: [
        { id: 1, nome: "Ana", idade: 31 },
        { id: 2, nome: "Carlos", idade: 22 },
        { id: 3, nome: "Daniel", idade: 40 },
        { id: 4, nome: "Ema", idade: 17 },
        { id: 5, nome: "Lia", idade: 28 },
      ],
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

  display: flex;
  font-size: 2rem;
}
#app div {
  margin: 20px;
}
</style>
