<template>
  <div>
    <h1 class="text-center">Cadastro Usuarios</h1>
    <hr />
    <b-container>
      <b-form class="bg-light p-4 shadow-sm">
        <b-form-group
          id="input-group-name"
          label="Nome:"
          label-for="input-name"
        >
          <b-form-input
            id="input-name"
            v-model="form.name"
            type="text"
            placeholder="Digite o nome"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-email"
          label="Email:"
          label-for="input-email"
        >
          <b-form-input
            id="input-email"
            v-model="form.email"
            type="email"
            placeholder="Digite o email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-password"
          label="Senha:"
          label-for="input-password"
        >
          <b-form-input
            id="input-password"
            v-model="form.password"
            type="password"
            placeholder="Digite uma senha"
            required
          ></b-form-input>
        </b-form-group>
        <b-button @click="addUser" class="mr-2" variant="primary"
          >Adicionar</b-button
        >
        <b-button @click="cleanForm" variant="danger">Limpar</b-button>
      </b-form>
    </b-container>

    <b-container class="mt-4 bg-light p-2 shadow-sm">
      <ListUsers :users="users" />
    </b-container>
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
        password: "",
      },
      users: [
        //    { name: "Irley", email: "irleysilvestre.mba@gmail.com" },
        //    { name: "Joaquim", email: "joaquim@gmail.com" },
      ],
    };
  },
  methods: {
    addUser() {
      try {
        this.$http.post("/user/register", this.form).then((res) => {
          console.log(res.data);
        });
        this.cleanForm();
        this.listUsers();
      } catch (error) {
        console.log(error);
      }
    },
    cleanForm() {
      (this.name = ""), (this.email = "");
    },

    listUsers() {
      try {
        this.$http.get("/user/list").then((res) => {
          this.users = res.data;
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.listUsers();
  },
};
</script>
<style></style>
