<template>
  <section>
    <v-img
      alt="ubicacion de LANUBETV"
      class="mapa_ubicacion"
      :style="`background-image: url(${items.src}); `"
    >
      <v-layout row fill-height>
        <v-flex sm6>
          <v-layout fill-height justify-center align-center>
            <v-btn color="indigo" dark>Contactanos</v-btn>
          </v-layout>
        </v-flex>
        <v-flex sm6>
          <v-btn color="indigo" dark></v-btn>
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
  height: 75vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
}
</style>
