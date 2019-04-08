<template>
  <v-carousel  style="height: 100%;">
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" style="height: 100%;">
      <slot name="contenido" :item="item" style="height: 100%;"> </slot>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  props: ["items"],
  data() {
    return {};
  }
};
</script>
<style scoped>
.v-window .v-carousel{
  height: 100%;
}
.v-responsive .v-image .v-carousel__item{
  height: 100%;
}
.v-window__container, .v-window__container div,
.v-window-item, .v-window .v-carousel {
  height: 100%;
}
</style>
