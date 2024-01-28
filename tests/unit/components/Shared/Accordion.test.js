import { mount } from "@vue/test-utils";
import Accordion from "@/components/Shared/Accordion.vue";

describe("Accordion", () => {
  const createConfig = (config = {}) => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
    props: {
      header: "Test Header",
    },
    ...config,
  });
  it("renders child", async () => {
    const slots = {
      default: "<h3>My nested Child</h3>",
    };
    const config = { slots };
    const wrapper = mount(Accordion, createConfig(config));

    expect(wrapper.text()).not.toMatch("My nested Child");
    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");
    expect(wrapper.text()).toMatch("My nested Child");
  });

  describe("when we do not provide custom child content", () => {
    it("renders default contents", async () => {
      const slots = {};
      const config = slots;

      const wrapper = mount(Accordion, createConfig(config));
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      expect(wrapper.text()).toMatch("woops somebody forgot me!");
    });
  });
});
