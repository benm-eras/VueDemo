import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import MyComponent from "@/components/MyComponent.vue";
import _ from "lodash";

describe("MyComponent.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(MyComponent, {});
  });

  describe("setting `show` to `true`", () => {
    it("should cause `showOuter` and `showInner` to be set to `true`", () => {
      wrapper.setProps({ show: true });

      expect(wrapper.vm.$data.showOuter).to.be.true;
      expect(wrapper.vm.$data.showInner).to.be.true; // fails here
    });

    it("should cause `showOuter` and `showInner` to be set to `true` (with $nextTick)", done => {
      wrapper.setProps({ show: true });

      expect(wrapper.vm.$data.showOuter).to.be.true;

      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.$data.showInner).to.be.true; // fails here
        done();
      });
    });

    it("should cause `showOuter` and `showInner` to be set to `true` (with _.delay)", done => {
      wrapper.setProps({ show: true });

      expect(wrapper.vm.$data.showOuter).to.be.true;

      _.delay(() => {
        expect(wrapper.vm.$data.showInner).to.be.true; // fails here
        done();
      }, 1500);
    });
  });


});