<style scoped>
.MiViSer {
  height: 100%;
  min-height: 100vmin;
  width: 100%;
  background-size: cover;
  background-position: bottom left;
  background-color: white;
  font-size-adjust: auto;
}
</style>

<template>
<section>
  <v-img contain :style="`background-image: url(${items.fondo});`" class="MiViSer">
    <v-container grid-list-xs fill-height>
      <v-layout row wrap justify-center align-start>
        <v-flex xs12>
          <v-card-text class="text-xs-center display-2 font-weight-black pa-0 pt-4" >
            {{items.titulo}}
          </v-card-text>
        </v-flex>
        <v-flex xs12 >
          <v-container grid-list-xl fill-height style="max-width: 1500px;">
            <v-layout row wrap justify-center>
              <v-flex xs12 sm6 md4 d-flex shrink v-for="item in items.data" :key="item.titulo">
                <v-card color="white" flat style=" width: 100%; max-width: 375px;" class="text-xs-center mx-auto ">
                  <v-card-text class="text-xs-center">
                    <v-avatar size="60%" tile>
                      <img :src="item.src" alt="alt">
                    </v-avatar>
                    <v-card-text primary-title class="text-xs-center display-1 font-weight-black">
                      {{item.titulo}}
                    </v-card-text>
                    <v-card-text class="text-xs-justify" style=" font-size: 1.4em;">
                    {{item.text}}
                    </v-card-text>
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
