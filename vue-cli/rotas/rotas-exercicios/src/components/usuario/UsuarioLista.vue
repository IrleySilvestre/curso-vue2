<template >
    <div class="usuario-lista">
        <h3>Lista de Usuários</h3>
        <ul class="lista">
             <router-link tag="li" to="/usuario/1"><li class="item-lista">Usuário 1</li></router-link>
             <router-link tag="li" to="/usuario/2"><li class="item-lista">Usuário 2</li></router-link>
             <router-link tag="li" to="/usuario/3"><li class="item-lista">Usuário 3</li></router-link>
             <router-link tag="li" to="/usuario/4"><li class="item-lista">Usuário 4</li></router-link>
             <router-link tag="li" to="/usuario/5"><li class="item-lista">Usuário 5</li></router-link>
             <router-link tag="li" to="/usuario/6"><li class="item-lista">Usuário 6</li></router-link>
        </ul>        
    </div>
</template>

<script>
export default {
  props: ["id"],
  name: "UsuarioLista",
};
</script>

<style >
</style>
