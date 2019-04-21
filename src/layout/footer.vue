<style scoped>

</style>
<template>
<v-footer dark height="auto">
  <v-card flat tile class="grey darken-3 white--text text-xs-center" width="100%">

    <v-btn v-for="icon in icons" :key="icon" class="mx-3 pa-2 white--text" icon>
      <v-icon size="24px">{{ icon }}</v-icon>
    </v-btn>

    <v-divider></v-divider>
    <v-layout row wrap justify-center fill-height>
      <v-flex xs12>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center>
            <v-flex xs12 sm3 v-for="item in items.rutas" :key="item.titulo">
              <v-layout row wrap justify-center>
                <v-list subheader>
                  <v-subheader class="font-weight-black headline">{{item.titulo}}</v-subheader>
                  <v-list-tile v-for="ruta in item.rutas" :key="ruta.nombre" avatar @click="" :to="ruta.ruta">
                    <v-list-tile-content>
                      <v-list-tile-title v-html="ruta.nombre"  class="text-xs-center text-sm-left" style="color: rgb(240,240,240,0.5);"></v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
    <v-flex xs12>
      <v-container grid-list-xs>
        <v-layout row wrap justify-center>
          <v-flex xs12 sm6 md3 v-for="data in items.datos" :key="data.icon">
            <v-card-text class="text-xs-right pa-0">
              <v-layout row align-center justify-center>
                <v-flex xs3>
                  <v-btn icon color="transparent">
                    <v-icon>{{data.icon}}</v-icon>
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
    </v-flex>
    <v-divider></v-divider>
    <v-card-text class="white--text">
      &copy;2018 — <strong>LANUBETV</strong>
    </v-card-text>
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
