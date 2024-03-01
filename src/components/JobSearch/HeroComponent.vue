<template>
  <main class="flex flex-col h-screen">
    <section class="flex flex-col pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <HeadLine />
          <JobSearchForm />
        </div>
        <div
          class="col-start-7 col-span-5 object-contain self-center justify-self-center"
        >
          <img src="https://vuejs.org/images/logo.png" class="w-80 h-80" />
        </div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
    <SpotLight class="flex flex-row justify-center pb-16">
      <template #default="{ img, title, description }">
        <router-link
          to="/jobs/results"
          class="flex flex-col mx-5 border rounded-lg w-72 bg-brand-gray-2 h-96"
        >
          <img class="object-contain" :src="img" />
          <div class="h-48 px-6 py-4 mt-3">
            <h3 class="text-lg font-medium">
              {{ title }}
            </h3>
            <p class="mt-3 text-sm">
              {{ description }}
            </p>
          </div>
          <router-link
            to="/jobs/results"
            class="px-6 pb-4 text-sm text-brand-blue-1"
          >
            see jobs
          </router-link>
        </router-link>
      </template>
    </SpotLight>
  </main>
</template>

<script>
import HeadLine from "./HeadLine.vue";
import JobSearchForm from "./JobSearchForm.vue";
import SpotLight from "./SpotLight.vue";

export default {
  name: "HeroComponent",
  components: {
    HeadLine,
    JobSearchForm,
    SpotLight,
  },
};
</script>
