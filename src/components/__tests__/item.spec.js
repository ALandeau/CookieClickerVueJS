import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Item from "@/components/itemCookie.vue";
import store from "@/store";

describe("itemCookie.vue", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  const wrapper = mount(Item, {
    store,
    localVue
  });

  it("renders the correct markup", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("bluecursor click should correctly enable", () => {
    store.state.scoreNumber = 1000;
    expect(store.state.scoreNumber).toBe(1000);
    const counter = wrapper.find("#item-bluecursor div.enable");
    counter.trigger("click");
    wrapper.find("#atout-grandma div.disable");
    expect(store.state.scoreNumber).toBeLessThan(1000);
  });
});
