import Vue from 'vue'
import VueCookie from 'vue-cookie'
import Vuex from 'vuex'
import { atoutStore } from "./atoutstore";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        scoreNumber: VueCookie.get('score'),
        globalTimer: 0
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
            setInterval(function () {
                state.globalTimer = +state.atoutStore.grandmaNumber + (+state.atoutStore.cursorNumber / 10);
                state.scoreNumber = +state.scoreNumber + +state.globalTimer;
                VueCookie.set('score', state.scoreNumber);
            }, 1000);
        },
        grandmaInteract(state) {
            let grandmaPrice = state.atoutStore.grandmaPrice;
            state.scoreNumber = state.scoreNumber - grandmaPrice;
            state.atoutStore.grandmaNumber++;
            grandmaPrice = +grandmaPrice * (((state.atoutStore.grandmaNumber / 10)) + 1);
            grandmaPrice = Math.round(grandmaPrice);
            state.atoutStore.grandmaPrice = grandmaPrice;
            VueCookie.set('grandma', state.atoutStore.grandmaNumber)
        },
        cursorInteract(state) {
            let cursorPrice = state.atoutStore.cursorPrice;
            state.scoreNumber = state.scoreNumber - cursorPrice;
            state.atoutStore.cursorNumber++;
            cursorPrice = +cursorPrice * (((state.atoutStore.cursorNumber / 10)) + 1);
            cursorPrice = Math.round(cursorPrice);
            state.atoutStore.cursorPrice = cursorPrice;
            VueCookie.set('cursor', state.atoutStore.cursorNumber)
        }
    },
    modules: {
        atoutStore,
    },
});