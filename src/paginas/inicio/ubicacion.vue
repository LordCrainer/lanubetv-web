<template>
  <section>
      <v-layout>
        <v-flex> </v-flex>
        <v-flex>
          <v-img
            alt="ubicacion de LANUBETV"
            class="mapa_ubicacion"
            :style="`background-image: url(${items.src});`"
          >
          </v-img>
        </v-flex>
      </v-layout>
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
}
</style>
