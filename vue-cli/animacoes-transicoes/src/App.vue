<template>
  <div id="app" class="container-fluid">
    <h1>Animações</h1>
    <hr />
    <b-button @click="exibir = !exibir" variant="primary" class="mb-3"
      >Mostrar Mensagem</b-button
    >
    <transition name="fade" appear>
      <b-alert v-if="exibir" variant="info" show>{{ msg }}</b-alert>
    </transition>
    <hr />
    <transition name="slide" appear>
      <b-alert v-if="exibir" variant="info" show>{{ msg }}</b-alert>
    </transition>

    <hr />
    <b-select v-model="tipoAnimacao" class="mb-4">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </b-select>
    <transition :name="tipoAnimacao" appear>
      <b-alert v-if="exibir" variant="info" show>{{ msg }}</b-alert>
    </transition>

    <br />
    <div class="mb-3">
      <b-button
        class="mr-2"
        @click="componentSelected = 'AlertWarning'"
        variant="dark"
        >Informação</b-button
      >
      <b-button variant="info" @click="componentSelected = 'AlertInfo'"
        >Worning</b-button
      >
    </div>
    <transition name="fade" mode="out-in">
      <component :is="componentSelected"></component>
    </transition>

    <hr />
    <div>
      <b-button class="m-3" @click="add">Adiciona</b-button>
    </div>
    <div class="container-sm">
      <transition-group name="slide">
        <b-list-group v-for="(nome, i) in nomes" :key="nome">
          <b-list-group-item
            class="d-flex align-items-center justify-content-between"
            >{{ nome }}
            <b-icon
              font-scale="0.6"
              class="ml-2"
              @click="remove(i)"
              icon="x-circle"
              scale="2"
              variant="danger"
            ></b-icon>
          </b-list-group-item>
        </b-list-group>
      </transition-group>
    </div>
  </div>
</template>

<script>
import AlertInfo from "./components/AlertInfo.vue";
import AlertWarning from "./components/AlertWarning.vue";
export default {
  name: "App",
  components: { AlertInfo, AlertWarning },
  data() {
    return {
      msg: "Uma mensagem de informação para o usuário",
      exibir: true,
      tipoAnimacao: "fade",
      componentSelected: "AlertInfo",
      nomes: ["Irley", "Emily", "Isadora", "Viviane"],
    };
  },
  methods: {
    add() {
      const s = Math.random().toString(36).substring(2);
      this.nomes.push(s);
    },
    remove(i) {
      this.nomes.splice(i, 1);
    },
  },
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
  font-size: 1.5rem;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

@keyframes slide-in {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(40px);
  }
}

.slide-enter-active {
  animation: slide-in 2s ease;
  transition: opacity 2s;
}
.slide-leave-active {
  position: absolute;
  animation: slide-in 2s ease;
  transition: opacity 2s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-move {
  transition: transform 1s;
}
</style>
