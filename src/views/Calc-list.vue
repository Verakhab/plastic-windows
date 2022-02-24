<template>
  <div class="list">
    <div class="main__calc-title">
      Текущая комплектация
      <router-link to="/">
        <div class="list__back-button"></div>
      </router-link>
    </div>
    <ItemComplect />
  </div>
</template>

<script>
import ItemComplect from "@/components/ItemComplect.vue";

export default {
  name: "Calc-list",
  components: {
    ItemComplect,
  },
};
</script>

<style>
.list {
  display: flex;
  flex-direction: column;
  margin: 66px 11vmax 69px;
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
</style>
