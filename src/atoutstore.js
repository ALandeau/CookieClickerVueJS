import VueCookie from "vue-cookie";

export const atoutStore = {
    namespaced: true,
    state: {
        grandmaNumber: VueCookie.get('grandma'),
        cursorNumber: VueCookie.get('cursor'),
        grandmaPrice: 100,
        cursorPrice: 10,
    },
    getters: {
        grandmaNumber: state => state.grandmaNumber,
        cursorNumber: state => state.cursorNumber,
        grandmaPrice: state => state.grandmaPrice,
        cursorPrice: state => state.cursorPrice
    }
};
