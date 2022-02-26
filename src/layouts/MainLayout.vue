<template>
  <main class="main">
    <div class="main__column-one">
      <div class="main__calc">
        <div class="main__calc-title">
          Калькулятор
          <div class="main__calc-title-back"></div>
        </div>
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
    </div>
    <div class="main__column-spacer"></div>
    <div class="main__column-second">
      <div class="main__props">
        <router-link class="main__props-basket" to="/calc-list">
          <div class="main__props-basket">
            <div
              v-if="$store.state.orderNumber"
              class="main__props-basket-order"
            >
              <p class="main__props-basket-order-number">
                {{ $store.state.orderNumber }}
              </p>
            </div>
          </div>
        </router-link>
        <div class="main__props-base">
          <Accordion :content="dataSash" />
        </div>
        <button
          class="main__props-button"
          @click="order"
          :disabled="
            !$store.state.option.heightSash ||
            !$store.state.option.widthSash ||
            !$store.state.option.profil ||
            !$store.state.option.accessories ||
            !$store.state.option.externalLamination ||
            !$store.state.option.glazedWindows ||
            !$store.state.option.internalLamination ||
            !$store.state.option.windowsillWidth ||
            !$store.state.option.windowsillLength ||
            !$store.state.option.upperSlopeWidth ||
            !$store.state.option.upperSlopeLength ||
            !$store.state.option.lowTideWidth ||
            !$store.state.option.lowTideLength ||
            !$store.state.option.sideSlopesWidth ||
            !$store.state.option.sideSlopesLength
          "
        >
          > Добавить в заказ
        </button>
      </div>
      <div class="main__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>
    <PopupCalc />
  </main>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import MainCalc from "@/components/MainCalc.vue";
import PopupCalc from "@/components/PopupCalc.vue";
import Accordion from "@/components/Accordion.vue";
import Sash from "../plugins/Sash.js";
import OptionsSash from "../plugins/OptionsSash.js";
import Order from "../plugins/Order.js";
import isEmpty from "../plugins/isEmpty.js";

export default {
  name: "MainLayout",
  components: {
    Carousel,
    MainCalc,
    PopupCalc,
    Accordion,
  },
  data() {
    return {
      dataSash: [
        {
          id: 1,
          active: false,
          title: "Размеры",
          details: "",
        },
        {
          id: 2,
          active: false,
          title: "Система",
          details: "",
        },
        {
          id: 3,
          active: false,
          title: `Комплектация`,
          details: "",
        },
      ],
    };
  },
  created() {
    if (this.$store.state.window.length === 0) {
      this.$store.commit(
        "addWindow",
        new Sash(
          "Створка",
          "Глухая",
          "window",
          false,
          "deaf",
          false,
          require("../assets/images/deaf.jpg")
        )
      );
    }
    if (isEmpty(this.$store.state.components)) {
      fetch("http://localhost:3000/")
        .then((res) => res.json())
        .then((res) => {
          this.$store.commit("components", res);
        });
    }
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
          new Sash(
            "Створка",
            "Глухая",
            "window",
            false,
            "deaf",
            false,
            require("../assets/images/deaf.jpg")
          )
        );
      }
    },
    order() {
      this.$store.commit("order", [
        new Order(),
        new OptionsSash(
          this.$store.state.option.widthSash,
          this.$store.state.option.heightSash,
          this.$store.state.option.profil,
          this.$store.state.option.accessories,
          this.$store.state.option.externalLamination,
          this.$store.state.option.glazedWindows,
          this.$store.state.option.internalLamination,
          this.$store.state.option.windowsillWidth,
          this.$store.state.option.windowsillLength,
          this.$store.state.option.upperSlopeWidth,
          this.$store.state.option.upperSlopeLength,
          this.$store.state.option.lowTideWidth,
          this.$store.state.option.lowTideLength,
          this.$store.state.option.sideSlopesWidth,
          this.$store.state.option.sideSlopesLength
        ),
      ]);
    },
  },
};
</script>

<style>
.main {
  display: flex;
  margin: 66px 11vmax 69px;
}
.main__column-one {
  flex: 1 1 25vmax;
}
.main__column-spacer {
  flex: 1 1 1.5vmax;
}
.main__column-second {
  flex: 1 1 455px;
}
.main__calc {
  margin-bottom: 3vmax;
  position: relative;
}
.main__calc-title {
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0em;
  margin-bottom: 1.8vmax;
}
.main__calc-title-back {
  width: 12px;
  height: 18px;
  display: inline-block;
  margin-left: -248px;
  padding-left: 16px;
  background-repeat: no-repeat;
  background-image: url("../assets/images/arrow-calc.svg");
}
.main__calc-base {
  display: flex;
  position: relative;
  justify-content: center;
}
.main__calc-button-minus {
  position: absolute;
  top: 48%;
  left: -58px;
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
  top: 48%;
  right: -62px;
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
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0em;
  color: var(--second-color);
  margin-top: 1.7vmax;
}
.main__config-title {
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0em;
  margin-bottom: 2.6vmax;
}
.main__config-base {
  margin-left: 31px;
}
.main__props {
  display: flex;
  flex-direction: column;
  margin-top: 14px;
}
.main__props-basket {
  background-image: url("../assets/images/basket-pin.png");
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  align-self: end;
  position: relative;
}
.main__props-basket-order {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: var(--order-color);
  border-radius: 10px;
  bottom: 10px;
  right: 12px;
}
.main__props-basket-order-number {
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  line-height: 0.1;
  color: var(--main-color);
}
.main__props-base {
  margin-top: 15px;
}
.main__props-button {
  width: 13.3vmax;
  align-self: end;
  background-color: var(--buttons-color);
  border-radius: var(--buttons-radius);
  height: var(--buttons-height);
  border: none;
  color: var(--main-color);
  cursor: pointer;
  margin-top: 20px;
}
.main__description {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.881;
  letter-spacing: 0em;
  color: var(--second-color);
  margin-top: 70px;
}
button:disabled {
  background-color: var(--buttons-disabled);
  cursor: default;
  color: var(--color-accordion);
}
</style>
