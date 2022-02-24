<template>
  <div class="item-complect">
    <div v-for="order in $store.state.calculate" :key="order.order">
      <h3 class="item-complect__title">Позиция № {{ order.order }}</h3>
      <div class="item-complect__body" style="color: #000">
        <div class="item-complect__image">
          <img :src="order.sash_1.image" alt="sash" />
          <img
            v-if="order.sash_2"
            :src="order.sash_2 ? order.sash_2.image : ``"
            alt="sash"
          />
          <img
            v-if="order.sash_3"
            :src="order.sash_3 ? order.sash_3.image : ``"
            alt="sash"
          />
        </div>
        <p>Ширина окна: {{ order.option.widthSash }}</p>
        <p>Высота окна: {{ order.option.heightSash }}</p>
        <p>
          Створка № {{ $store.state.numberIndex + 1 }}: {{ order.sash_1.name }}
        </p>
        <p>
          Створка № {{ $store.state.numberIndex + 2 }}: {{ order.sash_1.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemComplect",
};
</script>

<style>
.item-complect__title {
  background-color: var(--buttons-color);
}
.item-complect__body {
  display: flex;
  flex-direction: column;
  background-color: var(--main-color);
}
.item-complect__image {
  display: flex;
}
</style>
