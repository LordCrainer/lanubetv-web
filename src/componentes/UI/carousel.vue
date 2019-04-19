<template>
  <v-carousel height="100%" :hide-delimiters="hideDelimiters">
    <v-carousel-item v-for="(item, i) in items" :key="i+item.src" :src="item.src"  style="height:100%;">
      <slot name="contenido" :subItem="item"> </slot>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  props: ["items", "hideDelimiters"],
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
