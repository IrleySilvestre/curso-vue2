new Vue({
  el: "#app",
  data: {
    scorePlayer: 100,
    scoreMonster: 100,
    isPlaying: false,
    logs: [],
  },

  methods: {
    startGame() {
      this.isPlaying = true;
      this.scoreMonster = 100;
      this.scorePlayer = 100;
      this.logs = [];
    },
    attack(special) {
      this.attackPower(
        "scoreMonster",
        5,
        10,
        special,
        "Jogador",
        "Mostro",
        "player"
      );
      if (this.scoreMonster > 0) {
        this.attackPower(
          "scorePlayer",
          7,
          12,
          false,
          "Monstro",
          "Jogador",
          "monster"
        );
      }
    },

    attackPower(player, min, max, especial, source, target, cls) {
      const plus = especial ? 5 : 0;
      const power = this.getRandom(min + plus, max + plus);
      this[player] = Math.max(this[player] - power, 0);
      this.registerLog(`${source} atingiu ${target} com ${power}.`, cls);
    },
    getRandom(min, max) {
      const value = Math.random() * (max - min) + min;
      return Math.round(value);
    },
    heal(min, max) {
      const heal = this.getRandom(min, max);
      this.scorePlayer = Math.min(this.scorePlayer + heal, 100);
      this.registerLog(`Jogador ganhou força de ${heal}.`, "player");
    },

    healAndAttack() {
      this.heal(10, 15);
      this.attackPower(
        "scorePlayer",
        7,
        12,
        false,
        "Monstro",
        "Jogador",
        "monster"
      );
    },
    registerLog(text, cls) {
      this.logs.unshift({ text, cls });
    },
  },

  computed: {
    hasResult() {
      return this.scorePlayer == 0 || this.scoreMonster == 0;
    },
  },

  watch: {
    hasResult(value) {
      if (value) {
        this.isPlaying = false;
      }
    },
  },
});
