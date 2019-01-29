<template>
  <div>
    <parallax :src="parallax.init" height="800"></parallax>
    <carousel :items="imagenes" height="350px"></carousel>
    <parallax :src="parallax.second"></parallax>
  </div>
</template>
<script>
import carousel from "./../componentes/UI/carousel.vue";
import parallax from "./../componentes/UI/parallax.vue";
export default {
  components: { carousel, parallax },
  data() {
    return {
      /* {
          src: "https://i.ytimg.com/vi/U_9vIiKHOGg/maxresdefault.jpg"
        },
        {
          src:
            "http://www.gifs-animados.es/wallpapers/wallpapers/nubes/wallpaper-nubes-757190.JPG"
        },*/
      imagenes: [
        {
          src:
            "https://www.sage.com/na/~/media/site/sagena/responsive/images/smallbiz/section-clouds.jpg"
        }
      ],
      parallax: {
        init:
          "https://www.sage.com/na/~/media/site/sagena/responsive/images/smallbiz/section-clouds.jpg",
        second: "https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      }
    };
  }
};
</script>
