<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex items-center h-full text-xl"
          >{{ company }}</router-link
        >
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="(item, index) in menuItems"
              :key="index"
              class="h-full ml-9 first:ml-0"
              data-test="main-nav-list-item"
            >
              <router-link :to="item.url" class="flex items-center h-full">{{
                item.text
              }}</router-link>
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
      <UserNavigationVue v-if="isLoggedIn" data-test="subnav" />
    </div>
  </header>
</template>

<script>
import ActionButton from "../Shared/ActionButton.vue";
import ProfileImage from "./ProfileImage.vue";
import UserNavigationVue from "./UserNavigation.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    UserNavigationVue,
  },
  data() {
    return {
      company: "Bobo Careers",
      href: "https://www.google.com",
      menuItems: [
        { text: "Teams", url: "/" },
        { text: "Locations", url: "/" },
        { text: "Lift at Bobo Corp", url: "/" },
        { text: "How we hire", url: "/" },
        { text: "students", url: "/" },
        { text: "Jobs", url: "/jobs/results" },
      ],
      isLoggedIn: false,
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
  },
  methods: {
    handleClick() {
      this.isLoggedIn = !this.isLoggedIn;
    },
  },
};
</script>
