<template>
<section class="Contactar">
  <v-img alt="ubicacion de LANUBETV" class="mapa_ubicacion" :style="`background-image: url(${items.src}); `">
    <v-layout wrap row fill-height>
      <v-flex sm6 class="py-3">
        <v-layout fill-height justify-center align-center>

          <v-avatar size="150" class="elevation-5" color="rgba(255, 255, 255, 0.5)" @click="" ripple style="border:7px solid red;">
            <img :src="items.icono.src" alt="alt" class="pa-2" >
          </v-avatar>
        </v-layout>
      </v-flex>
      <v-flex sm6 style="background-color: rgba(48,48,48,0.75); color: white;" class="py-3">
        <v-container grid-list-xs,sm,md,lg,xl fill-height>
          <v-layout wrap row justify-center align-center>
            <v-flex xs12 v-for="(dato,indice) in items.datos" :key="indice" class="py-2">
              <v-layout wrap row align-center justify-center>
                <v-btn fab dark color="white">
                  <img :src="dato.src" alt="" class="pa-1">
                </v-btn>

                <v-flex xs12 sm9>
                  <h2 class="text-xs-center text-sm-left">{{dato.descripcion}}</h2>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-img>
</section>
</template>
<script>
export default {
  props: ["items", "min-height"]
};
</script>
<style scoped>
.mapa_ubicacion {
  height: 100%;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
</style>
