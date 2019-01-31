<template>
  <v-app class="ma-0 pa-0">
    <parallax :src="items.src" class="pa-0 ma-0">
      <v-container slot="contenido" fluid fill-height class="ma-0 pa-0">
        <v-layout justify-center align-center>
          <v-flex xs12 sm12>
            <v-card hover color="rgba(0,0,0, 0.0)">
              <v-card-text
                class="white--text font-weight-bold headline pa-5 text-xs-center"
              >
                {{ items.text }}
              </v-card-text>
              <v-img></v-img>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </parallax>
  </v-app>
</template>
<script>
import parallax from "./../../componentes/UI/parallax.vue";
export default {
  components: { parallax },
  props: ["items"]
};
</script>
