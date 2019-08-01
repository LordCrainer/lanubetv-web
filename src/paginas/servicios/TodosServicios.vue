<style scoped>
.TodosServicios {
  height: 100%;
  width: 100%;
}
</style>

<template>
<section class="TodosServicios">
  <v-card  v-for="item in items.servicios" :color="item.color" :key="item.titulo" class="py-4" >
    <v-container grid-list-xs fluid fill-height style="max-width: 1500px;">
      <v-layout row wrap justify-center align-center :reverse="item.reverse" >
        <v-flex xs12 sm12 md6>
          <v-container grid-list-xs>
            <v-layout row wrap justify-center align-start fill-height>
              <v-flex xs12 style="max-width: 450px;">
                <v-card-text class="text-xs-center font-weight-black headline" :class="`${item.font_color}--text`">
                  {{item.titulo}}
                </v-card-text>
                <v-card-text class="text-xs-justify subheading" :class="`${item.font_color}--text`">
                  {{item.resumen}}
                </v-card-text>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
        <v-flex xs12 sm12 md6 >
          <v-card class="pa-4" flat color="transparent">
            <v-layout row wrap justify-center fill-height >
              <windows :items="item.img"></windows>
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
    carousel, windows
  },
  props: ['items'],
  data(){
    return{
      option: {
        'hide-delimiters': true,
        'hide-controls': false,
        height: 400
      }
    }
  }
}
</script>
