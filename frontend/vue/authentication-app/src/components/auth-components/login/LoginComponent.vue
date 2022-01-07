<template>
<b-container class="teste">

    <h1 class="text-center">Login</h1>
    <b-form >
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
        id='password'
        type="password" 
        placeholder = "Password"
        aria-describedby="password-help-block"></b-form-input>
      </b-form-group>
    </b-form>
  </b-container>
</template>
<script src="./Login.js"></script>
<style scoped>
   .teste {
     border: 1px red solid;
     padding: 2rem;

   }
</style>
