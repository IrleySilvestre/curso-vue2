var vm = new Vue({
  el: "#app",
  data: {
    showForm: true,
    msgWin: "",
    player1Name: "",
    player2Name: "",
    round: 30,
    roundEnd: false,
    maxPointToWin: 0,
    champion: "",
    activePlayer: 1,
    numberPlayers: 0,
    activeBtn: true,
    score: { player1: 0, player2: 0 },
    image: {
      player1: "./interrogacao.jpg",
      player2: "./interrogacao.jpg",
    },
  },

  methods: {
    startGame() {
      this.showForm = false;
      this.maxPointToWin = Math.trunc(this.round / 2) + 1;
    },

    stopGame() {
      this.showForm = true;
      this.player1Name = "";
      this.player2Name = "";
      this.round = 0;
      this.champion = "";
      this.activeBtn = true;
      this.activePlayer = 1;
      this.numberPlayers = 0;
      this.score.player1 = 0;
      this.score.player2 = 0;
      this.msgWin = "";
      this.maxPointToWin = 0;
    },
    playAgain() {
      this.round = Number(this.score.player1) + Number(this.score.player2);
      this.score.player1 = 0;
      this.score.player2 = 0;
      this.msgWin = "";
      this.champion = "";
      this.maxPointToWin = Math.trunc(this.round / 2) + 1;
    },

    sortImage() {
      let images = ["./pedra.jpg", "./papel.jpg", "./tesoura.jpg"];
      if (this.numberPlayers == 1) {
        let imgStr = images[Math.round(Math.random() * (2 - 0))];
        this.image.player1 = imgStr;
        imgStr = images[Math.round(Math.random() * (2 - 0))];
        this.image.player2 = imgStr;
        this.round--;
        this.hasWin();
      } else {
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
          this.hasWin();
        }
      }
    },

    addScore() {
      if (this.round >= 0) {
        if (
          this.image.player1 === "./pedra.jpg" &&
          this.image.player2 === "./papel.jpg"
        ) {
          this.score.player2++;
          this.msgWin = `${this.player2Name} - Venceu!!!`;
        } else if (
          this.image.player2 === "./pedra.jpg" &&
          this.image.player1 === "./papel.jpg"
        ) {
          this.score.player1++;
          this.msgWin = `${this.player1Name} - Venceu!!!`;
        } else if (
          this.image.player1 === "./pedra.jpg" &&
          this.image.player2 === "./tesoura.jpg"
        ) {
          this.score.player1++;
          this.msgWin = `${this.player1Name} - Venceu!!!`;
        } else if (
          this.image.player2 === "./pedra.jpg" &&
          this.image.player1 === "./tesoura.jpg"
        ) {
          this.score.player2++;
          this.msgWin = `${this.player2Name} - Venceu!!!`;
        } else if (
          this.image.player1 === "./papel.jpg" &&
          this.image.player2 === "./tesoura.jpg"
        ) {
          this.score.player2++;
          this.msgWin = `${this.player2Name} - Venceu!!!`;
        } else if (
          this.image.player2 === "./papel.jpg" &&
          this.image.player1 === "./tesoura.jpg"
        ) {
          this.score.player1++;
          this.msgWin = `${this.player1Name} - Venceu!!!`;
        } else if (this.image.player2 == this.image.player1) {
          this.msgWin = `Empatou !!!`;
          this.round++;
        }
      }
    },
    enableBtn() {
      this.activeBtn = this.activePlayer == 1 ? true : false;
    },
    hasWin() {
      this.addScore();
      if (this.score.player1 == this.maxPointToWin) {
        this.msgWin = "Fim de Jogo (=;=)";
        this.champion = this.player1Name;
        this.round = 0;
      } else if (this.score.player2 == this.maxPointToWin) {
        this.msgWin = "Fim de Jogo (=;=)";
        this.champion = this.player2Name;
        this.round = 0;
      }
    },
  },

  computed: {
    aplicaCss() {
      return this.activeBtn;
    },
  },

  watch: {
    numberPlayers: function () {
      if (this.numberPlayers == 0) {
        this.player2Name = "";
      } else if (this.numberPlayers == 1) {
        this.player2Name = "Computador";
      } else if (this.numberPlayers == 2) {
        this.player2Name = "";
      }
    },

    activePlayer: function () {
      this.activeBtn = this.activePlayer == 1 ? true : false;
    },
  },
});
