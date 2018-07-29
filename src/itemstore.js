import VueCookie from "vue-cookie";

export const itemStore = {
  namespaced: true,
  state: {
    blueNumber: +VueCookie.get("bluecursor"),
    bluePrice: 1000
  },
  getters: {
    blueNumber: state => state.blueNumber,
    bluePrice: state => state.bluePrice
  }
};
