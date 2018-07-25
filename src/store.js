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
            if(state.atoutStore.grandmaNumber) state.globalTimer = state.globalTimer + +state.atoutStore.grandmaNumber;
            if(state.atoutStore.cursorNumber) state.globalTimer = state.globalTimer + (+state.atoutStore.cursorNumber / 10);
            setInterval(function () {state.scoreNumber = +state.scoreNumber + +state.globalTimer}, 1000);
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