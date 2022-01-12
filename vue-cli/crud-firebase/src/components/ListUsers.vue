<template>
     <div>
          <b-container>
               <b-table-simple
                    striped
                    hover
                    @row-selected="onRowSelected"
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
                                        <b-button variant="outline-info">
                                             <b-icon icon="pencil"></b-icon>
                                        </b-button>
                                        <b-button variant="outline-danger">
                                             <b-icon icon="trash"></b-icon>
                                        </b-button>
                                   </div>
                              </b-td>
                         </b-tr>
                    </b-tbody>
               </b-table-simple>
               <p>
                    Selected Rows:<br />
                    {{ selected }}
               </p>
          </b-container>
     </div>
</template>
<script>
export default {
     name: "ListUsers",
     props: { users: Array },
     data() {
          return {
               selected: [],
          };
     },
     methods: {
          onRowSelected(items) {
               this.selected = items;
          },
     },
};
</script>
<style></style>
