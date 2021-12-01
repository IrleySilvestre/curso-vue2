<template >
  <div>
    <div>
      <input @keydown.enter="add" type="text" v-model="name" />
      <button @click="add">+</button>
    </div>
  </div>
</template>
<script>
import bus from "../bus";
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    add() {
      this.$emit("taskAdded", { name: this.name });
      this.name = "";
    },
  },
  created() {
    bus.taskEdited((task) => {
      this.name = task.name;
    });
  },
};
</script>
<style  scoped>
div {
  margin-top: 20px;
  text-align: left;
}
</style>