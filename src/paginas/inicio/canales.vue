<template>
<section class="Canales">
  <v-layout column>
    <v-flex xs12>
      <v-card-text class="display-1 font-weight-bold pa-4 white--text">
        {{ items.titulo }}
      </v-card-text>
    </v-flex>
    <v-flex xs12>
      <carousel :items="items.canales" height="100%">
        <v-container grid-list-md slot="contenido" slot-scope="canales" class="pa-5 pb-5 mx-auto">
          <v-layout row wrap fill-height align-center justify-center class="pa-3 mx-auto">

              <v-flex v-for="(canales,index) in canales.item.clientes" :key="canales.titulo+index" xs4 sm4 md3 lg3 >
                <v-card height="100%" width="100%" hover style="min-width: 90px;  text-align: center; max-width: 125px; max-height: 125px; border-radius: 50%; " aspect-ratio="1" class="ma-auto pa-auto" color="transparent">
                  <v-img contain :src="canales.src" alt="canales" height="inherit" aspect-ratio="1" class="pa-0 mx-auto">
                  </v-img>
                </v-card>
              </v-flex>
            </v-layout>
        </v-container>
      </carousel>
    </v-flex>
  </v-layout>
  </v-container>

</section>
</template>
<script>
import carousel from "./../../componentes/UI/carousel";
export default {
  props: ["items"],
  components: {
    carousel
  }
};
</script>
<style scoped>
.Canales {
  height: 100%;
  background-color: rgb(48, 48, 48);
}
</style>
