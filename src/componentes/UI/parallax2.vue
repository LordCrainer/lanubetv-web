<template>
  <v-img
    class="parallaxEffect"
    app
    :style="`background-image: url(${items.src}); min-height:${minHeight}vh;`"
  >
    <slot name="contenido"></slot>
  </v-img>
</template>
<script>
export default {
  props: ["items", "minHeight"]
};
</script>

<style scoped>
.parallaxEffect {
  /* Set a specific height */
  min-height: 100vh;
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
