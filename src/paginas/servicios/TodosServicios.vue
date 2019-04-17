<style scoped>
.TodosServicios {
  height: 100%;
  width: 100%;
  background-size: cover;
}
</style>

<template>
<section>
  <v-card class="TodosServicios" :color="items.servicios[0].color">
    <v-layout row wrap>
      <v-flex xs6>
        <v-layout row wrap>
          <v-card-text class="pa-5">
            <v-img :src="items.servicios[0].img[0].src" aspect-ratio="2" height="250"></v-img>
          </v-card-text>
        </v-layout>
      </v-flex>
      <v-flex xs6>
        <v-layout row wrap justify-center align-center fill-height>
          <v-flex xs12>
            <v-card-text class="text-xs-center font-weight-black pa-4 white--text display-2">
              {{items.titulo}}
            </v-card-text>
            <v-card-text class="text-xs-center font-weight-black pa-4 white--text">
              {{items.servicios[0].descripcion}}
            </v-card-text>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</section>
</template>

<script>
export default {
  props: ['items']
}
</script>
