<template >
  <div>
    <ul>
      <li v-for="(todo, i) in todos" :key="i">{{ todo.todoName }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: { todos: [{ todoName: "", id: 1, status: false }] },
};
</script>
<style >
</style>