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
      <div class="">
        <v-card-text class="display-1 font-weight-bold white--text ">{{ items.titulo }}</v-card-text>
      </div>
      <div>
        <v-layout row align-center justify-center>
          <v-flex xs10>
            <v-card flat color="transparent">
              <v-flex xs12>
                <v-container>
                  <v-layout align-center justify-center>
                    <v-card color="transparent" flat>
                      <v-card-text>
                        <img contain width="100%" :src="items.src" alt>
                      </v-card-text>
                    </v-card>
                  </v-layout>
                </v-container>
              </v-flex>
            </v-card>
          </v-flex>
          <v-flex xs2>
            <v-btn round  dark class="mb-4 pa-4 headline" color="primary">CANALES TV</v-btn>
          </v-flex>
        </v-layout>
      </div>
      <div style="width:100%">
        <v-layout row wrap justify-center>
          <v-flex xs12 sm12 md8>
            <v-layout row justify-center>
              <v-card-title class="headline white--text pa-0">
                Prestamos servicios digitales a través de nuestra plataforma web
              </v-card-title>
            </v-layout>
          </v-flex>
          <v-flex xs12 sm12 md2>
            <v-layout row justify-center>
              <v-btn round large class="ma-0 headline" color="primary">PLATAFORMA</v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
      </div>

    </v-layout>


  </v-img>
</section>
</template>
<script>
export default {
  props: ["items"]
};
</script>
