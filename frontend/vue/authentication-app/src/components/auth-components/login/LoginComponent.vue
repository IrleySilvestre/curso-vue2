<template>
     <b-container class="form">
          <h1 class="text-center">Login</h1>
          <b-form>
               <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
               >
                    <b-form-input
                         id="input-1"
                         v-model="form.email"
                         type="email"
                         placeholder="Enter email"
                         required
                    ></b-form-input>
               </b-form-group>
               <b-form-group
                    id="input-group-2"
                    label="Password:"
                    label-for="password"
               >
                    <b-form-input
                         id="password"
                         type="password"
                         placeholder="Password"
                         aria-describedby="password-help-block"
                    ></b-form-input>
               </b-form-group>
          </b-form>
          <div class="container mt-4 text-center">
               <b-button size="l" variant="secondary">Login</b-button>
               <router-link style="text-decoration: none" to="/register"
                    ><p class="mt-2 text-primary">
                         Quero me cadastrar
                    </p></router-link
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
</style>
