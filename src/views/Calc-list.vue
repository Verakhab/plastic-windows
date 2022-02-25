<template>
  <div class="list">
    <div class="main__calc-title main__calc-title_list">
      Текущая комплектация
      <router-link to="/">
        <div class="list__back-button"></div>
      </router-link>
    </div>
    <ItemComplect />
    <button class="list__button" @click="calculate">Отправить в расчёт</button>
  </div>
</template>

<script>
import ItemComplect from "@/components/ItemComplect.vue";

export default {
  name: "Calc-list",
  components: {
    ItemComplect,
  },
  methods: {
    calculate() {
      console.log("calculate");
    },
  },
};
</script>

<style>
.list {
  display: flex;
  flex-direction: column;
  margin: 66px 11.1vmax 69px;
}
.list__back-button {
  width: 450px;
  height: 18px;
  display: inline-block;
  margin-left: -415px;
  padding-left: 16px;
  background-repeat: no-repeat;
  background-image: url("../assets/images/arrow-calc.svg");
}
.main__calc-title_list {
  margin-bottom: 0;
}
.list__button {
  width: 22.2vmax;
  align-self: flex-start;
  background-color: var(--buttons-color);
  border-radius: var(--buttons-radius);
  height: var(--buttons-height);
  border: none;
  color: var(--main-color);
  cursor: pointer;
  margin-top: 74px;
}
</style>
