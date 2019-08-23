<template>
<v-carousel style="box-shadow: 0px 0px;" v-bind="options.carousel">
  <v-carousel-item v-for="(item, i) in items" :key="i+item.src"  v-bind="options.carouselItem">
    <slot name="contenido" :subItem="item" v-slot:activator="{ on }"> </slot>
  </v-carousel-item>
  <!-- :src="imagenPath(item.src)" -->
</v-carousel>
</template>
<script>
export default {
  props: {
    items: Array,
    options: {
      type: Object,
      default: function() {
        return {
          carousel:{},
          carouselItem: {}
        }
      }
    }
  },
  data() {
    return {};
  }
};
</script>
