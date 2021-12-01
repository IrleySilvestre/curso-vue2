<template>
  <div id="app">
    <h1>Lista de Tarefas</h1>
    <ProgressTodo :statusTasks="percentProgress" />
    <FormTodoVue @taskAdded="addTask" />
    <ListTodo :tasks="tasks" @taskRemoved="removeTask" @taskModified="tooglePending" />
  </div>
</template>

<script>
import ListTodo from "./components/ListTodo.vue";
import FormTodoVue from "./components/FormTodo.vue";
import ProgressTodo from "./components/ProgressTodo.vue";

export default {
  name: "App",
  components: {
    ProgressTodo,
    FormTodoVue,
    ListTodo,
  },
  data() {
    return {
      tasks: [
        { name: "Comprar pao", pending: true },
        { name: "Ir ao Cinema", pending: false },
      ],
      percentProgress: 0,
    };
  },
  mounted() {
    this.calcPercent();
  },
  methods: {
    addTask(task) {
      const sameName = (t) => t.name === task.name;
      const realyNew = this.tasks.filter(sameName).length == 0;

      if (realyNew && task.name.length > 0) {
        this.tasks.push({
          name: task.name,
          pending: task.pending || true,
        });
      }
    },
    removeTask(i) {
      this.tasks.splice(i, 1);
    },
    tooglePending(i) {
      this.tasks[i].pending = !this.tasks[i].pending;
      this.calcPercent();
    },
    calcPercent() {
      const allTask = this.tasks.length;
      let cont = 0;
      this.tasks.forEach((element) => {
        if (element.pending == false) {
          cont++;
        }
      });
      this.percentProgress = Math.round((cont * 100) / allTask);
    },
  },
  watch: {
    tasks: function () {
      this.calcPercent();
    },
  },
};
</script>

<style>
body {
  background: linear-gradient(to right, #8e9eab, #eef2f3);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
