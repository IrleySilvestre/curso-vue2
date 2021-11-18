new Vue({
  el: "#app",
  data: {
    showForm: true,
    msgWin: "",
    player1Name: "",
    player2Name: "",
    round: 0,
    activePlayer: 1,
    numberPlayers: 0,
    score: { player1: 0, player2: 0 },
    image: {
      player1: "./interrogacao.jpg",
      player2: "./interrogacao.jpg",
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
      this.msgWin = "";
    },
    sortImage() {
      let images = ["./pedra.jpg", "./papel.jpg", "./tesoura.jpg"];
      if (this.activePlayer == 1) {
        let imgStr = images[Math.round(Math.random() * (2 - 0))];
        this.image.player1 = imgStr;
        this.image.player2 = "./interrogacao.jpg";
        this.activePlayer = 2;
      } else {
        let imgStr = images[Math.round(Math.random() * (2 - 0))];
        this.image.player2 = imgStr;
        this.activePlayer = 1;
        this.round--;
        this.addScore();
      }
    },
    addScore() {
      if (this.round > 0) {
        if (
          this.image.player1 === "./pedra.jpg" &&
          this.image.player2 === "./papel.jpg"
        ) {
          this.score.player2 = this.score.player2 + 1;
          this.msgWin = `${this.player2Name} - Venceu!!!`;
        } else if (
          this.image.player2 === "./pedra.jpg" &&
          this.image.player1 === "./papel.jpg"
        ) {
          this.score.player1 = this.score.player1 + 1;
          this.msgWin = `${this.player1Name} - Venceu!!!`;
        } else if (
          this.image.player1 === "./pedra.jpg" &&
          this.image.player2 === "./tesoura.jpg"
        ) {
          this.score.player1 = this.score.player1 + 1;
          this.msgWin = `${this.player1Name} - Venceu!!!`;
        } else if (
          this.image.player2 === "./pedra.jpg" &&
          this.image.player1 === "./tesoura.jpg"
        ) {
          this.score.player2 = this.score.player2 + 1;
          this.msgWin = `${this.player1Name} - Venceu!!!`;
        } else if (
          this.image.player1 === "./papel.jpg" &&
          this.image.player2 === "./tesoura.jpg"
        ) {
          this.score.player2 = this.score.player2 + 1;
          this.msgWin = `${this.player2Name} - Venceu!!!`;
        } else if (
          this.image.player2 === "./papel.jpg" &&
          this.image.player1 === "./tesoura.jpg"
        ) {
          this.score.player1 = this.score.player1 + 1;
          this.msgWin = `${this.player1Name} - Venceu!!!`;
        } else if (this.image.player2 == this.image.player1) {
          this.msgWin = `Empatou !!!`;
          this.round++;
        }
      } else {
        this.msgWin = "Fim de Jogo (=;=)";
      }
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
