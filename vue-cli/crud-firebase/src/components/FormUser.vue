<template>
  <div>
    <h1 class="text-center">Cadastro Usuarios</h1>
    <hr />
    <b-container>
      <b-form @submit.stop.prevent="addUser" class="bg-light p-4 shadow-sm">
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
          v-if="isAdd"
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
        <b-button type="submit" class="mr-2" variant="primary"
          >Adicionar</b-button
        >
        <b-button @click="cleanForm" variant="danger">Limpar</b-button>
      </b-form>
    </b-container>

    <b-container class="mt-4 bg-light p-2 shadow-sm">
      <ListUsers :updateList="updateList" />
    </b-container>
  </div>
</template>

<script>
import ListUsers from "./ListUsers.vue";

export default {
  name: "FormUser",
  components: {
    ListUsers,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
      updateList: false,
      isAdd: true,
    };
  },

  methods: {
    addUser() {
      try {
        if (!this.form._id) {
          this.$http.post("/user/register", this.form).then((res) => {
            if (res.status == 201) {
              this.updateList = !this.updateList;
            }
          });
        } else {
          this.$http
            .put(`/user/update/${this.form._id}`, this.form)
            .then((res) => {
              if (res.status == 200) {
                this.updateList = !this.updateList;
              }
            });
        }
      } catch (error) {
        console.log(error);
      }
      this.cleanForm();
    },

    cleanForm() {
      this.form.name = "";
      this.form.email = "";
      this.form.password = "";
      this.form._id = "";
      this.isAdd = true;
    },
  },
};
</script>

<style></style>
