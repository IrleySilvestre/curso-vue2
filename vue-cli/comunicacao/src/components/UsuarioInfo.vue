<template>
  <div class="detalhe">
    <h2>Informação Usuário</h2>
    <p>Varios detalhes ...</p>
    <p>
      Nome do usuário:
      <strong>{{ inverteNome() }}</strong>
    </p>
    <p>
      Idade:
      <strong>{{idade}}</strong>
    </p>
    <button @click="reiniciaNome()">Reinicia Nome</button>
    <button @click="reiniciarFn">Reiniciar Nome (Callback)</button>
  </div>
</template>

<script>
import barramento from "@/barramento";
export default {
  props: {
    nome: { type: String, require: true },
    idade: { type: Number },
    reiniciarFn: Function,
  },
  methods: {
    inverteNome() {
      return this.nome.split("").reverse().join("");
    },
    reiniciaNome() {
      this.nome = "Joaquim";
      this.$emit("nomeMudou", this.nome);
    },
  },
  created() {
    barramento.quandoIdadeMudou((idade) => {
      this.idade = idade;
    });
  },
};
</script>

<style scoped>
.detalhe {
  border: 1px solid red;
  width: 100%;
  margin: 5px;
  background: rgb(202, 58, 58);
  padding: 10px;
}
</style>