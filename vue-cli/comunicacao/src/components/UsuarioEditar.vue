<template>
  <div class="edit">
    <h1>Editar</h1>
    <p>
      Idade:
      <strong>{{idade}}</strong>
    </p>
    <button @click="alterarIdade">Alterar Idade</button>
  </div>
</template>

<script>
import barramento from "@/barramento";
export default {
  props: {
    idade: {
      type: Number,
    },
  },
  methods: {
    alterarIdade() {
      this.idade += 1;
      barramento.alterarIdade(this.idade);
    },
  },
};
</script>

<style scoped>
.edit {
  border: 1px solid rgb(0, 255, 64);
  width: 100%;
  margin: 5px;
  background: rgb(55, 136, 72);
  padding: 10px;
}
</style>