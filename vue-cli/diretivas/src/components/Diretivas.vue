<template>
  <div class="hello">
    <h1>Diretivas</h1>
    <hr />
    <p v-text="'Usando diretiva v-text'"></p>
    <p v-html="'Usando diretiva <strong>v-html</strong> '"></p>
    <hr />
    <p v-destaque>Diretiva personalizada</p>
    <hr />
    <p v-destaque-param="'gray'">Diretiva personalizada com parametro</p>
    <p v-destaque-param="cor">Diretiva personalizada com parametro</p>
    <p v-destaque-arg:fundo="'lightblue'">
      Diretiva personalizada com parametro
    </p>
    <p v-destaque-mod:fundo.atrasar="'lightblue'">
      Diretiva personalizada com parametro e modificador
    </p>
    <p v-destaque-mod:fundo.atrasar="'lightblue'">
      Diretiva personalizada com parametro e modificador
    </p>
  </div>
</template>

<script>
export default {
  name: "Diretivas",
  data() {
    return {
      cor: "blue",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
