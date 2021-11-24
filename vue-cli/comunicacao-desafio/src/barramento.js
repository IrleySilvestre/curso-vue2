import Vue from "vue";

export default new Vue({
  methods: {
    selectUser(user) {
      this.$emit("selectUser", user);
    },
    onSelected(callback) {
      this.$on("selectUser", callback);
    },
  },
});
