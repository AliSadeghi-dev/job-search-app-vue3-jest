import { mount } from "@vue/test-utils";
import HeaderContainer from "@/components/Shared/HeaderContainer.vue";

describe("HeaderContainer", () => {
  it("allows parent component to provide title content", () => {
    const wrapper = mount(HeaderContainer, {
      slots: {
        title: "<h2>Some Title</h2>",
      },
    });
    expect(wrapper.text()).toMatch("Some Title");
  });

  it("allows parent component to provide subtitle content", () => {
    const wrapper = mount(HeaderContainer, {
      slots: {
        subtitle: "<h2>Some subTitle</h2>",
      },
    });
    expect(wrapper.text()).toMatch("Some subTitle");
  });
});
