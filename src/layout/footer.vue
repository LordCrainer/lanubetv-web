<style scoped>

</style>
<template>
<v-footer dark height="auto">
  <v-card flat tile class="grey darken-3 white--text text-xs-center" width="100%">

    <v-btn v-for="icon in icons" :key="icon" class="mx-3 pa-4 white--text" icon>
      <v-icon size="24px">{{ icon }}</v-icon>
    </v-btn>

    <v-divider></v-divider>
    <v-layout row wrap justify-center fill-height>
      <v-flex xs12>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center>
            <v-flex sm3 v-for="item in items" :key="item.titulo" >

                <v-list subheader>
                  <v-subheader class="font-weight-black headline">{{item.titulo}}</v-subheader>
                  <v-list-tile v-for="ruta in item.rutas" :key="ruta.nombre" avatar @click="" :to="ruta.ruta">
                    <v-list-tile-content>
                      <v-list-tile-title v-html="ruta.nombre" style="color: rgb(240,240,240,0.5);" ></v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>


            </v-flex>
          </v-layout>
        </v-container>

      </v-flex>
    </v-layout>
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
    ],
    items2: [{
      title: 'Travis Howard',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg'
    }]
  })
};
</script>
