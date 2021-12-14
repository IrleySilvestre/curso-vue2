<template>
  <div class="d-flex flex-column align-items-center">
    <div class="result" :style="{ backgroundColor: bgColor }">{{ msg }}</div>
    <button @click="$emit('retorneToQuestion')" class="btn btn-secondary mt-2">
      Retornar
    </button>
  </div>
</template>

<script>
export default {
  name: "Result",
  props: ["bgColor", "msg"],
};
</script>

<style>
.result {
  height: 150px;
  color: #ffffff;
  background-color: #8f3232;
  width: 450px;
  border-radius: 20px;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
