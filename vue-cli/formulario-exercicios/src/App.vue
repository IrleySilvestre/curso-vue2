<template>
  <div id="app">
    <h1>Registrar Reclamação</h1>
    <div class="conteudo">
      <form class="painel">
        <div class="cabecalho">Formulário</div>
        <Rotulo nome="E-mail">
          <!-- Laze atualiza o model apos sair do imput, trim retira os espacos antes e depois do imput  -->
          <input type="text" v-model.lazy.trim="usuario.email" />
        </Rotulo>
        <Rotulo nome="Senha">
          <input type="password" v-model="usuario.senha" />
        </Rotulo>
        <Rotulo nome="Idade">
          <!-- converte para numero -->
          <input type="number" v-model.number="usuario.idade" />
        </Rotulo>
        <Rotulo nome="Mensagem">
          <textarea v-model="mensagem" name="" cols="30" rows="5"></textarea>
        </Rotulo>
        <Rotulo nome="Características do Problema">
          <span class="mr-4"
            ><input
              type="checkbox"
              value="reproduzivel"
              v-model="caracteristicas"
            />
            Reproduzível</span
          >
          <span
            ><input
              type="checkbox"
              value="intermitente"
              v-model="caracteristicas"
            />
            Intermitente</span
          >
        </Rotulo>
        <Rotulo nome="Qual produto?">
          <span class="mr-4"
            ><input value="web" v-model="produto" type="radio" /> Web</span
          >
          <span class="mr-4"
            ><input value="mobile" v-model="produto" type="radio" />
            Mobile</span
          >
          <span>
            <input value="outro" v-model="produto" type="radio" /> Outro</span
          >
        </Rotulo>
        <Rotulo nome="Prioridade">
          <select v-model="prioridade">
            <option
              v-for="(prioridade, index) in prioridades"
              :key="index"
              :value="prioridade.cod"
              :selected="prioridade.cod === 1"
            >
              {{ prioridade.nome }}
            </option>
          </select>
        </Rotulo>
        <Rotulo nome="Primeira Reclamação?">
          <Escolha v-model="escolha" />
        </Rotulo>
        <hr />
        <button>Enviar</button>
      </form>
      <div class="painel">
        <div class="cabecalho">Resultado</div>
        <Rotulo nome="E-mail">
          <span>{{ usuario.email }}</span>
        </Rotulo>
        <Rotulo nome="Senha">
          <span>{{ usuario.senha }}</span>
        </Rotulo>
        <Rotulo nome="Idade">
          <span>{{ usuario.idade }}</span>
        </Rotulo>
        <Rotulo nome="Mensagem">
          <span style="white-space: pre">{{ mensagem }}</span>
        </Rotulo>
        <Rotulo nome="Características do Problema">
          <span>
            <ul>
              <li
                v-for="(caracteristica, index) in caracteristicas"
                :key="index"
              >
                caracteristicas
              </li>
            </ul></span
          >
        </Rotulo>
        <Rotulo nome="Qual produto?">
          <span>{{ produto }}</span>
        </Rotulo>
        <Rotulo nome="Prioridade">
          <span>{{ prioridade }}</span>
        </Rotulo>
        <Rotulo nome="Primeira Reclamação?">
          <span>{{ escolha }}</span>
        </Rotulo>
      </div>
    </div>
  </div>
</template>

<script>
import Rotulo from "./components/Rotulo.vue";
import Escolha from "./components/Escolha.vue";

export default {
  name: "app",
  components: { Rotulo, Escolha },
  data() {
    return {
      mensagem: "",
      caracteristicas: [],
      produto: "web",
      prioridade: 1,
      prioridades: [
        { cod: 1, nome: "Alta" },
        { cod: 2, nome: "Media" },
        { cod: 3, nome: "Baixa" },
      ],
      usuario: {
        email: "",
        senha: "",
        idade: null,
      },
      escolha: true,
    };
  },
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
