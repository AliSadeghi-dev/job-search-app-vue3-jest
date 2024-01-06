<template>
  <div>
    <h1>{{ expriment }}</h1>
    <h1 class="text-6xl font-bold">Job Results</h1>
  </div>
</template>

<script>
export default {
  name: "JobResults",
  computed: {
    expriment() {
      return "AFG";
    },
  },
};
</script>
