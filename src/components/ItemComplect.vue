<template>
  <div class="item-complect-list">
    <div
      class="item-complect-list__item"
      v-for="(order, index) in $store.state.calculate"
      :key="order.order"
    >
      <h3 class="item-complect__title">Позиция № {{ order.order }}</h3>
      <div class="item-complect__body" style="color: #000">
        <div class="item-complect__image-block">
          <div class="item-complect__image-sash-1">
            <img
              class="item-complect__image"
              :src="order.sash_1.image"
              alt="sash"
            />
            <img
              class="main-calc__window-mosqito_complect"
              v-if="order.sash_1.mosqito"
              src="../assets/images/mosqito.png"
              alt="mosqito net"
            />
          </div>
          <div class="item-complect__image-sash-2">
            <img
              class="item-complect__image"
              v-if="order.sash_2"
              :src="order.sash_2 ? order.sash_2.image : ``"
              alt="sash"
            />
            <img
              class="main-calc__window-mosqito_complect"
              v-if="order.sash_2 && order.sash_2.mosqito"
              src="../assets/images/mosqito.png"
              alt="mosqito net"
            />
          </div>
          <div class="item-complect__image-sash-3">
            <img
              class="item-complect__image"
              v-if="order.sash_3"
              :src="order.sash_3 ? order.sash_3.image : ``"
              alt="sash"
            />
            <img
              class="main-calc__window-mosqito_complect"
              v-if="order.sash_3 && order.sash_3.mosqito"
              src="../assets/images/mosqito.png"
              alt="mosqito net"
            />
          </div>
        </div>
        <p
          class="item-complect__body-item"
          v-if="order.nameBalcon === 'Балконный блок'"
        >
          {{ order.nameBalcon }} {{ order.option.profil }}
        </p>
        <p
          class="item-complect__body-item"
          v-else-if="order.quantitySash === 1"
        >
          {{ order.quantitySash }}-{{ order.nameWindow }}
          {{ order.option.profil }}
        </p>
        <p class="item-complect__body-item" v-else>
          {{ order.quantitySash }}х-{{ order.nameWindow }}
          {{ order.option.profil }}
        </p>
        <p class="item-complect__body-item">
          Ширина окна:
          <span class="item-complect__body-item-result"
            >{{ order.option.widthSash }} мм</span
          >
        </p>
        <p class="item-complect__body-item">
          Высота окна:
          <span class="item-complect__body-item-result"
            >{{ order.option.heightSash }} мм</span
          >
        </p>
        <p class="item-complect__body-item" v-if="order.quantitySash > 0">
          {{ order.sash_1.name }} № 1:
          <span class="item-complect__body-item-result"
            >{{ order.sash_1.nameType
            }}{{ order.sash_1.mosqito ? ", москитная сетка" : "" }}</span
          >
        </p>
        <p class="item-complect__body-item" v-if="order.quantitySash > 1">
          {{ order.sash_2.name }} № 2:
          <span class="item-complect__body-item-result"
            >{{ order.sash_2.nameType
            }}{{ order.sash_2.mosqito ? ", москитная сетка" : "" }}</span
          >
        </p>
        <p class="item-complect__body-item" v-if="order.quantitySash > 2">
          {{ order.sash_3.name }} № 3:
          <span class="item-complect__body-item-result"
            >{{ order.sash_3.nameType
            }}{{ order.sash_3.mosqito ? ", москитная сетка" : "" }}</span
          >
        </p>
        <p class="item-complect__body-item">
          Цвет внутри:
          <span class="item-complect__body-item-result">{{
            order.option.internalLamination
          }}</span>
        </p>
        <p class="item-complect__body-item">
          Цвет снаружи:
          <span class="item-complect__body-item-result">{{
            order.option.externalLamination
          }}</span>
        </p>
        <p class="item-complect__body-item">
          Стеклопакет:
          <span class="item-complect__body-item-result">{{
            order.option.glazedWindows
          }}</span>
        </p>
        <p class="item-complect__body-item">
          Фурнитура:
          <span class="item-complect__body-item-result">{{
            order.option.accessories
          }}</span>
        </p>
        <p class="item-complect__body-item">Подоконник:</p>
        <p class="item-complect__body-item item-complect__body-item_in">
          Ширина:
          <span class="item-complect__body-item-result">{{
            order.option.windowsillWidth
          }}</span>
        </p>
        <p class="item-complect__body-item item-complect__body-item_in">
          Длинна:
          <span class="item-complect__body-item-result">{{
            order.option.windowsillLength
          }}</span>
        </p>
        <p class="item-complect__body-item">Отлив:</p>
        <p class="item-complect__body-item item-complect__body-item_in">
          Ширина:
          <span class="item-complect__body-item-result">{{
            order.option.lowTideWidth
          }}</span>
        </p>
        <p class="item-complect__body-item item-complect__body-item_in">
          Длинна:
          <span class="item-complect__body-item-result">{{
            order.option.lowTideLength
          }}</span>
        </p>
        <p class="item-complect__body-item">Верхний откос:</p>
        <p class="item-complect__body-item item-complect__body-item_in">
          Ширина:
          <span class="item-complect__body-item-result">{{
            order.option.upperSlopeWidth
          }}</span>
        </p>
        <p class="item-complect__body-item item-complect__body-item_in">
          Длинна:
          <span class="item-complect__body-item-result">{{
            order.option.upperSlopeLength
          }}</span>
        </p>
        <p class="item-complect__body-item">Боковые откосы:</p>
        <p class="item-complect__body-item item-complect__body-item_in">
          Ширина:
          <span class="item-complect__body-item-result">{{
            order.option.sideSlopesWidth
          }}</span>
        </p>
        <p class="item-complect__body-item item-complect__body-item_in">
          Длинна:
          <span class="item-complect__body-item-result">{{
            order.option.sideSlopesLength
          }}</span>
        </p>
        <div
          class="item-complect__body-item item-complect__body-amount"
          v-if="$route.path === '/calc-done'"
        >
          Сумма:<span class="item-complect__body-item-result">{{
            $store.state.amount[index]
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemComplect",
  props: ["price"],
};
</script>

<style>
.item-complect-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.item-complect-list__item {
  display: flex;
  flex-direction: column;
  background-color: var(--main-color);
  border-radius: 5px;
  margin-top: 1.8vmax;
  margin-right: 20px;
  width: 32%;
  min-width: 350px;
  max-width: 600px;
}
.item-complect-list__item:last-child {
  margin-top: 1.8vmax;
  margin-right: 0;
}
@media screen and (max-width: 1059px) {
  .item-complect-list__item {
    width: 100%;
    min-width: unset;
    max-width: unset;
    margin-right: unset;
  }
}
.item-complect__title {
  background-color: var(--buttons-color);
  margin: 0 0 20px 0;
  padding: 25px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
}
.item-complect__body {
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
}
.item-complect__body-item {
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  margin: 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.item-complect__body-item_in {
  padding-left: 20px;
}
.item-complect__body-item-result {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: right;
}
.item-complect__image-block {
  display: flex;
  justify-content: center;
  margin: 0 36px 29px 36px;
}
.item-complect__image {
  width: 77.5px;
}
.item-complect__image-sash-1 {
  position: relative;
}
.item-complect__image-sash-2 {
  position: relative;
}
.item-complect__image-sash-3 {
  position: relative;
}
.main-calc__window-mosqito_complect {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 61px;
  height: 114px;
}
.item-complect__body-amount {
  padding: 20px 0 10px 0;
  border-top: 1px solid black;
}
</style>
