import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    orderNumber: 0,
    numberIndex: window.length,
    isActive: false,
    components: {},
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
    calculate: [],
    amount: [],
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
    order(state, payload) {
      state.orderNumber++;
      for (let orderNum = 1; orderNum <= state.orderNumber; orderNum++) {
        state.window.forEach((el, index) => {
          payload[0][`sash_${index + 1}`] = el;
          el.typeSash === "window"
            ? (payload[0]["nameWindow"] = "створчатое окно")
            : (payload[0]["nameBalcon"] = "Балконный блок");
        });
        payload[0]["option"] = payload[1];
        payload[0]["order"] = state.orderNumber;
        payload[0]["quantitySash"] = state.window.length;
      }
      state.calculate.push(payload[0]);
    },
    components(state, payload) {
      state.components = payload;
    },
    amount(state, payload) {
      state.amount.push(payload);
    },
  },
  actions: {},
  modules: {},
});
