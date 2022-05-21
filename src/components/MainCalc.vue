<template>
  <div class="main-calc">
    <div
      class="main-calc__all"
      v-for="(wind, index) in this.$store.state.window"
      :key="index"
    >
      <div class="main-calc__window">
        <img class="main-calc__window-img" :src="wind.image" alt="window" />
        <img
          class="main-calc__window-mosqito"
          v-if="wind.mosqito"
          src="../assets/images/mosqito.png"
          alt="mosqito net"
        />
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
@media screen and (max-width: 650px) {
  .main-calc__window-img {
    width: 102px;
  }
}
@media screen and (max-width: 500px) {
  .main-calc__window-img {
    width: 74px;
  }
}
@media screen and (max-width: 390px) {
  .main-calc__window-img {
    width: 58px;
  }
}
.main-calc__window-mosqito {
  position: absolute;
  top: 17px;
  right: 17px;
  width: 114px;
  height: 214px;
}
@media screen and (max-width: 650px) {
  .main-calc__window-mosqito {
    width: 80px;
    height: 150px;
    top: 11px;
    right: 11px;
  }
}
@media screen and (max-width: 500px) {
  .main-calc__window-mosqito {
    width: 58px;
    height: 107px;
    top: 9px;
    right: 8px;
  }
}
@media screen and (max-width: 390px) {
  .main-calc__window-mosqito {
    width: 46px;
    height: 84px;
    top: 7px;
    right: 6px;
  }
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
  font-size: 0;
}
@media screen and (max-width: 650px) {
  .main-calc__button {
    left: 38%;
    top: 41.5%;
  }
}
@media screen and (max-width: 500px) {
  .main-calc__button {
    top: 39.5%;
    left: 33.5%;
  }
}
@media screen and (max-width: 390px) {
  .main-calc__button {
    top: 36.5%;
    left: 28%;
  }
}
</style>
