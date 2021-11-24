<template>
  <div class="detalhe">
    <h2>Informação Usuário</h2>
    <p>Varios detalhes ...</p>
    <p>
      Nome do usuário: <strong>{{ nome }}</strong>
    </p>
  </div>
</template>

<script>
export default {
    props:['nome']
};
</script>

<style scoped>
.detalhe {
  border: 1px solid red;
  width: 100%;
  margin: 5px;
  background: rgb(202, 58, 58);
}
</style>