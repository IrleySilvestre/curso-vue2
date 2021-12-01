<template >
  <div>
    <input @keydown.enter="add" type="text" v-model="name" />
    <button @click="add">+</button>
    <button v-if="isEditing" @click="cancel">Cancelar</button>
  </div>
</template>
<script>
import bus from "../bus";
export default {
  data() {
    return {
      name: "",
      isEditing: false,
      nameBackup: "",
      pendingBackup: null,
    };
  },
  methods: {
    add() {
      if (this.isEditing) {
        this.$emit("taskAdded", {
          name: this.name,
          pending: this.pendingBackup,
        });
        this.name = "";
        this.isEditing = false
      } else {
        this.$emit("taskAdded", { name: this.name });
        this.name = "";
      }
    },
    cancel() {
      this.$emit("taskAdded", {
        name: this.nameBackup,
        pending: this.pendingBackup,
      });
      this.name = "";
      this.isEditing = false;
    },
  },
  created() {
    bus.taskEdited((task) => {
      this.isEditing = true;
      this.name = task.name;
      this.nameBackup = task.name;
      this.pendingBackup = task.pending;
    });
  },
};
</script>
<style  scoped>
div {
  margin-top: 20px;
  text-align: left;
}
div button {
  height: 39px;
  width: 70px;
  cursor: pointer;
}
div input {
  height: 35px;
  width: 350px;
  border-radius: 5px;
}
</style>