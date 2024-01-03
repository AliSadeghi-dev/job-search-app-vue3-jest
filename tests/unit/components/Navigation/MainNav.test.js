import { shallowMount } from "@vue/test-utils";
import MainNav from "@/components/Navigation/MainNav.vue";

describe("MainNav", () => {
  it("diplays company name", () => {
    const wrapper = shallowMount(MainNav);
    expect(wrapper.text()).toMatch("Bobo Careers");
  });
  it("diplays menu items for navigation", () => {
    const wrapper = shallowMount(MainNav);
    const navigationMeunItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    const navigationMenuTexts = navigationMeunItems.map((item) => item.text());
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Lift at Bobo Corp",
      "How we hire",
      "students",
      "Jobs",
    ]);
  });
  describe("when user is logged out", () => {
    it("propmts user to sign in", () => {
      const wrapper = shallowMount(MainNav);
      const loginButton = wrapper.find("[data-test='login-button']");
      const profileImage = wrapper.find("[data-test='profile-image']");
      expect(loginButton.exists()).toBe(true);
      expect(profileImage.exists()).toBe(false);
    });
  });
  describe("when user is logged in", () => {
    it("diplays user profile image", async () => {
      const wrapper = shallowMount(MainNav);
      let profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });
    it("diplays subnavigation menu with additional information", async () => {
      const wrapper = shallowMount(MainNav);
      let subnv = wrapper.find("[data-test='subnav']");
      expect(subnv.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      subnv = wrapper.find("[data-test='subnav']");
      expect(subnv.exists()).toBe(true);
    });
  });
});
