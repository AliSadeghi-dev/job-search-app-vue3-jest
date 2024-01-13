<template>
  <div class="flex flex-row flex-nowrap w-full">
    <JobFilterSidebar />
    <JobListings />
  </div>
</template>

<script>
import JobFilterSidebar from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebar.vue";
import JobListings from "@/components/JobResults/JobListings.vue";

export default {
  name: "JobResults",
  components: {
    JobFilterSidebar,
    JobListings,
  },
};
</script>
