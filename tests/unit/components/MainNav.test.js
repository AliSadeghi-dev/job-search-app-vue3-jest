import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("diplays company name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Bobo Careers");
  });
});
