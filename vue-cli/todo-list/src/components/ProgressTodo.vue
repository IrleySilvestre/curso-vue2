<template >
  <div class="content">
    <div :style="{ width: statusTasks + '%' }">{{statusTasks}}%</div>
  </div>
</template>
<script>
export default {
  props: {
    statusTasks: {
      type: Number,
      required: true,
      default: 0
    },
  },
};
</script>

<style scoped>
.content {
  border: 2px solid rgb(73, 70, 70);
  border-radius: 3px;
  height: 30px;
}
.content div {
  background: green;
  height: 100%;
  font-weight: bold;
}
</style>