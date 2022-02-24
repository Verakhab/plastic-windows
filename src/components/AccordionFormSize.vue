<template>
  <div class="form-wrapper">
    <form v-if="item.id === 1" class="form-size">
      <input
        class="form-size-input form-size-input_wight"
        name="widhtSash"
        type="number"
        v-model="option.widthSash"
        placeholder="Ширина, мм"
      />
      <span
        class="form-size__error"
        :class="{ 'form-size__error_active': !option.widthSash }"
        >Поле должно быть заполнено</span
      >
      <input
        class="form-size-input form-size-input_height"
        name="heightSash"
        type="number"
        v-model="option.heightSash"
        placeholder="Высота, мм"
      />
      <span
        class="form-size__error"
        :class="{ 'form-size__error_active': !option.heightSash }"
        >Поле должно быть заполнено</span
      >
    </form>
    <form v-if="item.id === 2" class="form-system">
      <div class="form-system__column-one">
        <label class="title-select" for="profil">Профиль</label>
        <v-select
          class="form-system__select"
          placeholder="Выберите значение"
          name="profil"
          v-model="option.profil"
          :options="profilOption"
        >
          <template #open-indicator="{ attributes }">
            <span v-bind="attributes"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="5"
                viewBox="0 0 9 5"
                fill="none"
              >
                <path d="M0 0H9L4.5 5L0 0Z" fill="#9D9D9D" /></svg
            ></span>
          </template>
        </v-select>
        <span
          class="form-size__error"
          :class="{ 'form-size__error_active': !option.profil }"
          >Поле должно быть заполнено</span
        >
        <label class="title-select" for="accessories">Фурнитура</label>
        <v-select
          class="form-system__select"
          placeholder="Выберите значение"
          name="accessories"
          v-model="option.accessories"
          :options="profilOption"
        >
          <template #open-indicator="{ attributes }">
            <span v-bind="attributes"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="5"
                viewBox="0 0 9 5"
                fill="none"
              >
                <path d="M0 0H9L4.5 5L0 0Z" fill="#9D9D9D" /></svg
            ></span>
          </template>
        </v-select>
        <span
          class="form-size__error"
          :class="{ 'form-size__error_active': !option.accessories }"
          >Поле должно быть заполнено</span
        >
        <label class="title-select" for="externalLamination"
          >Внешняя ламинация</label
        >
        <v-select
          class="form-system__select form-system__select_last"
          placeholder="Выберите значение"
          name="externalLamination"
          v-model="option.externalLamination"
          :options="profilOption"
        >
          <template #open-indicator="{ attributes }">
            <span v-bind="attributes"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="5"
                viewBox="0 0 9 5"
                fill="none"
              >
                <path d="M0 0H9L4.5 5L0 0Z" fill="#9D9D9D" /></svg
            ></span>
          </template>
        </v-select>
        <span
          class="form-size__error"
          :class="{ 'form-size__error_active': !option.externalLamination }"
          >Поле должно быть заполнено</span
        >
      </div>
      <div class="form-system__spacer"></div>
      <div class="form-system__column-second">
        <label class="title-select" for="glazedWindows">Стеклопакет</label>
        <v-select
          class="form-system__select"
          placeholder="Выберите значение"
          name="glazedWindows"
          v-model="option.glazedWindows"
          :options="profilOption"
        >
          <template #open-indicator="{ attributes }">
            <span v-bind="attributes"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="5"
                viewBox="0 0 9 5"
                fill="none"
              >
                <path d="M0 0H9L4.5 5L0 0Z" fill="#9D9D9D" /></svg
            ></span>
          </template>
        </v-select>
        <span
          class="form-size__error"
          :class="{ 'form-size__error_active': !option.glazedWindows }"
          >Поле должно быть заполнено</span
        >
        <label class="title-select" for="internalLamination"
          >Внутренняя ламинация</label
        >
        <v-select
          class="form-system__select"
          placeholder="Выберите значение"
          name="internalLamination"
          v-model="option.internalLamination"
          :options="profilOption"
        >
          <template #open-indicator="{ attributes }">
            <span v-bind="attributes"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="5"
                viewBox="0 0 9 5"
                fill="none"
              >
                <path d="M0 0H9L4.5 5L0 0Z" fill="#9D9D9D" /></svg
            ></span>
          </template>
        </v-select>
        <span
          class="form-size__error"
          :class="{ 'form-size__error_active': !option.internalLamination }"
          >Поле должно быть заполнено</span
        >
      </div>
    </form>
    <form v-if="item.id === 3" class="form-system form-system_complect">
      <div class="form-system__column-one">
        <h4 class="form-system__title-select">Подоконник</h4>
        <label class="title-select" for="windowsillWidth">Ширина, мм</label>
        <v-select
          class="form-system__select"
          placeholder="Выберите значение"
          name="windowsillWidth"
          v-model="option.windowsillWidth"
          :options="profilOption"
        >
          <template #open-indicator="{ attributes }">
            <span v-bind="attributes"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="5"
                viewBox="0 0 9 5"
                fill="none"
              >
                <path d="M0 0H9L4.5 5L0 0Z" fill="#9D9D9D" /></svg
            ></span>
          </template>
        </v-select>
        <span
          class="form-size__error"
          :class="{ 'form-size__error_active': !option.windowsillWidth }"
          >Поле должно быть заполнено</span
        >
        <label class="title-select" for="windowsillLength">Длина, мм</label>
        <v-select
          class="form-system__select"
          placeholder="Выберите значение"
          name="windowsillLength"
          v-model="option.windowsillLength"
          :options="profilOption"
        >
          <template #open-indicator="{ attributes }">
            <span v-bind="attributes"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="5"
                viewBox="0 0 9 5"
                fill="none"
              >
                <path d="M0 0H9L4.5 5L0 0Z" fill="#9D9D9D" /></svg
            ></span>
          </template>
        </v-select>
        <span
          class="form-size__error"
          :class="{ 'form-size__error_active': !option.windowsillLength }"
          >Поле должно быть заполнено</span
        >
        <h4 class="form-system__title-select form-system__title-select_second">
          Верхний откос
        </h4>
        <label class="title-select" for="upperSlopeWidth">Ширина, мм</label>
        <v-select
          class="form-system__select form-system__select_pre-last"
          placeholder="Выберите значение"
          name="upperSlopeWidth"
          v-model="option.upperSlopeWidth"
          :options="profilOption"
        >
          <template #open-indicator="{ attributes }">
            <span v-bind="attributes"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="5"
                viewBox="0 0 9 5"
                fill="none"
              >
                <path d="M0 0H9L4.5 5L0 0Z" fill="#9D9D9D" /></svg
            ></span>
          </template>
        </v-select>
        <span
          class="form-size__error"
          :class="{ 'form-size__error_active': !option.upperSlopeWidth }"
          >Поле должно быть заполнено</span
        >
        <label class="title-select" for="upperSlopeLength">Длина, мм</label>
        <v-select
          class="form-system__select form-system__select_last"
          placeholder="Выберите значение"
          name="upperSlopeLength"
          v-model="option.upperSlopeLength"
          :options="profilOption"
        >
          <template #open-indicator="{ attributes }">
            <span v-bind="attributes"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="5"
                viewBox="0 0 9 5"
                fill="none"
              >
                <path d="M0 0H9L4.5 5L0 0Z" fill="#9D9D9D" /></svg
            ></span>
          </template>
        </v-select>
        <span
          class="form-size__error"
          :class="{ 'form-size__error_active': !option.upperSlopeLength }"
          >Поле должно быть заполнено</span
        >
      </div>
      <div class="form-system__spacer"></div>
      <div class="form-system__column-second">
        <h4 class="form-system__title-select">Отлив</h4>
        <label class="title-select" for="lowTideWidth">Ширина, мм</label>
        <v-select
          class="form-system__select"
          placeholder="Выберите значение"
          name="lowTideWidth"
          v-model="option.lowTideWidth"
          :options="profilOption"
        >
          <template #open-indicator="{ attributes }">
            <span v-bind="attributes"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="5"
                viewBox="0 0 9 5"
                fill="none"
              >
                <path d="M0 0H9L4.5 5L0 0Z" fill="#9D9D9D" /></svg
            ></span>
          </template>
        </v-select>
        <span
          class="form-size__error"
          :class="{ 'form-size__error_active': !option.lowTideWidth }"
          >Поле должно быть заполнено</span
        >
        <label class="title-select" for="lowTideLength">Длина, мм</label>
        <v-select
          class="form-system__select"
          placeholder="Выберите значение"
          name="lowTideLength"
          v-model="option.lowTideLength"
          :options="profilOption"
        >
          <template #open-indicator="{ attributes }">
            <span v-bind="attributes"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="5"
                viewBox="0 0 9 5"
                fill="none"
              >
                <path d="M0 0H9L4.5 5L0 0Z" fill="#9D9D9D" /></svg
            ></span>
          </template>
        </v-select>
        <span
          class="form-size__error"
          :class="{ 'form-size__error_active': !option.lowTideLength }"
          >Поле должно быть заполнено</span
        >
        <h4 class="form-system__title-select form-system__title-select_second">
          Боковые откосы
        </h4>
        <label class="title-select" for="sideSlopesWidth">Ширина, мм</label>
        <v-select
          class="form-system__select form-system__select_pre-last"
          placeholder="Выберите значение"
          name="sideSlopesWidth"
          v-model="option.sideSlopesWidth"
          :options="profilOption"
        >
          <template #open-indicator="{ attributes }">
            <span v-bind="attributes"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="5"
                viewBox="0 0 9 5"
                fill="none"
              >
                <path d="M0 0H9L4.5 5L0 0Z" fill="#9D9D9D" /></svg
            ></span>
          </template>
        </v-select>
        <span
          class="form-size__error"
          :class="{ 'form-size__error_active': !option.sideSlopesWidth }"
          >Поле должно быть заполнено</span
        >
        <label class="title-select" for="sideSlopesLength">Длина, мм</label>
        <v-select
          class="form-system__select form-system__select_last"
          placeholder="Выберите значение"
          name="sideSlopesLength"
          v-model="option.sideSlopesLength"
          :options="profilOption"
        >
          <template #open-indicator="{ attributes }">
            <span v-bind="attributes"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="5"
                viewBox="0 0 9 5"
                fill="none"
              >
                <path d="M0 0H9L4.5 5L0 0Z" fill="#9D9D9D" /></svg
            ></span>
          </template>
        </v-select>
        <span
          class="form-size__error"
          :class="{ 'form-size__error_active': !option.sideSlopesLength }"
          >Поле должно быть заполнено</span
        >
      </div>
    </form>
  </div>
