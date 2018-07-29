import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Atout from "@/components/atoutCookie.vue";
import store from "@/store";

jest.useFakeTimers();

describe("atoutCookie.vue", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  const wrapper = mount(Atout, {
    store,
    localVue
  });

  it("renders the correct markup", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("grandma click should increment the count and update score after 1s", () => {
    store.state.scoreNumber = 100;
    expect(store.state.scoreNumber).toBe(100);
    const counter = wrapper.find("#atout-grandma div.enable");
    counter.trigger("click");
    setTimeout(() => {
      expect(store.state.scoreNumber).toBeGreaterThan(100);
    }, 1000);
  });

  it("cursor click should increment the count and update score after 10s", () => {
    store.state.scoreNumber = 10;
    expect(store.state.scoreNumber).toBe(10);
    const counter = wrapper.find("#atout-cursor div.enable");
    counter.trigger("click");
    setTimeout(() => {
      expect(store.state.scoreNumber).toBeGreaterThan(10);
    }, 1200);
  });
});
