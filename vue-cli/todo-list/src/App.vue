<template>
  <div id="app">
    <h1>Lista de Tarefas</h1>
    <ProgressTodo :statusTasks='15'/>
    <FormTodoVue />
  </div>
</template>

<script>
import FormTodoVue from './components/FormTodo.vue'
import ProgressTodo from './components/ProgressTodo.vue'


export default {
  name: 'App',
  components: {
    ProgressTodo,
    FormTodoVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
