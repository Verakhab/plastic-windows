<template>
  <div class="list">
    <div class="main__calc-title main__calc-title_list">
      Расчет комплектации
      <router-link to="/calc-list">
        <div class="list__back-button list__back-button_done"></div>
      </router-link>
    </div>
    <p class="list__all-price">
      Общая сумма на {{ this.$store.state.amount.length }} позиции:
      <span class="list__all-price-number"
        >&#160;&#160;&#160;&#160;{{ this.allPrice }} ₽</span
      >
    </p>
    <ItemComplect :price="this.allPrice" />
  </div>
</template>

<script>
import ItemComplect from "@/components/ItemComplect.vue";

export default {
  name: "Calc-done",
  components: {
    ItemComplect,
  },
  data() {
    return {
      allPrice: 0,
    };
  },
  beforeUpdate() {
    this.$store.state.amount.forEach((el) => {
      this.allPrice += el;
    });
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
.list__back-button_done {
  width: 450px;
  height: 18px;
  display: inline-block;
  margin-left: -386px;
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
.list__all-price {
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  margin: 27px 0 0 0;
  display: flex;
  align-items: center;
}
.list__all-price-number {
  font-size: 30px;
  font-style: normal;
  font-weight: 900;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
}
</style>
