<template>
  <form class="form-config" onsubmit="return false">
    <div class="form-config__block-one">
      <div class="form-config__type">
        <h3 class="form-config__type-header form-config__type-header_sash">
          Тип створки
        </h3>
        <div class="form-config__type-window">
          <input
            name="window-door"
            type="radio"
            value="window"
            v-model="sash.typeSash"
            @change="typeWindow"
          />
          <label for="window-door">Окно</label>
        </div>
        <div class="form-config__type-door">
          <input
            name="window-door"
            type="radio"
            value="door"
            v-model="sash.typeSash"
            @change="typeDoor"
          />
          <label for="window-door">Дверь</label>
        </div>
      </div>
      <div
        class="form-config__type form-config__type_open"
        v-if="sash.configSash !== 'deaf'"
      >
        <h3 class="form-config__type-header form-config__type-header_open">
          Тип открывания
        </h3>
        <div class="form-config__type-window form-config__type-window_open">
          <input
            name="left-right"
            type="radio"
            value="right"
            v-model="sash.sideOpen"
            @change="sideRight"
          />
          <label for="left-right">Правое</label>
        </div>
        <div class="form-config__type-door form-config__type-door_open">
          <input
            name="left-right"
            type="radio"
            value="left"
            v-model="sash.sideOpen"
            @change="sideLeft"
          />
          <label for="left-right">Левое</label>
        </div>
      </div>
    </div>
    <div class="form-config__block-second">
      <div
        class="form-config__type form-config__type_config"
        v-if="sash.typeSash === 'window'"
      >
        <h3 class="form-config__type-header form-config__type-header_config">
          Конфигурация створки
        </h3>
        <div class="form-config__type-window form-config__type-window_config">
          <input
            name="type-open"
            type="radio"
            value="deaf"
            v-model="sash.configSash"
            @change="configDeaf"
          />
          <label for="type-open">Глухое</label>
        </div>
        <div class="form-config__type-door form-config__type-door_config">
          <input
            name="type-open"
            type="radio"
            value="rotary"
            v-model="sash.configSash"
            @change="configRotary"
          />
          <label for="type-open">Поворотное</label>
        </div>
        <div class="form-config__type-door form-config__type-door_config">
          <input
            name="type-open"
            type="radio"
            value="swingOut"
            v-model="sash.configSash"
            @change="configSwingOut"
          />
          <label for="type-open">Поворотно-откидное</label>
        </div>
      </div>
      <div
        class="form-config__type form-config__type_mosqito"
        v-if="sash.configSash !== 'deaf' && sash.typeSash !== 'door'"
      >
        <h3 class="form-config__type-header form-config__type-header_mosqito">
          Москитная сетка
        </h3>
        <div class="form-config__type-window form-config__type-window_mosqito">
          <input
            name="mosqito"
            type="checkbox"
            v-model="sash.mosqito"
            @change="changeMosqito"
          />
          <label for="mosqito">Москитная сетка</label>
        </div>
      </div>
    </div>
    <button class="form-config__button" @click="closeForm">
      <p class="form-config__button-text">Применить</p>
    </button>
  </form>
</template>

<script>
import Sash from "../plugins/Sash.js";

