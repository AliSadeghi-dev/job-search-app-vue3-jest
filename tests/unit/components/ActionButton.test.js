import { mount } from "@vue/test-utils";

import ActionButton from "@/components/ActionButton.vue";

describe("Action button", () => {
  it("renders text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Im clickable",
        type: "primary",
      },
    });
    expect(wrapper.text()).toMatch("Im clickable");
  });
  it("applies one of several styles to button", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Sign in",
        type: "primary",
      },
    });
    const button = wrapper.find("button");
    expect(button.classes("primary")).toBe(true);
  });
});
