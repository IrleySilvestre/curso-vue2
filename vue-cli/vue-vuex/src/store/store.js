import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    produtos: [],
    quantidadePadrao: 10,
    precoPadrao: 10.99,
  },

  getters: {
    valorTotal(state) {
      return state.produtos
        .map((p) => p.totalItem)
        .reduce((total, atual) => total + atual, 0);
    },
  },

  mutations: {
    adicionarProduto(state, payload) {
      state.produtos.push(payload);
    },
    setQuantidadePadrao(state, payload) {
      state.quantidadePadrao = payload;
    },
    setPrecoPadrao(state, payload) {
      state.precoPadrao = payload;
    },
  },
});
