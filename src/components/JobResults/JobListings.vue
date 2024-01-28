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
    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currnetPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{
              name: 'JobResults',
              query: {
                page: previousPage,
              },
            }"
            data-test="previous-page-link"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Previous</router-link
          >
          <router-link
            v-if="nextPage"
            :to="{
              name: 'JobResults',
              query: {
                page: nextPage,
              },
            }"
            data-test="next-page-link"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from "vuex";

import JobListing from "./JobListing.vue";
import { FETCH_JOBS } from "@/store";

export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  computed: {
    previousPage() {
      const previousPage = this.currnetPage - 1;
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined;
    },
    nextPage() {
      const nextPage = this.currnetPage + 1;
      const maxPage = Math.ceil(this.jobs.length / 10);
      return nextPage <= maxPage ? nextPage : undefined;
    },
    currnetPage() {
      const pageString = this.$route.query.page || "1";
      return Number(pageString);
    },
    jobList() {
      const pageNumber = this.currnetPage;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;
      return this.jobs.slice(firstJobIndex, lastJobIndex);
    },
    ...mapState(["jobs"]),
  },
  async mounted() {
    this.FETCH_JOBS();
  },
  methods: {
    ...mapActions([FETCH_JOBS]),
  },
};
</script>
