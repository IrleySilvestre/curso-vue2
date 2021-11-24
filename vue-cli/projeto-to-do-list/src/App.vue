<template>
  <v-app>
    <v-main class="content">
      <h1 class="teal darken-2 white--text font-weight-bold text-center mb-4 mt-4">Lista de Tarefas</h1>
      <Progress />
      <TaskForm />
      <TasksList />
    </v-main>
  </v-app>
</template>

<script>
import TasksList from "./components/TasksList.vue";
import Progress from "./components/Progress.vue";
import TaskForm from "./components/TaskForm.vue";

export default {
  name: "App",

  components: {
    TasksList,
    Progress,
    TaskForm,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
.content {
  background-color: rgb(171, 201, 201);
}
</style>
