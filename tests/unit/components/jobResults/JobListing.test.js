import { mount, RouterLinkStub } from "@vue/test-utils";

import JobListing from "@/components/JobResults/JobListing.vue";

describe("JobListing", () => {
  const createJobProps = (jobProps = {}) => ({
    title: "Vue Developer",
    organization: "Bobo",
    locations: ["Tehran"],
    minimumQualifications: ["HTML"],
    ...jobProps,
  });

  const createConfig = (jobProps) => ({
    props: {
      job: {
        ...jobProps,
      },
    },
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });
  it("renders job title", () => {
    const jobProps = createJobProps({ title: "Vue Programmer" });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Vue Programmer");
  });

  it("renders job Organization", () => {
    const jobProps = createJobProps({ organization: "Bobo" });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Bobo");
  });

  it("renders job locations", () => {
    const jobProps = createJobProps({ locations: ["Tehran", "Los Angeles"] });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Tehran");
    expect(wrapper.text()).toMatch("Los Angeles");
  });

  it("renders job minimumQualifications", () => {
    const jobProps = createJobProps({
      minimumQualifications: ["HTML", "CSS"],
    });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("HTML");
    expect(wrapper.text()).toMatch("CSS");
  });

  it("links to invidual job page", () => {
    const jobProps = createJobProps({ id: 15 });
    const wrapper = mount(JobListing, createConfig(jobProps));
    const jobPageLink = wrapper.findComponent(RouterLinkStub);
    const toProp = jobPageLink.props("to");
    expect(toProp).toBe("/jobs/results/15");
  });
});
