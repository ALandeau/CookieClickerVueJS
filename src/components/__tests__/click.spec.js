import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Click from "@/components/clickCookie.vue";
import store from "@/store";

describe("clickCookie.vue", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  const wrapper = mount(Click, {
    store,
    localVue
  });

  it("renders the correct markup", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("button click should increment the count", () => {
    expect(store.state.scoreNumber).toBe(0);
    const counter = wrapper.find("#score .input-block");
    counter.trigger("click");
    expect(store.state.scoreNumber).toBe(1);
  });
});
