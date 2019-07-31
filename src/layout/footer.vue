<style scoped>



</style>

<template>
<v-footer dark height="auto">
  <v-card flat tile class="grey darken-4 white--text text-xs-center" width="100%" >
    <v-card color="grey darken-3">
      <v-btn v-for="icon in icons" :key="icon" class="mx-3 pa-2 white--text" icon >
        <v-icon size="24px" >{{ icon }}</v-icon>
      </v-btn>
    </v-card>

    <v-divider></v-divider>
    <v-layout row wrap justify-center fill-height>
      <v-flex xs12>
        <v-card color="transparent">
          <v-container grid-list-xl>
            <v-layout row wrap justify-space-around>
              <v-flex xs12 sm4 md2 v-for="item in items.rutas" :key="item.titulo" v-if="item.titulo!='Inicio'">
                <v-layout row wrap justify-center>
                  <v-list dense  style="background-color: transparent" class="text-xs-center">
                    <div class="font-weight-black title white--text text-xs-center py-3">{{item.titulo}}</div>
                    <v-list-tile v-for="subruta in item.subrutas" :key="subruta.nombre" avatar @click="" :to="subruta.ruta" :href="subruta.ruta_externa">
                      <v-list-tile-content>
                          <v-list-tile-title class="text-xs-center text-sm-left body-2" style="color: rgb(250,250,250,0.6);"> {{subruta.nombre}}</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>

          <v-container grid-list-xs>
            <v-layout row wrap justify-center>
              <v-flex xs12 sm6 md3 v-for="data in items.datos" :key="data.icon">
                <v-card-text class="text-xs-right pa-0">
                  <v-layout row align-center justify-center>
                    <v-flex xs3>
                      <v-btn icon color="rgba(96, 96, 96, 0.19)" dark target="_blank" :href="data.dato" >
                        <v-icon >{{data.icon}}</v-icon>
                      </v-btn>
                    </v-flex>
                    <v-flex xs10>
                      <v-card-text class="pa-0 text-xs-left">
                        {{data.title}}
                      </v-card-text>
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>

      </v-flex>
      <v-flex xs12>
        <v-card-text class="white--text">
          &copy;2018 — <strong>LANUBETV</strong>
        </v-card-text>
      </v-flex>
    </v-layout>


  </v-card>
</v-footer>
</template>

<script>
export default {
  props: ['items'],
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ]
  })
};
</script>
