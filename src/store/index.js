import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    numberIndex: 0,
    isActive: false,
    window: [],
    typeWindow: [
      {
        windows: {
          deaf: {
            name: "Глухое",
            link: require("../assets/images/deaf.jpg"),
            mosquito: false,
          },
          rotary: {
            right: {
              name: "Правое открывание",
              link: require("../assets/images/Right-opening-window.jpg"),
              mosquito: false,
            },
            left: {
              name: "Левое открывание",
              link: require("../assets/images/Left-opening-window.jpg"),
              mosquito: false,
            },
          },
          swingOut: {
            right: {
              name: "Поворотно-откидное правое",
              link: require("../assets/images/Swing-out-right.jpg"),
              mosquito: false,
            },
            left: {
              name: "Поворотно-откидное левое",
              link: require("../assets/images/Swing-out-left.jpg"),
              mosquito: false,
            },
          },
        },
        doors: {
          right: {
            name: "Правое открывание",
            link: require("../assets/images/Right-opening-door.jpg"),
          },
          left: {
            name: "Левое открывание",
            link: require("../assets/images/Left-opening-door.jpg"),
          },
        },
        mosqit: {
          name: "Москитная сетка",
          link: require("../assets/images/mosqito.png"),
        },
      },
    ],
  },
  mutations: {
    index(state, payload) {
      state.numberIndex = payload + 1;
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
    changeWindow(state, payload) {
      state.window.forEach(() => {
        state.window.splice(0, state.window.length);
        payload.forEach((el) => {
          state.window.push(el);
        });
      });
    },
  },
  actions: {},
  modules: {},
});
