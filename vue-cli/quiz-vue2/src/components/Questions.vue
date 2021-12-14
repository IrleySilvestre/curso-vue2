<template>
  <div class="d-flex justify-content-center">
    <div class="quest">
      <p class="mt-3">{{ question.text }}</p>
      <hr />
      <div class="aswers">
        <div
          v-for="(opcao, i) in question.answers"
          :key="i"
          @click="$emit('answerSelected', i)"
        >
          {{ opcao.text }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Questions",
  props: { question: { type: Object, required: true } },
};
</script>
<style>
.quest {
  height: 400px;
  color: #000000;
  background-color: #ffffff;
  width: 70%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.quest p {
  font-size: 2rem;
  color: darkolivegreen;
  font-weight: bold;
}
.quest hr {
  width: 100%;
}

.aswers {
  background-color: #bdbcf3e5;
  width: 90%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 10px;
}
.aswers div {
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  background-color: green;
  border-radius: 10px;
  width: 45%;
  height: 70px;
  margin: 25px 10px;
  font-weight: bold;
  color: #ffffff;
  font-size: 1.5rem;
}
.aswers div:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>
