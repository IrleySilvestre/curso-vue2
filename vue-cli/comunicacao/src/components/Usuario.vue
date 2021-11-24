<template>
  <div class="container">
    <h1>Componente Usuário</h1>
    <p>Este é um componente muito legal !!!</p>
    <button @click="alterarNome">Alterar Nome</button>
    <hr />
    <div class="componentes">
      <UsuarioInfo :nome="nome" />
      <UsuarioEditar />
    </div>
  </div>
</template>

<script>
import UsuarioEditar from "./UsuarioEditar.vue";
import UsuarioInfo from "./UsuarioInfo.vue";
export default {
  components: {
    UsuarioEditar,
    UsuarioInfo,
  },
  data() {
    return {
      nome: "Joaquim",
    };
  },
  methods: {
    alterarNome() {
      this.nome = "Joana";
    },
  },
};
</script>

<style >
.container {
     background: #2c3e50;
     color: #fff;
}
.componentes{
    display: flex;
}
</style>