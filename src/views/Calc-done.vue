<template>
  <div class="list">
    <router-link class="list__back-button" to="/calc-list">
      <img
        class="list__back-button-img"
        src="../assets/images/arrow-calc.svg"
      />
      <h2 class="main__calc-title main__calc-title_list">
        Расчет комплектации
      </h2>
    </router-link>
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
.list__all-price {
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  margin: 27px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media screen and (max-width: 359px) {
  .list__all-price {
    justify-content: flex-end;
    flex-wrap: wrap;
  }
}
.list__all-price-number {
  font-size: 30px;
  font-style: normal;
  font-weight: 900;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
  white-space: nowrap;
}
</style>
