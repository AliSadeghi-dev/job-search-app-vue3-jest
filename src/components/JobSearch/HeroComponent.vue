<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20">
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
  </main>
</template>

<script>
import HeadLine from "./HeadLine.vue";
import JobSearchForm from "./JobSearchForm.vue";

export default {
  name: "HeroComponent",
  components: {
    HeadLine,
    JobSearchForm,
  },
};
</script>
