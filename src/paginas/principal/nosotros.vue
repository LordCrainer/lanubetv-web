<style scoped>
.Nosotros {
  height: 100%;
  width: 100%;
  min-height: 100vmin;
  background-size: cover;
  background-attachment: fixed;
}
</style>

<template>
<section>
  <v-img :style="{ backgroundImage: `url(${imagenPath(items.backgroundSRC)})` }" class="Nosotros">
    <v-layout column align-center justify-space-around fill-height>
      <v-flex class="">
        <v-card-text class="display-2 font-weight-bold white--text pt-5">{{ items.titulo }}</v-card-text>
      </v-flex>
      <v-flex>
        <v-layout row wrap align-center justify-center>
          <v-flex xs12 md10>
            <v-card flat color="transparent">
              <v-flex xs12>
                <v-layout align-center justify-center>
                  <v-card color="transparent" flat>
                    <v-card-text class="hidden-sm-and-down">
                      <img contain width="100%" height="450vh" :src="imagenPath(items.src1)" alt>
                    </v-card-text>
                    <v-card-text class="hidden-md-and-up">
                      <img contain width="100%" style="max-height:600px" :src="imagenPath(items.src)" alt>
                    </v-card-text>
                  </v-card>
                </v-layout>
              </v-flex>
            </v-card>
          </v-flex>
          <v-flex xs12 md2>
            <v-layout justify-center fill-height>
              <v-btn round dark class="pa-4 font-weight-black subheading" color="primary" to="/canalestv">CANALES TV</v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex class="pt-4">
        <v-layout row wrap justify-center align-center>
          <v-flex xs12 sm12 md10 class="">
            <v-layout row align-center>
              <v-card-text class="headline white--text ma-0 pa-2 font-weight-black ">
                Prestamos servicios digitales a través de nuestra plataforma web
              </v-card-text>
            </v-layout>
          </v-flex>
          <v-flex xs12 sm12 md2 class="pa-4">
            <v-layout row justify-center>
              <v-btn round large class="ma-0  font-weight-black subheading" color="primary" target="_blank" href="https://app.lanubetv.net"> PLATAFORMA</v-btn>
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
  props: ["items"],
};
</script>
