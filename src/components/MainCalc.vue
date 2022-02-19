<template>
  <div class="main-calc">
    <div
      class="main-calc__all"
      v-for="(wind, index) in this.$store.state.window"
      :key="index"
    >
      <div class="main-calc__window">
        <img :src="wind.link" alt="window" />
        <button class="main-calc__button" @click="show(wind, index)"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainCalc",
  methods: {
    show(wind, index) {
      this.$store.commit("index", index);
      this.$store.commit("isActive");
    },
  },
};
</script>

<style>
.main-calc {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.main-calc__window {
  position: relative;
}
.main-calc__button {
  width: 25px;
  height: 25px;
  background-image: url("../assets/images/settings-window.svg");
  background-repeat: no-repeat;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  position: absolute;
  top: 44.5%;
  left: 40.5%;
  z-index: 1;
}
</style>
