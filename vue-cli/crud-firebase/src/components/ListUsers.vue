<template>
     <div>
          <b-container>
               <b-table-simple>
                    <b-thead head-variant="dark">
                         <b-tr>
                              <b-th>Nome</b-th>
                              <b-th>Email</b-th>
                              <b-th colspan="2">#</b-th>
                         </b-tr>
                    </b-thead>
                    <b-tbody>
                         <b-tr v-for="(user, index) in users" :key="index">
                              <b-td>{{ user.name }}</b-td>
                              <b-td>{{ user.email }}</b-td>
                              <b-td>Editar</b-td>
                              <b-td>Excluir</b-td>
                         </b-tr>
                    </b-tbody>
               </b-table-simple>
          </b-container>
     </div>
</template>
<script>
export default {
     name: "ListUsers",
     props: { users: Array },
};
</script>
<style></style>
