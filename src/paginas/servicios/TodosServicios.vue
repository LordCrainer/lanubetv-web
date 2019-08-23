<style scoped>
.TodosServicios {
  height: 100%;
  width: 100%;
}
</style>

<template>
<section class="TodosServicios">
  <v-card v-for="(item, index) in items.servicios" :color="index%2==0? fondo[0]: fondo[1]" :key="item.titulo" class="py-4">
    <v-container grid-list-xs fluid fill-height style="max-width: 1500px;">
      <v-layout row wrap justify-center align-center :reverse="item.reverse">
        <v-flex xs12 sm12 md6>
          <v-container grid-list-xs>
            <v-layout row wrap justify-center align-start fill-height>
              <v-flex xs12 style="max-width: 450px;">
                <v-card-text class="text-xs-center font-weight-black headline" :class="index%2==0? 'white--text': 'black--text'">
                  {{item.titulo}}
                </v-card-text>
                <v-card-text class="text-xs-justify headline" :class="index%2==0? 'white--text': 'black--text'">
                  {{item.resumen}}
                </v-card-text>
                <v-card-text class="text-xs-center">
                  <v-btn color="success" :to="{ path: item.ruta, params: item.prueba}">Más Información</v-btn>
                </v-card-text>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
        <v-flex xs12 sm12 md6>
          <v-card class="pa-4" flat color="transparent">
            <v-layout row wrap justify-center fill-height>
              <carousel :items="item.img" :options="{carousel:{cycle: false, 'hide-delimiters': true}}">
                <!-- <v-img slot="contenido" slot-scope={subItem} :src="subItem.src" contain>

              </v-img> -->
              <v-container grid-list-xs,sm,md,lg,xl slot="contenido" slot-scope="{subItem}" fill-height>
                <v-layout row wrap  justify-center align-center>
                  <v-card-text>
                    <v-img  :src="imagenPath(subItem.src)"></v-img>
                  </v-card-text>
                </v-layout>
              </v-container>
              </carousel>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</section>
</template>

<script>
import windows from './../../componentes/UI/windows.vue'
import carousel from './../../componentes/UI/carousel.vue'
export default {
  components: {
    carousel,
    windows
  },
  props: ['items'],
  data() {
    return {
      option: {
        'hide-delimiters': true,
        'hide-controls': false,
        height: 400
      },
      fondo: ['rgb(124, 124, 124)', 'rgb(233, 233, 233)']
    }
  }
}
</script>
