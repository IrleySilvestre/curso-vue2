<template>
     <div>
          <h1 class="text-center">Cadastro Usuarios</h1>
          <hr />
          <b-container> <div class="bg-warning">Form</div> </b-container>

          <div class="mt-2">
               <ListUsers :users="users" />
          </div>
     </div>
</template>
<script>
import ListUsers from "./ListUsers.vue";
export default {
     components: { ListUsers },
     name: "User",
     data() {
          return {
               form: {
                    name: "",
                    email: "",
               },
               users: [
                    { name: "Irley", email: "irleysilvestre.mba@gmail.com" },
                    { name: "Joaquim", email: "joaquim@gmail.com" },
               ],
          };
     },
     methods: {
          addUser() {
               this.users.push(this.form);
               this.cleanForm();
          },
          cleanForm() {
               (this.name = ""), (this.email = "");
          },
     },
};
</script>
<style></style>
