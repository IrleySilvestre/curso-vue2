new Vue({
  el: "#desafio",
  data: {
    name: "Irley J. Silvestre",
    idade: 42,
    aleatorio: null,
    image: "http://files.cod3r.com.br/curso-vue/vue.jpg",
  },
  methods: {
    idadeVezesTres() {
      return Number(this.idade) * 3;
    },
    rondomNumber() {
      return (this.aleatorio = Math.random());
    },
  },
});
