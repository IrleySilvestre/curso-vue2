<template >
    <div>
        <h2>Usuario</h2>
        <hr>
        <router-view/>
        <button sucesso @click="irParaInicio"> Voltar</button>
    </div>
</template>

<script>
export default {
  name: "Usuario",
  methods: {
    irParaInicio() {
      this.$router.push("/");
    },
  },
};
</script>

<style >
</style>
