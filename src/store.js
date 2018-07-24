import Vue from 'vue'
import VueCookie from 'vue-cookie'
import Vuex from 'vuex'
import { atoutStore } from "./atoutstore";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        scoreNumber: VueCookie.get('score'),
    },
    getters: {
        scoreNumber: state => state.scoreNumber,
    },
    mutations: {
        incrementScoreNumber(state) {
            state.scoreNumber++;
            VueCookie.set('score', state.scoreNumber);
        },
        autoIncrementScoreNumber(state) {

            // TODO: grandma increment 1 per second
            if (state.atoutStore.grandmaNumber) {
                setInterval(function () {
                    state.scoreNumber = +state.scoreNumber + +state.atoutStore.grandmaNumber;
                }, 1000);
            }

            // TODO: cursor increment 1 per 10 second
            if (state.atoutStore.cursorNumber) {
                setInterval(function () {
                    state.scoreNumber = +state.scoreNumber + +state.atoutStore.cursorNumber;
                }, 10000);
            }
        }
    },
    modules: {
        atoutStore,
    },
});
