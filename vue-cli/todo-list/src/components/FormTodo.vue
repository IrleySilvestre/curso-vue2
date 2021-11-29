<template >
  <div>
    <input type="text" v-model="todoName" />
    <ListTodo :todos='todos' />
  </div>
</template>
<script>
import ListTodo from "./ListTodo.vue";
export default {
  components: {
    ListTodo,
  },
  data() {
    return {
      todos:[{}],
    };
  },
};
</script>
<style >
</style>