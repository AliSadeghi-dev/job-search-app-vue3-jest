<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <a :href="href" class="flex items-center h-full text-xl">{{
          company
        }}</a>
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="(item, index) in menuItems"
              :key="index"
              class="h-full ml-9 first:ml-0"
              data-test="main-nav-list-item"
            >
              <a href="" class="flex items-center h-full">{{ item }}</a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <ActionButton
            v-if="!isLoggedIn"
            data-test="login-button"
            text="Sign in"
            type="primary"
            @click="handleClick"
          />
          <profile-image v-else data-test="profile-image" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from "./ActionButton.vue";
import ProfileImage from "./ProfileImage.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
  },
  data() {
    return {
      company: "Bobo Careers",
      href: "https://www.google.com",
      menuItems: [
        "Teams",
        "Locations",
        "Lift at Bobo Corp",
        "How we hire",
        "students",
        "Jobs",
      ],
      isLoggedIn: false,
    };
  },
  methods: {
    handleClick() {
      this.isLoggedIn = !this.isLoggedIn;
    },
  },
};
</script>
