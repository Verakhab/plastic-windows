import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    orderNumber: 0,
    numberIndex: 0,
    isActive: false,
    window: [],
    option: {
      widthSash: "",
      heightSash: "",
      profil: "",
      accessories: "",
      externalLamination: "",
      glazedWindows: "",
      internalLamination: "",
      windowsillWidth: "",
      windowsillLength: "",
      upperSlopeWidth: "",
      upperSlopeLength: "",
      lowTideWidth: "",
      lowTideLength: "",
      sideSlopesWidth: "",
      sideSlopesLength: "",
    },
    calculate: {},
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
    addConfig(state, payload) {
      state.window.push(payload);
    },
    updateOption(state, payload) {
      state.option.payload = payload;
    },
    order(state) {
      state.orderNumber++;
      for (let orderNum = 1; orderNum <= state.orderNumber; orderNum++) {
        state.calculate[`order_${orderNum}`] = {};
        state.window.forEach((el, index) => {
          state.calculate[`order_${orderNum}`][`sash_${index + 1}`] = el;
        });
        state.calculate[`order_${orderNum}`]["option"] = state.option;
      }
    },
  },
  actions: {},
  modules: {},
});
