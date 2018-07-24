import VueCookie from "vue-cookie";

export const atoutStore = {
    namespaced: true,
    state: {
        grandmaNumber: VueCookie.get('grandma'),
        cursorNumber: VueCookie.get('cursor')
    },
    getters: {
        grandmaNumber: state => state.grandmaNumber,
        cursorNumber: state => state.cursorNumber,
        scoreNumber: state => state.scoreNumber,
    },
    mutations: {
        incrementGrandmaNumber(state) {
            state.grandmaNumber++;
            VueCookie.set('grandma', state.grandmaNumber)
        },
        incrementCursorNumber(state) {
            state.cursorNumber++;
            VueCookie.set('cursor', state.cursorNumber)
        }
    }
};
