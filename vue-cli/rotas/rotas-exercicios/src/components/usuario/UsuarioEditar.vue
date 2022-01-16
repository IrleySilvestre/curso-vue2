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
};
</script>

<style >
</style>
