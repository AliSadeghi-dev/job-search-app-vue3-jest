<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <JobListing
        v-for="job in jobList"
        :key="job.id"
        data-test="job-listing"
        :job="job"
      />
    </ol>
  </main>
</template>

<script>
import axios from "axios";

import JobListing from "./JobListing.vue";

export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  data() {
    return {
      jobs: [],
    };
  },
  computed: {
    jobList() {
      return this.jobs.slice(0, 10);
    },
  },
  async mounted() {
    const response = await axios.get("http://localhost:4000/jobs");
    this.jobs = response.data;
  },
};
</script>
