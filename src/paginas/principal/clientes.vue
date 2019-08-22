<style scoped>
.Canales {
  height: 100%;
  min-height: 600px;
  background-color: rgb(255, 255, 255);
}
</style>

<template>
<section id="Clientes" style="background-color: white;">
  <v-card>
    <v-layout row wrap justify-center align-center fill-height>
      <v-flex xs12>
        <v-card-text flat class="display-2 font-weight-bold pt-5">
          {{ items.titulo }}
        </v-card-text>
      </v-flex>
      <v-flex xs12>
        <carousel :items="items.canales" >
          <v-container slot="contenido" slot-scope="{ subItem }" grid-list-xl style="max-width: 800px;" fill-height class="pa-5">
            <v-layout row wrap align-center justify-center class="pb-5 mx-auto">
              <v-flex v-for="(canal,index) in subItem.clientes" :key="canal.titulo" xs4 sm4 md3 lg3>
                <v-card height="100%" width="100%" hover style="min-width: 70px; min-height: 70px;  text-align: center; max-width: 100px; max-height: 100px; border-radius: 50%; " class="ma-auto pa-auto black--text" color="white">
                  <v-img contain :src="imagenPath(canal.src)" alt="canales" aspect-ratio="1" class="pa-1">
                    <template v-slot:placeholder>
                      <v-layout fill-height align-center justify-center ma-0>
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-layout>
                    </template>
                  </v-img>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </carousel>

      </v-flex>
    </v-layout>
  </v-card>
</section>
</template>

<script>
import carousel from "./../../componentes/UI/carousel";

export default {
  props: ["items"],
  components: {
    carousel
  },
  data() {
    return {
      pruebas: [{
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ]
    }
  }
};
</script>
