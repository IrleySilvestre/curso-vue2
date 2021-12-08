export default {
    computed: {
        fraseComVirgula() {
            return this.frase.replace(/\s/g, ",");
        },
        fraseComTamanhoPalavra() {
            return this.frase2
                .split(" ")
                .map((p) => `${p}(${p.length})`)
                .join(" ");
        },
    },
};