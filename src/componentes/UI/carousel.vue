<template>
  <v-carousel :height="height">
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      <slot name="contenido" :item="item"> </slot>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  props: ["items", "height"],
  data() {
    return {};
  }
};
</script>
