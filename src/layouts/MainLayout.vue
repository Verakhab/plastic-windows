<template>
  <main class="main">
    <div class="main__column-one">
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
    </div>
    <div class="main__column-spacer"></div>
    <div class="main__column-second">
      <div class="main__props">
        <div class="main__props-basket"></div>
        <div class="main__props-base">
          <Accordion :content="example" />
        </div>
        <button class="main__props-button">Добавить в заказ</button>
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
      example: [
        {
          id: 1,
          active: false,
          title: "Размеры",
          details: `
      <p>You can crush me but you can't crush my spirit! Are you crazy? I can't swallow that. Who's brave enough to fly into something we all keep calling a death sphere? It doesn't look so shiny to me.</p>
      <ul>
        <li>I just want to talk.</li>
        <li>It has nothing to do with mating.</li>
        <li>Fry, that doesn't make sense.</li>
      </ul>
    `,
        },
        {
          id: 2,
          active: false,
          title: "Система",
          details: `
      <p>Ah, the 'Breakfast Club' soundtrack! I can't wait til I'm old enough to feel ways about stuff!</p>
    `,
        },
        {
          id: 3,
          active: false,
          title: `Комплектация`,
          details: `
      <p>And then the battle's not so bad? You'll have all the Slurm you can drink when you're partying with Slurms McKenzie! Say it in Russian!</p>
      <p>Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.</p>
    `,
        },
      ],
    };
  },
  created() {
    this.$store.commit(
      "addWindow",
      new Sash(
        "Глухое",
        "window",
        false,
        "deaf",
        false,
        require("../assets/images/deaf.jpg")
      )
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
          new Sash(
            "Глухое",
            "window",
            false,
            "deaf",
            false,
            require("../assets/images/deaf.jpg")
          )
        );
      }
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
</style>
