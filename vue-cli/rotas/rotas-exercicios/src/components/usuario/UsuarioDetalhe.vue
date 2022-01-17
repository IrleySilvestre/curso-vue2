<template lang="">
    <div class="usuario-detalhe">
        <h3>Usuário detalhe</h3>  
        <hr>
        <p> <strong> Código:</strong> {{id}}</p> 
        <router-link 
        tag = "button" 
        primario 
        :to="{name:'editarUsuario', 
        params: {id}, 
        query:{completo: true, lingua:'pt'}}">
          Editar
        </router-link>    
    </div>
</template>

<script>
export default {
  name: "UsuarioDetalhe",
  props: ["id"],
  // eslint-disable-next-line
  beforeRouteEnter(to, from, next) {
    // eslint-disable-next-line
    console.log("Estou no componente detalhe");
    next();
  },

  //   data() {
  //     return {
  //       id: this.$route.params.id,
  //     };
  //   },

  //   watch: {
  //     $route(to) {
  //       this.id = to.params.id;
  //     },
  //   },
};
</script>

<style lang="">
    
</style>
