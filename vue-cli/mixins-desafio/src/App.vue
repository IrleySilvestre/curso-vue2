<template>
     <div id="app">
          <h1>Desafio Mixins & Filtros</h1>
          <hr />
          <div class="content">
               <div class="exercicio1">
                    <p>
                         1) Contruir um filtro local que troca espaços por
                         virgula
                    </p>
                    <label for="frase">Frase com espaços</label>
                    <input name="frase" type="text" v-model="frase" />
                    <label for="frase">Frase com vigulas</label>
                    <p>{{ frase | frase }}</p>
               </div>
          </div>
          <hr />
          <div class="content">
               <div class="exercicio1">
                    <p>
                         2) Criar Filtro Glogal que conta o tamanho de cada
                         palavra e adiciona o valor na string final
                    </p>
                    <label for="frase">Frase digitada</label>
                    <input name="frase" type="text" v-model="frase2" />
                    <label for="frase">Frase com vigulas</label>
                    <p>{{ frase2 | somar }}</p>
               </div>
          </div>
          <hr />
          <div class="content">
               <div class="exercicio1">
                    <p>3) Utilizando propriedade computadada.</p>
                    <label for="frase">Frase 1</label>
                    <p>{{ fraseComVirgula }}</p>
                    <label>Frase 2</label>
                    <p>{{ fraseComTamanhoPalavra }}</p>
               </div>
          </div>
     </div>
</template>

<script>
import frasesMixin from "./frasesMixin";
export default {
     name: "App",
     mixins: [frasesMixin],
     data() {
          return {
               frase: "",
               frase2: "",
          };
     },
     filters: {
          frase(valor) {
               return valor.replace(/\s/g, ",");
          },
     },
     // computed: {
     //      fraseComVirgula() {
     //           return this.frase.replace(/\s/g, ",");
     //      },
     //      fraseComTamanhoPalavra() {
     //           return this.frase2
     //                .split(" ")
     //                .map((p) => `${p}(${p.length})`)
     //                .join(" ");
     //      },
     // },
};
</script>

<style>
#app {
     font-family: Avenir, Helvetica, Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     text-align: center;
     color: #2c3e50;
     margin-top: 60px;
     font-size: 2rem;
}
.content {
     display: flex;
     justify-content: center;
     font-size: 1rem;
}

.exercicio1 {
     background-color: #fff6f6;
     display: flex;
     flex-direction: column;
     text-align: left;
     width: 600px;
     padding: 10px;
     box-shadow: 2px 2px 1px grey;
}
.exercicio1 input {
     margin: 5px 0 5px 0;
     height: 1.5rem;
     width: 550px;
}
.exercicio1 p {
     font-weight: bold;
}
</style>
