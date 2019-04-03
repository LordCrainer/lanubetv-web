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
          <v-layout wrap row fill-height justify-center align-center>
            <v-flex xs12>
              <div style="display: inline-block">
                <div>
                  <v-btn fab dark color="blue">
                    <v-icon>phone_android</v-icon>
                  </v-btn>
                </div>
                <div>
                  <h2>09998445</h2>
                </div>
              </div>
            </v-flex>
            <v-flex xs12>
              <v-layout wrap row align-center>
                <v-flex xs12 sm3>
                  <v-btn fab dark color="blue">
                    <v-icon>contact_phone</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex xs12 sm9>
                  <h2>099999999</h2>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs12>
              <v-layout wrap row align-center>
                <v-flex xs12 sm3>
                  <v-btn fab dark color="blue">
                    <v-icon>location_on</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex xs12 sm9>
                  <h2>asdasdas</h2>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs12>
              <v-layout wrap row align-center>
                <v-flex xs12 sm3>
                  <v-btn fab dark color="blue">
                    <v-icon>email</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex xs12 sm9>
                  <h2>asdasdas</h2>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
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
