import { mount } from "@vue/test-utils";
import Accordion from "@/components/Shared/Accordion.vue";

describe("Accordion", () => {
  it("renders child", async () => {
    const wrapper = mount(Accordion, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
      props: {
        header: "Test Header",
      },
    });

    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");
    expect(wrapper.text()).toMatch("woops somebody forgot me!");
  });
});
