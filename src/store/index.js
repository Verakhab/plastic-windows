import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    numberIndex: 0,
    isActive: false,
    window: [],
  },
  mutations: {
    index(state, payload) {
      state.numberIndex = payload;
    },
    isActive(state) {
      state.isActive = !state.isActive;
    },
    addWindow(state, payload) {
      state.window.push(payload);
    },
    removeWindow(state) {
      state.window.pop();
    },
    choiceConfig(state, payload) {
      state.window.forEach(() => {
        state.window.splice(0, state.window.length);
        payload.forEach((el) => {
          state.window.push(el);
        });
      });
    },
    changeSash(state, payload) {
      state.window.splice(state.numberIndex, 1, payload);
    },
    addMosqito(state, payload) {
      state.window[payload].mosqito = !state.window[payload].mosqito;
    },
  },
  actions: {},
  modules: {},
});
