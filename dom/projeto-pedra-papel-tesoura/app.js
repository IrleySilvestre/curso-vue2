new Vue({
  el: "#app",
  data: {
    showForm: true,
    player1Name: "",
    player2Name: "",
    round: 0,
    numberPlayers: 0,
    score: { player1: 0, player2: 0 },
    image: {
      rock: "./pedra.jpg",
      paper: "./papel.jpg",
      scissors: "./tesoura.jpg",
    },
  },

  methods: {
    startGame() {
      this.showForm = false;
    },

    stopGame() {
      this.showForm = true;
      this.player1Name = "";
      this.player2Name = "";
      this.round = 0;
      this.numberPlayers = 0;
      this.score.player1 = 0;
      this.score.player2 = 0;
    },
  },

  computed: {
    hasComputer() {
      if (this.numberPlayers == 1) {
        return true;
      }
      if (this.numberPlayers == 2) {
        return false;
      }
    },
  },

  watch: {
    hasComputer(value) {
      if (value) {
        this.player2Name = "Computador";
      } else {
        this.player2Name = "";
      }
    },
  },
});
