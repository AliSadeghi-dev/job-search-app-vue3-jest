import UserNavigation from "@/components/UserNavigation.vue";
import { mount } from "@vue/test-utils";

describe("Subnav", () => {
  describe("when user is on job page", () => {
    it("it displays job count", () => {
      const wrapper = mount(UserNavigation, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: true,
          };
        },
      });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });
  describe("when user is not on job page", () => {
    it("does not displays job count", () => {
      const wrapper = mount(UserNavigation, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: false,
          };
        },
      });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
