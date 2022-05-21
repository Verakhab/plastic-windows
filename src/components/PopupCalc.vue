<template>
  <div class="popup-calc" v-if="$store.state.isActive">
    <div class="popup-calc__popup">
      <h2 class="popup-calc__popup-header">
        Створка {{ $store.state.numberIndex + 1 }}
        <button class="popup-calc__close" @click="close"></button>
      </h2>
      <FormConfig />
    </div>
  </div>
</template>

<script>
import FormConfig from "@/components/FormConfig.vue";

export default {
  name: "PopupCalc",
  components: {
    FormConfig,
  },
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
@media screen and (max-width: 767px) {
  .popup-calc {
    overflow-y: scroll;
  }
}
.popup-calc__popup {
  position: absolute;
  left: 5vw;
  background: var(--main-color);
  width: 700px;
  border-radius: 5px;
}
@media screen and (max-width: 767px) {
  .popup-calc__popup {
    top: 7%;
    width: 90%;
  }
}
.popup-calc__popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: var(--buttons-color);
  margin: 0;
}
@media screen and (max-width: 1024px) {
  .popup-calc__popup-header {
    padding: 10px 30px;
  }
}
.popup-calc__close {
  background-image: url("../assets/images/close.png");
  width: 20px;
  height: 20px;
  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
  cursor: pointer;
  padding-right: 0;
  font-size: 0;
}
</style>
