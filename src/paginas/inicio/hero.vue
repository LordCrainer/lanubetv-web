<template>
  <section>
    <v-img
      contain
      class="parallaxEffect"
      
      :style="`background-image: url(${items.src});`"
    >
      <v-layout
        pt-4
        fill-height
        justify-center
        align-center
        class="white--text"
      >
        <v-flex xs10 sm10>
          <v-card hover color="rgba(255,255,255, 0.3)">
            <v-card-text
              class="black--text font-weight-bold headline mt-3 pa-5 text-xs-justify text-xl-center"
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

