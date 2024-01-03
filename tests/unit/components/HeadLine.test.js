import { nextTick } from "vue";
import { mount } from "@vue/test-utils";

import HeadLine from "@/components/HeadLine.vue";

describe("HeadLine", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  it("display the verb action", () => {
    const wrapper = mount(HeadLine);
    const actionPharase = wrapper.find("[data-test='action-pharase']");
    expect(actionPharase.text()).toBe("Build for everyone");
  });
  it("changes action verb at a consistent interval", () => {
    const setIntervalSpy = jest.spyOn(global, "setInterval");
    mount(HeadLine);
    expect(setIntervalSpy).toHaveBeenCalled();
    setIntervalSpy.mockRestore();
  });
  it("swap action verb after first interval", async () => {
    const wrapper = mount(HeadLine);
    jest.runOnlyPendingTimers();
    await nextTick();
    const actionPharase = wrapper.find("[data-test='action-pharase']");
    expect(actionPharase.text()).toBe("Create for everyone");
  });
  it("removes interval when component disapears", () => {
    const clearIntervalSpy = jest.spyOn(global, "clearInterval");
    const wrapper = mount(HeadLine);
    wrapper.unmount();
    expect(clearIntervalSpy).toHaveBeenCalled();
    clearIntervalSpy.mockRestore();
  });
});
