<template>
<section class="Contactar">
  <v-img alt="ubicacion de LANUBETV" class="mapa_ubicacion" :style="`background-image: url(${imagenPath(items.src)}); `">
    <v-layout wrap row fill-height>
      <v-flex sm6 class="py-3">
        <v-layout fill-height justify-center align-center>
          <div data-aos="zoom-in">
            <v-avatar size="150" class="elevation-5" color="rgba(255, 255, 255, 0.5)" @click="" ripple style="border:7px solid red;">
              <img :src="imagenPath(items.icono.src)" alt="alt" class="pa-2">
            </v-avatar>
          </div>
        </v-layout>
      </v-flex>
      <v-flex sm6 style="background-color: rgba(48,48,48,0.75); color: white;" class="py-3">
        <v-container grid-list-xs,sm,md,lg,xl fill-height>
          <v-layout wrap row justify-center align-center>
            <v-flex xs12 v-for="(dato,indice) in items.datos" :key="indice" class="py-2">
              <div data-aos="fade-down" data-aos-offset="0">
                <v-layout wrap row align-center justify-center>
                  <v-btn fab dark medium color="white" :href="dato.dato" target="_blank">
                    <v-avatar size="50" tile>
                      <img :src="imagenPath(dato.src)" alt="alt">
                    </v-avatar>
                  </v-btn>
                  <v-flex xs12 sm9>
                    <h2 class="text-xs-center text-sm-left">{{dato.descripcion}}</h2>
                  </v-flex>
                </v-layout>
              </div>
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
  width: 100%;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
</style>
