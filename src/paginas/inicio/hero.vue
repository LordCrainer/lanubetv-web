<template>
  <section>
    <v-img class="parallax" app :style="`background-image: url(${items.src});`">
      <v-layout
        pa-2
        column
        fill-height
        justify-center
        aling-center
        class="white--text"
      >
        <v-flex shrink>
          <v-card hover color="rgba(0,0,0, 0.0)">
            <v-card-text
              class="white--text font-weight-bold headline pa-5 text-xs-justify"
            >
              {{ items.text }}
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-img>
    <!-- <parallax :src="items.src" class="parallax_conf"> </parallax> -->
  </section>
</template>
<script>
import parallax from "./../../componentes/UI/parallax.vue";
export default {
  components: { parallax },
  props: ["items"]
};
</script>
<style>
.parallax {
  background-size: cover;
  /* Set a specific height */
  min-height: 100vh;
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
