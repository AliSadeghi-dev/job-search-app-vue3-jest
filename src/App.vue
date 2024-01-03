<template>
  <div>
    <main-nav />
    <HeroComponent />
  </div>
</template>

<script>
import MainNav from "@/components/Navigation/MainNav.vue";
import HeroComponent from "./components/JobSearch/HeroComponent.vue";

export default {
  name: "App",
  components: {
    MainNav,
    HeroComponent,
  },
};
</script>

<style></style>
