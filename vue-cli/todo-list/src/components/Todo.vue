<template >
  <div :class="stateClass" class="task">
    <p>
      <input @click="checkTask" type="checkbox" name="taskPending" :checked="! task.pending" />
      {{ task.name }}
    </p>
    <div>
      <button @click="editTask">Editar</button>
      <button @click="removeTask">Excluir</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  computed: {
    stateClass() {
      return {
        pending: this.task.pending,
        done: !this.task.pending,
      };
    },
  },
  methods: {
    removeTask() {
      this.$emit("taskRemoved", this.task);
    },
    checkTask() {
      this.$emit("taskModified", this.task);
    },
    editTask() {
      this.$emit("taskEdited", this.task);
    },
  },
};
</script>
<style scoped >
.task {
  box-shadow: 5px 5px 10px 5px #012512;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px 0 15px;
  margin-top: 15px;
  border-radius: 5px;
}
.pending {
  font-weight: bold;
}
.done {
  text-decoration-line: line-through;
}
</style>