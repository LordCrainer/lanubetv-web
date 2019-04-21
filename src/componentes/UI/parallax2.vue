<template>
  <v-img
    class="parallaxEffect"
    app
    :style="`background-image: url(${items.src}); min-height:${minHeight};`"
  >
    <slot name="contenido"></slot>
  </v-img>
</template>
<script>
export default {
  props: ["items", "minHeight"]
};
</script>
