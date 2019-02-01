<template>
  <v-parallax :src="src"> <slot name="contenido"></slot> </v-parallax>
</template>
<script>
export default {
  props: ["src", "height", "text"]
};
</script>
<style scoped>
.v-parallax__image {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(5px);
}
</style>
