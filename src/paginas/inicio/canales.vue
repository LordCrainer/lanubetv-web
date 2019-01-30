<template>
  <carousel :items="items">
    <v-container slot="contenido" fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm6>
          <v-card>
            <v-card-text class="text-xs-center"> probando</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </carousel>
</template>
<script>
import carousel from "./../../componentes/UI/carousel";
export default {
  props: ["items"],
  components: { carousel }
};
</script>
