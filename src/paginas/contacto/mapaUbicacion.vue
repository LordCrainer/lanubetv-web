<template >
<section>
  <v-img :style="`background-image: url(${items.fondo});`" class="mapa_ubicacion">
    <v-container grid-list-xs fill-height>
      <v-layout row wrap justify-center align-center>
        <v-flex xs12>
          <v-card-text class="text-xs-center display-2 font-weight-black pa-4 white--text">
            {{items.titulo}}
          </v-card-text>
        </v-flex>
        <v-flex xs12>
          <v-layout row wrap justify-start>
            <v-flex xs12 sm10 md9>
              <v-card color="rgba(48,48, 48, 0.5)" class="pa-4">
                <v-img cover style="min-height: 400px; min-width: 400px; " :src="items.mapa.src"></v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-img>
</section>
</template>

<script>
export default {
  props: ['items']
}
</script>

<style scoped>
.mapa_ubicacion {
  height: 100%;
  width: 100%;
  min-height: 100vmin;
  background-size: cover;
  background-position: bottom right;
}
</style>
