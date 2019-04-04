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
          <v-layout row justify-center align-center>
            <v-flex sm3>

                <v-list subheader>
                  <v-subheader class="font-weight-black headline">INICIO</v-subheader>
                  <v-list-tile v-for="item in items" :key="item.title" avatar @click="">

                    <v-list-tile-content>
                      <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>


            </v-flex>
            <v-flex sm3>
              <v-list subheader>
                <v-subheader class="font-weight-black headline">Recent chat</v-subheader>
                <v-list-tile v-for="item in items" :key="item.title" avatar @click="">
                  <v-list-tile-content>
                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-flex>
            <v-flex sm3>
              <v-list subheader>
                <v-subheader class="font-weight-black headline">Recent chat</v-subheader>
                <v-list-tile v-for="item in items" :key="item.title" avatar @click="">
                  <v-list-tile-content>
                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
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
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ],
    items: [{
        active: true,
        title: 'Jason Oner',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
      },
      {
        active: true,
        title: 'Ranee Carlson',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'
      },
      {
        title: 'Cindy Baker',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'
      },
      {
        title: 'Ali Connors',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'
      }
    ],
    items2: [{
      title: 'Travis Howard',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg'
    }]
  })
};
</script>
