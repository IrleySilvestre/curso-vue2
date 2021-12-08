<template>
  <div>
    <div class="content">
      <div>
        <input @keypress.enter="add" type="text" v-model="fruta" />
        <button @click="add">+</button>
      </div>
      <ul>
        <li v-for="(fruta, index) in frutas" :key="index">{{ fruta }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import FrutasMixins from "../FrutasMixins";
export default {
  mixins: [FrutasMixins],
};
</script>
<style scoped>
div {
  display: flex;
  justify-content: center;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 5px 3px;
  background-color: #dad4d4;
  padding: 15px;
  width: 380px;
}
input {
  font-size: 1.5rem;
}
button {
  padding: 0;
  height: 2.5rem;
  width: 2.5rem;
}
ul {
  width: 80%;
  padding: 0;
}
li {
  text-align: left;
  padding: 10px;
  margin: 0 0 5px 0;
  list-style-type: none;
  background-color: #f5e7e7;
}
</style>
