<template >
    <div class="usuario-editar">
        <h3>Usuário Editar</h3>
        <hr>
        <p> <strong> Código:</strong> {{id}}</p> 
        <p> <strong> Completo:</strong> {{$route.query.completo ? 'sim': 'nao'}}</p> 
        <p> <strong> Lingua:</strong> {{$route.query.lingua}}</p> 
    </div>
</template>

<script>
export default {
  name: "UsuarioEditar",
  props: ["id"],
  data() {
    return {
      confirmou: false,
    };
  },
  // eslint-disable-next-line no-unused-vars
  beforeRouteLeave(to, from, next) {
    if (this.confirmou) {
      next();
    } else {
      if (confirm("tem certeza?")) {
        next();
      } else {
        next(false);
      }
    }
  },
};
</script>

<style >
</style>
