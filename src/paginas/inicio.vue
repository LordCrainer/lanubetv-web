<template>
  <div><carousel :items="imagenes"></carousel></div>
</template>
<script>
import carousel from "./../componentes/UI/carousel.vue";
export default {
  components: { carousel },
  data() {
    return {
      imagenes: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ]
    };
  }
};
</script>
