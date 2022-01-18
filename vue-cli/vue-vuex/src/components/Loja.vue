<template>
  <Painel titulo="Loja Virtual" verde>
    <div class="loja">
      <span>Adicionar</span>
      <input type="number" v-model.number="quantidade" />
      <span>itens de <strong>R$</strong></span>
      <input type="number" v-model.number="preco" />
      <button @click="adicionar">Agora!</button>
    </div>
  </Painel>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      sequencia: 1,
      quantidade: 1,
      preco: 1.99,
    };
  },
  methods: {
    ...mapMutations(["adicionarProduto"]),
    adicionar() {
      const produto = {
        id: this.sequencia,
        nome: `Produto ${this.sequencia}`,
        quantidade: this.quantidade,
        preco: this.preco,
        totalItem: this.quantidade * this.preco,
      };
      this.sequencia++;
      // this.$store.state.produtos.push(produto);
      // this.$store.commit("adicionarProduto", produto);
      this.adicionarProduto(produto);
    },
  },
  computed: {
    quantidadePadrao() {
      return this.$store.state.quantidadePadrao;
    },

    precoPadrao() {
      return this.$store.state.precoPadrao;
    },
  },
  watch: {
    quantidadePadrao(v) {
      this.quantidade = v;
    },
    precoPadrao(v) {
      this.preco = v;
    },
  },
  mounted() {
    this.quantidade = this.quantidadePadrao;
    this.preco = this.precoPadrao;
  },
};
</script>

<style>
.loja {
  display: flex;
  justify-content: center;
}

.loja > * {
  margin: 0px 10px;
}

input {
  font-size: 2rem;
  width: 90px;
}
</style>
