<style scoped>
.Canales {
  height: 100%;
  min-height: 600px;
  background-color: rgb(255, 255, 255);
}
</style>

<template>
<section>
  <v-layout row wrap justify-center align-center fill-height>
    <v-flex xs12>
      <v-card-text flat class="display-2 font-weight-bold pt-5">
        {{ items.titulo }}
      </v-card-text>
    </v-flex>
    <v-flex xs12>
      <v-layout row justify-center align-center fill-height>
        <v-carousel style="box-shadow: 0px 0px;">
          <v-carousel-item v-for="canales in items.canales" :key="canales.titulo" :src="canales.src" reverse-transition="fade"
      transition="fade">
            <v-container grid-list-xl style="max-width: 800px;" fill-height class="pa-5">
              <v-layout row wrap align-center justify-center class="pb-5 mx-auto">
                <v-flex v-for="(canal,index) in canales.clientes" :key="canal.titulo" xs4 sm4 md3 lg3>
                  <v-hover>
                    <v-card height="100%" width="100%" hover style="min-width: 70px; min-height: 70px;  text-align: center; max-width: 100px; max-height: 100px; border-radius: 50%; " class="ma-auto pa-auto black--text" color="transparent">
                      <v-img contain :src="canal.src" alt="canales" aspect-ratio="1" class="pa-1">
                      </v-img>
                    </v-card>
                  </v-hover>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>
        </v-carousel>

      </v-layout>

    </v-flex>
  </v-layout>
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
