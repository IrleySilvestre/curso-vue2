import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    produtos: [],
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
  },
});
