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
});