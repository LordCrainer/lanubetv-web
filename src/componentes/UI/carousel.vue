<template>
  <v-carousel :hide-delimiters="hideDelimiters" style="box-shadow: 0px 0px;">
    <v-carousel-item v-for="(item, i) in items" :key="i+item.src" :src="imagenPath(item.src)"  v-bind="options">
      <slot name="contenido" :subItem="item"> </slot>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  props: {items: Array, hideDelimiters: Boolean, options: Object},
  data() {
    return {};
  }
};
</script>
