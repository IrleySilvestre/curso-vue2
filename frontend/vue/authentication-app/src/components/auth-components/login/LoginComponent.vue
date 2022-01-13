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
          :class="{
            'input-is-invalid': $v.email.$error,
            'input-is-validit': $v.email.$dirty,
          }"
        ></b-form-input>
        <div class="msg-invalid-feedback" v-if="$v.email.$error">
          Email invalido
        </div>
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
          :class="{
            'input-is-invalid': $v.password.$error,
            'input-is-validit': $v.password.$dirty,
          }"
        ></b-form-input>
      </b-form-group>
    </b-form>
    <div class="container mt-4 text-center">
      <b-button type="submit" size="l" variant="secondary">Login</b-button>
      <router-link style="text-decoration: none" to="/register"
        ><p class="mt-2 text-primary">Quero me cadastrar</p></router-link
      >
    </div>
  </b-container>
</template>
<script src="./Login.js"></script>

<style scoped>
.form {
  border: 1px rgb(189, 236, 238) solid;
  padding: 2rem;
  box-shadow: 5px 5px 5px rgb(157, 237, 240);
}
.input-is-validit {
  border-color: #28a745;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.input-is-invalid {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
  background-position: right calc(0.375em + 0.1875rem) center;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.msg-invalid-feedback {
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #dc3545;
}
</style>
