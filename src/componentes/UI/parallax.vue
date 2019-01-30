<template>
  <v-parallax :src="src" :height="height">
    <v-container fill-height v-show="text">
      <v-layout justify-center align-center>
        <v-flex xs12 sm9>
          <v-card color="rgba(255,255,255, 0.3)" class="elevation-5">
            <v-card-text
              class="black--text font-weight-bold headline pa-5 text-xs-center"
            >
              {{ text }}
            </v-card-text></v-card
          >
        </v-flex>
      </v-layout>
    </v-container>
  </v-parallax>
</template>
<script>
export default {
  props: ["src", "height", "text"]
};
</script>
