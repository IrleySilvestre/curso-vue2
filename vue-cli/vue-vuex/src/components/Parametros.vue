<template>
  <Painel titulo="Parâmetros" vermelho>
    <div class="parametros">
      <span>
        <strong>Quantidade Padrão: </strong>
        <input type="number" v-model="quantidade" />
      </span>
      <span>
        <strong>Preço Padrão: </strong>
        <input type="number" v-model="preco" />
      </span>
    </div>
  </Painel>
</template>

<script>
export default {
  computed: {
    quantidade: {
      get() {
        return this.$store.state.quantidadePadrao;
      },
      set(valor) {
        return this.$store.commit("setQuantidadePadrao", valor);
      },
    },
    preco: {
      get() {
        return this.$store.state.precoPadrao;
      },
      set(valor) {
        return this.$store.commit("setPrecoPadrao", valor);
      },
    },
  },
};
</script>

<style>
.parametros {
  display: flex;
  justify-content: space-around;
}
</style>
