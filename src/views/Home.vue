<template>
  <div class="home">
    <MainLayout />
  </div>
</template>

<script>
import MainLayout from "@/layouts/MainLayout.vue";

export default {
  name: "Home",
  components: {
    MainLayout,
  },
};
</script>

<style>
.home {
  min-height: 85vh;
  display: flex;
  align-items: center;
}
</style>
