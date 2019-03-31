<template>
<section>
  <v-img :src="items.src" class="Hero">
    <v-container fill-height grid-list-xl>
      <v-layout pt-4 justify-end align-center class="white--text">
        <v-flex xs12 sm8 md6>
          <v-card hover color="rgba(255,255,255, 0.9)">
            <v-card-text class="black--text font-weight-bold headline mt-3 pa-5 text-xs-justify text-xl-center">
              {{ items.text }}
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </v-img>
  <!-- <parallax :src="items.src" class="parallax_conf"> </parallax> -->
</section>
</template>
<script>
import parallax from "./../../componentes/UI/parallax.vue";
export default {
  components: {
    parallax
  },
  props: ["items"]
};
</script>
<style scoped>
.Hero {
  height: 100%;
  width: 100%;
  min-height: 500px;
}

/*:style="`background-image: url(${items.src}); background-size: cover; `"*/
</style>
