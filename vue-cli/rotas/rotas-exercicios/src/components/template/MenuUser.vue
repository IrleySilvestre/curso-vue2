<template >
    <nav class="menu">
        <ul>
            <!-- a propriedade exact define que o endereco tem que ser exato para marcar com a classe ativa -->
            <router-link to="/" tag="li" active-class="active" exact>
                <a>Home</a>
            </router-link>

            <router-link to="/usuario" active-class="active" tag="li">
                <a>User</a>
            </router-link>

        </ul>
    </nav>
</template>

<script>
export default {
  name: "MenuUser",
};
</script>

<style >
</style>
