<style lang="css" scoped>

.MiViSer {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: bottom left;
}

</style>

<template lang="html">

<section>
    <v-img contain :style="`background-image: url(${items.fondo});`" class="MiViSer">
        <v-container grid-list-xs fill-height>
            <v-layout row wrap justify-center align-start>
                <v-flex xs12>
                    <v-card-text class="text-xs-center display-2 font-weight-black pa-4">
                        {{items.titulo}}
                    </v-card-text>
                </v-flex>
                <v-flex xs12>
<v-container grid-list-xs>
  <v-layout row wrap justify-center >
      <v-flex xs12 sm4 d-flex shrink v-for="item in items.data" :key="item.titulo">
          <v-card style="max-width: 350px;">
            <v-avatar size="40%" tile>
                <img :src="item.src" alt="alt">
            </v-avatar>
              <v-card-text primary-title class="text-xs-center display-1 ">
                  {{item.titulo}}
              </v-card-text>
              <v-card-text class="text-xs-justify headline ">
                  {{item.text}}
              </v-card-text>
          </v-card>

      </v-flex>
  </v-layout>
</v-container>


                </v-flex>
            </v-layout>
        </v-container>
    </v-img>
</section>

</template>

<script>
export default {
  props: ['items']
}
</script>
