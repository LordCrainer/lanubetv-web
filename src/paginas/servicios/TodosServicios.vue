<style scoped>
.TodosServicios {
  height: 100%;
  min-height: 350px;
  width: 100%;
  background-size: cover;
}
</style>

<template>
<section>
  <v-card class="TodosServicios" v-for="item in items.servicios" :color="item.color" :key="item.titulo">
    <v-container grid-list-xs fluid>
      <v-layout row wrap justify-center align-center :reverse="item.reverse" fill-height >
        <v-flex xs12 sm6>
          <v-layout row wrap justify-center>
            <carousel :items="item.img" style="box-shadow: 0px 0px; min-height: 300px;  min-width: 350px; max-width: 450px"  :hideDelimiters="true">
            </carousel>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm6>
          <v-container grid-list-xs>
            <v-layout row wrap justify-center align-start fill-height>
              <v-flex xs12 style="max-width: 450px;" class="pb-5">
                <v-card-text class="text-xs-center font-weight-black  display-1" :class="`${item.font_color}--text`">
                  {{item.titulo}}
                </v-card-text>
                <v-card-text class="text-xs-center font-weight-black subheading" :class="`${item.font_color}--text`">
                  {{item.descripcion}}
                </v-card-text>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>

  </v-card>
</section>
</template>

<script>
import carousel from './../../componentes/UI/carousel.vue'
export default {
  components: {
    carousel
  },
  props: ['items']
}
</script>
