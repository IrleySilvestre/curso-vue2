<template>
  <div>
    <v-progress-linear :value="knowledge" height="25" active>
      <strong>{{Math.ceil(knowledge)}}%</strong>
    </v-progress-linear>
  </div>
</template>

<script>
export default {
  name: "Progress",

  data: () => ({
    knowledge: 0,
  }),
};
</script>
