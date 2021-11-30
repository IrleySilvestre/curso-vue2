<template >
  <div>
    <Todo 
      class="list" 
      v-for="(task, i) in tasks" 
      :key="i" 
      :task="task"
       @taskRemoved="$emit('taskRemoved',i)"
       @taskModified="$emit('taskModified',i)"/>
  </div>
</template>
<script>
import Todo from "../components/Todo.vue";
export default {
  props: { tasks: { type: Array, required: true } },
  components: {
    Todo,
  },
};
</script>
<style scoped>


</style>