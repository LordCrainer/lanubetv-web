<template>
  <v-parallax :src="src" :height="height"></v-parallax>
</template>
<script>
export default {
  props: ["src", "height"]
};
</script>