export default {
  name: "FormConfig",
  data() {
    return {
      sash: {
        name: this.$store.state.window[this.$store.state.numberIndex].name,
        typeSash:
          this.$store.state.window[this.$store.state.numberIndex].typeSash,
        sideOpen:
          this.$store.state.window[this.$store.state.numberIndex].sideOpen,
        configSash:
          this.$store.state.window[this.$store.state.numberIndex].configSash,
        mosqito:
          this.$store.state.window[this.$store.state.numberIndex].mosqito,
        image: this.$store.state.window[this.$store.state.numberIndex].image,
      },
    };
  },
  methods: {
    typeWindow() {
      this.$store.commit(
        "changeSash",
        new Sash(
          "Глухое",
          "window",
          false,
          "deaf",
          false,
          require("../assets/images/deaf.jpg")
        )
      );
      this.sash.name =
        this.$store.state.window[this.$store.state.numberIndex].name;
      this.sash.typeSash =
        this.$store.state.window[this.$store.state.numberIndex].typeSash;
      this.sash.sideOpen =
        this.$store.state.window[this.$store.state.numberIndex].sideOpen;
      this.sash.configSash =
        this.$store.state.window[this.$store.state.numberIndex].configSash;
      this.sash.mosqito =
        this.$store.state.window[this.$store.state.numberIndex].mosqito;
      this.sash.image =
        this.$store.state.window[this.$store.state.numberIndex].image;
    },
    typeDoor() {
      this.$store.commit(
        "changeSash",
        new Sash(
          "Правое открывание",
          "door",
          "right",
          "rotary",
          false,
          require("../assets/images/Right-opening-door.jpg")
        )
      );
      this.sash.name =
        this.$store.state.window[this.$store.state.numberIndex].name;
      this.sash.typeSash =
        this.$store.state.window[this.$store.state.numberIndex].typeSash;
      this.sash.sideOpen =
        this.$store.state.window[this.$store.state.numberIndex].sideOpen;
      this.sash.configSash =
        this.$store.state.window[this.$store.state.numberIndex].configSash;
      this.sash.mosqito =
        this.$store.state.window[this.$store.state.numberIndex].mosqito;
      this.sash.image =
        this.$store.state.window[this.$store.state.numberIndex].image;
    },
    sideRight() {
      this.sash.typeSash === "window" && this.sash.configSash === "rotary"
        ? this.$store.commit(
            "changeSash",
            new Sash(
              "Правое открывание",
              "window",
              "right",
              "rotary",
              this.sash.mosqito,
              require("../assets/images/Right-opening-window.jpg")
            )
          )
        : this.sash.typeSash === "window" && this.sash.configSash === "swingOut"
        ? this.$store.commit(
            "changeSash",
            new Sash(
              "Поворотно-откидное правое",
              "window",
              "right",
              "swingOut",
              this.sash.mosqito,
              require("../assets/images/Swing-out-right.jpg")
            )
          )
        : this.$store.commit(
            "changeSash",
            new Sash(
              "Правое открывание",
              "door",
              "right",
              "rotary",
              false,
              require("../assets/images/Right-opening-door.jpg")
            )
          );
      this.sash.name =
        this.$store.state.window[this.$store.state.numberIndex].name;
      this.sash.typeSash =
        this.$store.state.window[this.$store.state.numberIndex].typeSash;
      this.sash.sideOpen =
        this.$store.state.window[this.$store.state.numberIndex].sideOpen;
      this.sash.configSash =
        this.$store.state.window[this.$store.state.numberIndex].configSash;
      this.sash.mosqito =
        this.$store.state.window[this.$store.state.numberIndex].mosqito;
      this.sash.image =
        this.$store.state.window[this.$store.state.numberIndex].image;
    },
    sideLeft() {
      this.sash.typeSash === "window" && this.sash.configSash === "rotary"
        ? this.$store.commit(
            "changeSash",
            new Sash(
              "Левое открывание",
              "window",
              "left",
              "rotary",
              this.sash.mosqito,
              require("../assets/images/Left-opening-window.jpg")
            )
          )
        : this.sash.typeSash === "window" && this.sash.configSash === "swingOut"
        ? this.$store.commit(
            "changeSash",
            new Sash(
              "Поворотно-откидное левое",
              "window",
              "left",
              "swingOut",
              this.sash.mosqito,
              require("../assets/images/Swing-out-left.jpg")
            )
          )
        : this.$store.commit(
            "changeSash",
            new Sash(
              "Левое открывание",
              "door",
              "left",
              "rotary",
              false,
              require("../assets/images/Left-opening-door.jpg")
            )
          );
      this.sash.name =
        this.$store.state.window[this.$store.state.numberIndex].name;
      this.sash.typeSash =
        this.$store.state.window[this.$store.state.numberIndex].typeSash;
      this.sash.sideOpen =
        this.$store.state.window[this.$store.state.numberIndex].sideOpen;
      this.sash.configSash =
        this.$store.state.window[this.$store.state.numberIndex].configSash;
      this.sash.mosqito =
        this.$store.state.window[this.$store.state.numberIndex].mosqito;
      this.sash.image =
        this.$store.state.window[this.$store.state.numberIndex].image;
    },
    configDeaf() {
      this.$store.commit(
        "changeSash",
        new Sash(
          "Глухое",
          "window",
          false,
          "deaf",
          false,
          require("../assets/images/deaf.jpg")
        )
      );
      this.sash.name =
        this.$store.state.window[this.$store.state.numberIndex].name;
      this.sash.typeSash =
        this.$store.state.window[this.$store.state.numberIndex].typeSash;
      this.sash.sideOpen =
        this.$store.state.window[this.$store.state.numberIndex].sideOpen;
      this.sash.configSash =
        this.$store.state.window[this.$store.state.numberIndex].configSash;
      this.sash.mosqito =
        this.$store.state.window[this.$store.state.numberIndex].mosqito;
      this.sash.image =
        this.$store.state.window[this.$store.state.numberIndex].image;
    },
    configRotary() {
      this.$store.commit(
        "changeSash",
        new Sash(
          "Правое открывание",
          "window",
          this.sash.sideOpen === "left" ? "left" : "right",
          "rotary",
          this.sash.mosqito,
          require(`../assets/images/${
            this.sash.sideOpen === "left" ? "Left" : "Right"
          }-opening-window.jpg`)
        )
      );
      this.sash.name =
        this.$store.state.window[this.$store.state.numberIndex].name;
      this.sash.typeSash =
        this.$store.state.window[this.$store.state.numberIndex].typeSash;
      this.sash.sideOpen =
        this.$store.state.window[this.$store.state.numberIndex].sideOpen;
      this.sash.configSash =
        this.$store.state.window[this.$store.state.numberIndex].configSash;
      this.sash.mosqito =
        this.$store.state.window[this.$store.state.numberIndex].mosqito;
      this.sash.image =
        this.$store.state.window[this.$store.state.numberIndex].image;
    },
    configSwingOut() {
      this.$store.commit(
        "changeSash",
        new Sash(
          "Поворотно-откидное правое",
          "window",
          this.sash.sideOpen === "left" ? "left" : "right",
          "swingOut",
          this.sash.mosqito,
          require(`../assets/images/Swing-out-${
            this.sash.sideOpen === "left" ? "left" : "right"
          }.jpg`)
        )
      );
      this.sash.name =
        this.$store.state.window[this.$store.state.numberIndex].name;
      this.sash.typeSash =
        this.$store.state.window[this.$store.state.numberIndex].typeSash;
      this.sash.sideOpen =
        this.$store.state.window[this.$store.state.numberIndex].sideOpen;
      this.sash.configSash =
        this.$store.state.window[this.$store.state.numberIndex].configSash;
      this.sash.mosqito =
        this.$store.state.window[this.$store.state.numberIndex].mosqito;
      this.sash.image =
        this.$store.state.window[this.$store.state.numberIndex].image;
    },
    changeMosqito() {
      this.$store.commit("addMosqito", this.$store.state.numberIndex);
      this.$store.state.window[this.$store.state.numberIndex].mosqito;
    },
    closeForm() {
      this.$store.commit("isActive");
    },
  },
};
</script>

<style>
.form-config {
  display: flex;
  flex-direction: column;
  color: black;
  padding: 30px 30px;
}
.form-config__block-one {
  display: flex;
}
.form-config__block-second {
  display: flex;
}
.form-config__type {
  flex: 2 1 auto;
}
.form-config__type_open {
  flex: 1 1 auto;
}
.form-config__type_config {
  flex: 2.4 1 auto;
}
.form-config__type-header_sash {
  margin-top: 0;
}
.form-config__type-header_open {
  margin-top: 0;
}
.form-config__button {
  margin-top: 1.7em;
  background-color: var(--buttons-color);
  border-radius: var(--buttons-radius);
  height: var(--buttons-height);
  border: none;
  color: var(--main-color);
  cursor: pointer;
}
.form-config__button-text {
  padding: 0 10px;
  margin: 0;
}
</style>
