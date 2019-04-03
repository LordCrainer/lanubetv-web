<style scoped>
.Nosotros {
  height: 100%;
  width: 100%;
  min-height: 500px;
}
</style>

<template>
<section>
  <v-img :src="items.bacgroundSRC" class="Nosotros">
    <v-layout column align-center justify-space-around fill-height>
      <v-flex class="">
        <v-card-text class="display-1 font-weight-bold white--text pt-5">{{ items.titulo }}</v-card-text>
      </v-flex>
      <v-flex>
        <v-layout row wrap align-center justify-center>
          <v-flex xs12 md10>
            <v-card flat color="transparent">
              <v-flex xs12>
                <v-container>
                  <v-layout align-center justify-center>
                    <v-card color="transparent" flat>
                      <v-card-text class="hidden-sm-and-down">
                        <img contain width="100%" :src="items.src1" alt>
                      </v-card-text>
                      <v-card-text class="hidden-md-and-up">
                        <img contain width="100%" style="max-height:600px" :src="items.src" alt>
                      </v-card-text>
                    </v-card>
                  </v-layout>
                </v-container>
              </v-flex>
            </v-card>
          </v-flex>
          <v-flex xs12 md2>
            <v-layout justify-center>
              <v-btn round dark class="mb-4 pa-4 " color="primary" to="/canalestv">CANALES TV</v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex>
        <v-layout row wrap justify-center>
          <v-flex xs12 sm12 md10 class="pa-4">
            <v-layout row justify-center>
              <v-card-title class="headline white--text pa-0">
                Prestamos servicios digitales a través de nuestra plataforma web
              </v-card-title>
            </v-layout>
          </v-flex>
          <v-flex xs12 sm12 md2 class="pa-4">
            <v-layout row justify-center>
              <v-btn round large class="ma-0 " color="primary" target="_blank" href="https://app.lanubetv.net">PLATAFORMA</v-btn>
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
  props: ["items"]
};
</script>
