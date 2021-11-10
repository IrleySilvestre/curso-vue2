new Vue({
  el: "#desafio",
  data: {
    classeDestaque: "destaque",
    perigo: true,
    classe3: "",
    classe4: "",
    cor5: "",
    estilo5: {
      width: "100px",
      height: "100px",
    },
    width: "0",
  },
  methods: {
    iniciarEfeito() {
      setInterval(() => {
        this.classeDestaque =
          this.classeDestaque == "destaque" ? "encolher" : "destaque";
      }, 2000);
    },

    iniciarProgresso() {
      let vl = 0;
      const temporizador = setInterval(() => {
        vl += 0.5;
        this.width = `${vl}%`;
        if (vl == 100) clearInterval(temporizador);
      }, 50);
    },

    setPerigo(ev) {
      if (ev.target.value == "true") {
        this.perigo = true;
      } else {
        if (ev.target.value == "false") {
          this.perigo = false;
        }
      }
    },
  },
});