</template>

<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default {
  name: "AccordionFormSize",
  components: {
    vSelect,
  },
  props: ["item"],
  data() {
    return {
      profilOption: ["1", "2", "3"],
    };
  },
  computed: {
    option: {
      get() {
        return this.$store.state.option;
      },
      set(value) {
        console.log(value);
        this.$store.commit("updateOption", value);
      },
    },
  },
  // methods: {

  // },
};
</script>

<style>
.form-size {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--main-color);
}
.form-system {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: var(--main-color);
}
.form-system__column-one {
  flex: 1 1 6vmax;
}
.form-system__spacer {
  flex: 0.3 1 1vmax;
}
.form-system__column-second {
  flex: 1 1 6vmax;
}
.form-system__title-select {
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  margin: 13px 0 14px 0;
  padding-bottom: 5px;
  color: var(--auxiliary-color);
  border-bottom: 2px solid var(--auxiliary-color);
}
.form-system__title-select_second {
  margin: 25px 0 14px 0;
}
.form-size__error {
  display: none;
  font-size: 15px;
  color: var(--errors-color);
}
.form-size__error_active {
  display: flex;
}
.form-size-input {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--line-color);
  width: 87%;
  text-align: center;
  padding-top: 18px;
  color: var(--main-color);
}
.form-size-input_wight {
  margin-bottom: 6px;
}
.form-size-input_height {
  padding-top: 18px;
  margin: 6px 0;
}
.title-select {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  color: var(--auxiliary-color);
}
.form-system__select.v-select {
  padding-bottom: 14px;
  margin-bottom: 15px;
  border-bottom: 1px solid var(--auxiliary-color);
}
.form-system__select.form-system__select_pre-last.v-select {
  margin-bottom: 15px;
}
.form-system__select.form-system__select_last.v-select {
  margin-bottom: 6px;
}
.form-system__select.vs--searchable .vs__dropdown-toggle {
  cursor: pointer;
  padding-bottom: 1px;
}
.form-system__select .vs__search {
  cursor: pointer;
}
.form-system__select .vs__dropdown-menu {
  background: var(--auxiliary-color);
}
.form-system__select .vs__search::placeholder {
  color: var(--auxiliary-color);
}
.form-system__select .vs__selected {
  color: var(--main-color);
}
.form-system__select .vs__clear {
  display: none;
}
</style>
