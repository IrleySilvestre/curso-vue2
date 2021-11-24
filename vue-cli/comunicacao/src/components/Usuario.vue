<template>
  <div class="container">
    <h1>Componente Usuário</h1>
    <p>Este é um componente muito legal !!!</p>
    <p>
      Nome é
      <strong>{{nome}}</strong> Idade:
      <strong>{{idade}}</strong>
    </p>
    <button @click="alterarNome">Alterar Nome</button>
    <hr />
    <div class="componentes">
      <UsuarioInfo
        :nome="nome"
        :idade="idade"
        @nomeMudou="nome = $event"
        :reiniciarFn="reiniciarNome"
      />
      <UsuarioEditar :idade="idade" />
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
      idade: 45,
    };
  },
  methods: {
    alterarNome() {
      this.nome = "Joana";
    },
    reiniciarNome() {
      this.nome = "Pedro";
    },
  },
};
</script>

<style >
.container {
  padding: 15px;
  background: #2c3e50;
  color: #fff;
}
.componentes {
  display: flex;
}
</style>