<template>
  <div class="list">
    <router-link class="list__back-button" to="/">
      <img
        class="list__back-button-img"
        src="../assets/images/arrow-calc.svg"
      />
      <h2 class="main__calc-title main__calc-title_list">
        Текущая комплектация
      </h2>
    </router-link>
    <ItemComplect />
    <router-link to="/calc-done">
      <button class="list__button" @click="calculate">
        Отправить в расчёт
      </button>
    </router-link>
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
      fetch("https://evening-woodland-74034.herokuapp.com/amount", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(this.$store.state.calculate),
      })
        .then((res) => res.json())
        .then((res) => {
          this.$store.state.amount.splice(0, this.$store.state.amount.length);
          res.forEach((el) => {
            this.$store.commit("amount", el);
          });
        });
    },
  },
};
</script>

<style>
.list {
  min-height: 85vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 66px 160px 69px;
}
@media screen and (max-width: 767px) {
  .list {
    margin: 66px 40px 69px;
  }
}
.list__back-button {
  position: relative;
  text-decoration: none;
}
.list__back-button-img {
  height: 18px;
  position: absolute;
  left: -25px;
  top: 14px;
}
@media screen and (max-width: 767px) {
  .list__back-button-img {
    height: 13px;
    position: absolute;
    left: -17px;
    top: 11px;
  }
}
.main__calc-title_list {
  display: inline;
  color: #fff;
  text-decoration: none;
}
@media screen and (max-width: 767px) {
  .main__calc-title_list {
    font-size: 24px;
  }
}
.list__button {
  width: 320px;
  align-self: flex-start;
  background-color: var(--buttons-color);
  border-radius: var(--buttons-radius);
  height: var(--buttons-height);
  border: none;
  color: var(--main-color);
  cursor: pointer;
  margin-top: 74px;
}
@media screen and (max-width: 550px) {
  .list__button {
    width: 200px;
  }
}
</style>
