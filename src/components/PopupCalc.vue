<template>
  <div class="popup-calc" v-if="this.$store.state.isActive">
    <div class="popup-calc__popup">
      <div class="popup-calc__popup-header">
        Створка {{ this.$store.state.numberIndex }}
        <button class="popup-calc__close" @click="close"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupCalc",
  methods: {
    close() {
      this.$store.commit("isActive");
    },
  },
};
</script>

<style>
.popup-calc {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);

  z-index: 2;
}
.popup-calc__popup {
  position: absolute;
  top: 10vh;
  left: 5vh;
  background: var(--main-color);
  width: 50vw;
  min-height: 40vh;
  border-radius: 5px;
}
.popup-calc__popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: var(--buttons-color);
}
.popup-calc__close {
  background-image: url("../assets/images/close.png");
  width: 20px;
  height: 20px;
  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
  cursor: pointer;
}
</style>
