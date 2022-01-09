<template>
  <b-container class="form w-25">
    <h1 class="text-center">Login</h1>
    <b-form @submit.stop.prevent="onSubmit">
      <b-form-group
        id="input-group-email"
        label="Email address:"
        label-for="input-email"
      >
        <b-form-input
          id="input-email"
          name="input-email"
          v-model.trim="$v.email.$model"
          type="email"
          placeholder="Email"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        class="mt-2"
        id="input-group-password"
        label="Password:"
        label-for="input-password"
      >
        <b-form-input
          id="input-password"
          name="input-password"
          type="password"
          placeholder="Senha"
          v-model.trim="$v.password.$model"
        ></b-form-input>
      </b-form-group>
    </b-form>
    <div class="container mt-4 text-center">
      <b-button type="submit" size="l" variant="secondary">Login</b-button>
      <router-link style="text-decoration: none" to="/register"
        ><p class="mt-2 text-primary">Quero me cadastrar</p></router-link
      >
    </div>
    <div>{{$v.email}}</div>
  </b-container>

</template>
<script src="./Login.js"></script>
<style scoped>
.form {
  border: 1px rgb(189, 236, 238) solid;
  padding: 2rem;
  box-shadow: 5px 5px 5px rgb(157, 237, 240);
}
</style>
