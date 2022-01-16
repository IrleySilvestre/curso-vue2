<template>
  <div>
    <b-container>
      <b-table-simple
        striped
        hover
        selectMode="single"
        ref="selectableTable"
        selectable
      >
        <b-thead head-variant="dark">
          <b-tr>
            <b-th>Nome</b-th>
            <b-th>Email</b-th>
            <b-th></b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="(user, index) in users" :key="index">
            <b-td>{{ user.name }}</b-td>
            <b-td>{{ user.email }}</b-td>
            <b-td>
              <div class="d-flex justify-content-around">
                <b-button @click="editUser(user._id)" variant="outline-info">
                  <b-icon icon="pencil"></b-icon>
                </b-button>
                <b-button
                  @click="deleteUser(user._id)"
                  variant="outline-danger"
                >
                  <b-icon icon="trash"></b-icon>
                </b-button>
              </div>
            </b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </b-container>
  </div>
</template>

<script>
import swal from "sweetalert";
export default {
  name: "ListUsers",
  props: { updateList: Boolean },
  data() {
    return {
      selected: [],
      users: [],
      userToEdit: [],
    };
  },
  methods: {
    listUsers() {
      try {
        this.$http.get("/user/list").then((res) => {
          this.users = res.data;
        });
      } catch (error) {
        console.log(error);
      }
    },
    editUser(id) {
      this.$http.get(`/user/listById/${id}`).then((res) => {
        this.userToEdit = res.data;
        this.$parent.form = res.data;
        this.$parent.password = "";
        this.$parent.isAdd = false;
      });
    },

    deleteUser(id) {
      swal({
        title: "Confirma Exclusão?",
        text: "",
        icon: "warning",
        buttons: ["Cancelar", "Sim"],
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          this.$http.post(`/user/delete/${id}`).then(() => {
            this.$parent.form = {};
            this.listUsers();
            swal("Apagado", {
              icon: "success",
              timer: 2500,
            });
          });
        } else {
          swal("Cancelado", {
            icon: "success",
            timer: 2500,
          });
        }
      });
    },
  },

  mounted() {
    this.listUsers();
  },

  watch: {
    updateList: function () {
      this.listUsers();
    },
  },
};
</script>
<style></style>
