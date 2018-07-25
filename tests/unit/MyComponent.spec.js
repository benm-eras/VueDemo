import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import MyComponent from "@/components/MyComponent.vue";

describe("MyComponent.vue", () => {
  it("should find child `.page` elements", () => {
    let pages = [];
    let count = 3;

    for(let i = 1; i <= count; i++)
      pages.push(`<div class="page">Page ${i}</div>`)

    const wrapper = shallowMount(MyComponent, {
      slots: { default: pages }
    });

    expect(wrapper.vm.pages.length).to.equal(count);
  });

  it("should **only** find child pages `.page` elements", () => {
    let pages = [];
    let count = 3;

    pages.push(`<div class="shade"></div>`);

    for(let i = 1; i <= count; i++)
      pages.push(`<div class="page">Page ${i}</div>`)

    const wrapper = shallowMount(MyComponent, {
      slots: { default: pages }
    });

    expect(wrapper.vm.pages.length).to.equal(count);
  });
});