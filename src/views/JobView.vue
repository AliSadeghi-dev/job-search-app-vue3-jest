<template>
  <h1>Job View id : {{ currentJobId }}</h1>
</template>

<script>
export default {
  name: "JobView",
  computed: {
    currentJobId() {
      const { id } = this.$route.params;
      return id;
    },
  },
};
</script>
