<template>
  <div class="carousel">
    <VueSlickCarousel v-bind="settings">
      <div class="carousel__block" v-for="type in types" :key="type">
        <img :src="type" alt="type window" />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
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
            breakpoint: 375,
            settings: {
              slidesToShow: 1,
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
};
</script>

<style>
.carousel {
  max-width: 385px;
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
  left: -31px;
}
.slick-next {
  right: -29px;
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
