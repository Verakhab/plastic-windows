<template>
  <div class="carousel">
    <VueSlickCarousel v-bind="settings">
      <div class="carousel__block" v-for="(type, index) in types" :key="type">
        <img :src="type" alt="type window" @click="choiceConfig(index)" />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import Sash from "../plugins/Sash.js";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Carousel",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        autoplay: true,
        infinite: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 4,
        responsive: [
          {
            breakpoint: 390,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 530,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      },
      types: [
        require("../assets/images/w_one.svg"),
        require("../assets/images/w_two.svg"),
        require("../assets/images/w_three.svg"),
        require("../assets/images/bb_one_right.svg"),
        require("../assets/images/bb_one_left.svg"),
        require("../assets/images/bb_two_right.svg"),
        require("../assets/images/bb_two_left.svg"),
        require("../assets/images/bb_one_rl.svg"),
      ],
    };
  },
  methods: {
    choiceConfig(index) {
      switch (index) {
        case 0:
          this.$store.commit("choiceConfig", [
            new Sash(
              "Створка",
              "Глухое",
              "window",
              false,
              "deaf",
              false,
              require("../assets/images/deaf.jpg")
            ),
          ]);
          break;
        case 1:
          this.$store.commit("choiceConfig", [
            new Sash(
              "Створка",
              "Правое открывание",
              "window",
              "right",
              "rotary",
              true,
              require("../assets/images/Right-opening-window.jpg")
            ),
            new Sash(
              "Створка",
              "Глухое",
              "window",
              false,
              "deaf",
              false,
              require("../assets/images/deaf.jpg")
            ),
          ]);
          break;
        case 2:
          this.$store.commit("choiceConfig", [
            new Sash(
              "Створка",
              "Левое открывание",
              "window",
              "left",
              "swingOut",
              true,
              require("../assets/images/Swing-out-left.jpg")
            ),
            new Sash(
              "Створка",
              "Глухое",
              "window",
              false,
              "deaf",
              false,
              require("../assets/images/deaf.jpg")
            ),
            new Sash(
              "Створка",
              "Правое открывание",
              "window",
              "right",
              "rotary",
              true,
              require("../assets/images/Right-opening-window.jpg")
            ),
          ]);
          break;
        case 3:
          this.$store.commit("choiceConfig", [
            new Sash(
              "Дверь",
              "Левое открывание",
              "door",
              "left",
              "rotary",
              false,
              require("../assets/images/Left-opening-door.jpg")
            ),
            new Sash(
              "Створка",
              "Правое открывание",
              "window",
              "right",
              "rotary",
              true,
              require("../assets/images/Right-opening-window.jpg")
            ),
          ]);
          break;
        case 4:
          this.$store.commit("choiceConfig", [
            new Sash(
              "Створка",
              "Левое открывание",
              "window",
              "left",
              "swingOut",
              false,
              require("../assets/images/Swing-out-left.jpg")
            ),
            new Sash(
              "Дверь",
              "Правое открывание",
              "door",
              "right",
              "rotary",
              false,
              require("../assets/images/Right-opening-door.jpg")
            ),
          ]);
          break;
        case 5:
          this.$store.commit("choiceConfig", [
            new Sash(
              "Дверь",
              "Левое открывание",
              "door",
              "left",
              "rotary",
              false,
              require("../assets/images/Left-opening-door.jpg")
            ),
            new Sash(
              "Створка",
              "Глухое",
              "window",
              false,
              "deaf",
              false,
              require("../assets/images/deaf.jpg")
            ),
            new Sash(
              "Створка",
              "Правое открывание",
              "window",
              "right",
              "rotary",
              true,
              require("../assets/images/Right-opening-window.jpg")
            ),
          ]);
          break;
        case 6:
          this.$store.commit("choiceConfig", [
            new Sash(
              "Створка",
              "Левое открывание",
              "window",
              "right",
              "swingOut",
              true,
              require("../assets/images/Swing-out-right.jpg")
            ),
            new Sash(
              "Створка",
              "Глухое",
              "window",
              false,
              "deaf",
              false,
              require("../assets/images/deaf.jpg")
            ),
            new Sash(
              "Дверь",
              "Правое открывание",
              "door",
              "right",
              "rotary",
              false,
              require("../assets/images/Right-opening-door.jpg")
            ),
          ]);
          break;
        case 7:
          this.$store.commit("choiceConfig", [
            new Sash(
              "Створка",
              "Левое открывание",
              "window",
              "left",
              "rotary",
              true,
              require("../assets/images/Left-opening-window.jpg")
            ),
            new Sash(
              "Дверь",
              "Правое открывание",
              "door",
              "right",
              "rotary",
              false,
              require("../assets/images/Right-opening-door.jpg")
            ),
            new Sash(
              "Створка",
              "Глухое",
              "window",
              false,
              "deaf",
              false,
              require("../assets/images/deaf.jpg")
            ),
          ]);
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style>
.carousel {
  max-width: 1032px;
}
@media screen and (max-width: 1280px) {
  .carousel {
    max-width: 93vw;
  }
}
@media screen and (max-width: 1024px) {
  .carousel {
    max-width: 92vw;
  }
}
@media screen and (max-width: 767px) {
  .carousel {
    max-width: 89vw;
  }
}
@media screen and (max-width: 600px) {
  .carousel {
    max-width: 86vw;
  }
}
@media screen and (max-width: 530px) {
  .carousel {
    max-width: 84vw;
  }
}
@media screen and (max-width: 435px) {
  .carousel {
    max-width: 81vw;
  }
}
@media screen and (max-width: 390px) {
  .carousel {
    max-width: 79vw;
  }
}
@media screen and (max-width: 320px) {
  .carousel {
    max-width: 75vw;
  }
}
.carousel__block {
  display: flex !important;
  justify-content: center;
  cursor: pointer;
}
.slick-prev,
.slick-next {
  top: 24%;
}
.slick-prev {
  left: -29px;
  z-index: 1;
}
@media screen and (max-width: 1280px) {
  .slick-prev {
    left: 0;
  }
}
.slick-next {
  right: -31px;
}
@media screen and (max-width: 1280px) {
  .slick-next {
    right: 10px;
  }
}
.slick-prev::before {
  font-size: 32px;
  opacity: 1;
  color: var(--buttons-color);
  background-image: url("../assets/images/button-carousel-prev.svg");
  background-repeat: no-repeat;
}
.slick-next::before {
  font-size: 32px;
  opacity: 1;
  color: var(--buttons-color);
  background-image: url("../assets/images/button-carousel-next.svg");
  background-repeat: no-repeat;
}
</style>
