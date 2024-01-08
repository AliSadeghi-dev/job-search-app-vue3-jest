import UserNavigation from "@/components/Navigation/UserNavigation.vue";
import { mount } from "@vue/test-utils";

describe("Subnav", () => {
  const createConfig = (routeName) => ({
    global: {
      mocks: {
        $route: {
          name: routeName,
        },
      },
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });
  describe("when user is on job page", () => {
    it("it displays job count", () => {
      const routeName = "JobResults";
      const wrapper = mount(UserNavigation, createConfig(routeName));
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });
  describe("when user is not on job page", () => {
    it("does not displays job count", () => {
      const routeName = "Home";

      const wrapper = mount(UserNavigation, createConfig(routeName));
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
