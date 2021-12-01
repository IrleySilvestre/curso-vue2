import Vue from "vue";

export default new Vue({
  methods: {
    editTask(task) {
      this.$emit("taskEdited", task);
    },
    taskEdited(callback) {
      this.$on("taskEdited", callback);
    },
  },
});
