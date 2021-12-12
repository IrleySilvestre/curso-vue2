<template>
  <div class="d-flex justify-content-center">
    <div class="result" :style="{backgroundColor: bgColor}"></div>
  </div>
</template>
<script>
export default {
  props: ['bgColor'],

};
</script>
<style>
.result {
  height: 200px;
  color: #000000;
  background-color: #8f3232;
  width: 50%;
  border-radius: 20px;
  font-size: 3rem;
}
</style>
