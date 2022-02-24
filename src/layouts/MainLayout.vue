<template>
  <main class="main">
    <div class="main__calc">
      <div class="main__calc-title">Калькулятор</div>
      <button
        class="main__calc-button-minus"
        v-if="this.$store.state.window.length > 1"
        @click="removeWindow"
      ></button>
      <div class="main__calc-base">
        <MainCalc />
      </div>
      <button
        class="main__calc-button-plus"
        v-if="this.$store.state.window.length <= 2"
        @click="addWindow"
      ></button>
      <div class="main__calc-description">
        Окно 3х створчатое, габарит (ШхВ) 1800х1200мм
      </div>
    </div>
    <div class="main__config">
      <div class="main__config-title">Выберите конфигурацию:</div>
      <div class="main__config-base">
        <Carousel />
      </div>
    </div>
    <div class="main__props">
      <div class="main__props-basket"></div>
      <div class="main__props-base"></div>
      <button class="main__props-button">Добавить в заказ</button>
    </div>
    <div class="main__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </div>
    <PopupCalc />
  </main>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import MainCalc from "@/components/MainCalc.vue";
import PopupCalc from "@/components/PopupCalc.vue";

export default {
  name: "MainLayout",
  components: {
    Carousel,
    MainCalc,
    PopupCalc,
  },
  created() {
    this.$store.commit(
      "addWindow",
      this.$store.state.typeWindow[0].windows.deaf
    );
  },
  methods: {
    removeWindow() {
      if (this.$store.state.window.length > 1) {
        this.$store.commit("removeWindow");
      }
    },
    addWindow() {
      if (this.$store.state.window.length < 3) {
        this.$store.commit(
          "addWindow",
          this.$store.state.typeWindow[0].windows.deaf
        );
      }
    },
  },
};
</script>

<style>
.main {
  margin: 66px 160px 0;
  display: grid;
  grid-template-columns: 0.83fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 115px;
  grid-auto-flow: row;
  grid-template-areas:
    "main__calc main__props"
    "main__config main__description";
}
.main__calc {
  display: grid;
  grid-template-columns: 0 2.2fr 0;
  grid-template-rows: 0.4fr 3.45fr 0.2fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "main__calc-title main__calc-title main__calc-title"
    "main__calc-button-minus main__calc-base main__calc-button-plus"
    "main__calc-description main__calc-description main__calc-description";
  grid-area: main__calc;
  margin-bottom: 3vmax;
  position: relative;
}
.main__calc-title {
  grid-area: main__calc-title;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0em;
  margin-bottom: 1.8vmax;
}
.main__calc-title::before {
  content: "";
  width: 12px;
  height: 18px;
  display: inline-block;
  margin-left: -28px;
  padding-left: 16px;
  background-repeat: no-repeat;
  background-image: url("../assets/images/arrow-calc.svg");
}
.main__calc-base {
  grid-area: main__calc-base;
  display: flex;
  position: relative;
  justify-content: center;
}
.main__calc-button-minus {
  position: absolute;
  top: 47.6%;
  left: -60px;
  width: 50px;
  height: 50px;
  display: inline-block;
  background-repeat: no-repeat;
  background: transparent;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  z-index: 1;
  background-image: url("../assets/images/calc-remove.svg");
  background-repeat: no-repeat;
  opacity: 0.5;
}
.main__calc-button-minus:hover {
  transition: 0.5s;
  opacity: 1;
}
.main__calc-button-plus {
  position: absolute;
  top: 47.6%;
  right: -60px;
  width: 50px;
  height: 50px;
  display: inline-block;
  background-repeat: no-repeat;
  background: transparent;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  z-index: 1;
  background-image: url("../assets/images/calc-add.svg");
  background-repeat: no-repeat;
  opacity: 0.5;
}
.main__calc-button-plus:hover {
  transition: 0.5s;
  opacity: 1;
}
.main__calc-description {
  grid-area: main__calc-description;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0em;
  color: var(--second-color);
  margin-top: 1.5vmax;
}
.main__config {
  display: grid;
  grid-template-columns: 0.4fr 2.2fr 0.4fr;
  grid-template-rows: 0.3fr 1.7fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "main__config-title main__config-title main__config-title"
    "main__config-base main__config-base main__config-base"
    "main__config-base main__config-base main__config-base";
  grid-area: main__config;
}
.main__config-title {
  grid-area: main__config-title;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0em;
  margin-bottom: 2.6vmax;
}
.main__config-base {
  grid-area: main__config-base;
  margin-left: 31px;
}
.main__props {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1.6fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "main__props-basket main__props-basket main__props-basket"
    "main__props-base main__props-base main__props-base"
    "main__props-button-base main__props-button-base main__props-button-base";
  grid-area: main__props;
}
.main__props-basket {
  grid-area: main__props-basket;
  background-image: url("../assets/images/basket-pin.png");
  background-repeat: no-repeat;
  justify-self: flex-end;
  align-self: center;
  width: 20px;
  height: 20px;
}
.main__props-base {
  grid-area: main__props-base;
}
.main__props-button {
  grid-area: main__props-button-base;
  width: 13.1vmax;
  justify-self: end;
  background-color: var(--buttons-color);
  border-radius: var(--buttons-radius);
  height: var(--buttons-height);
  border: none;
  color: var(--main-color);
  cursor: pointer;
}
.main__description {
  grid-area: main__description;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.881;
  letter-spacing: 0em;
  color: var(--second-color);
}
</style>
