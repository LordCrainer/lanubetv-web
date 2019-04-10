<template>
  <v-carousel height="100%">
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" style="height:100%;">
      <slot name="contenido" :subItem="item"> </slot>
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
.v-carousel__item{
  height:100%;
}
</style>
