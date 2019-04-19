<style scoped>
.MiViSer {
  height: 100%;
  min-height: 100vmin;
  width: 100%;
  background-size: cover;
  background-position: bottom left;
  background-color: white;
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
          <v-container grid-list-xl>
            <v-layout row wrap justify-center>
              <v-flex xs12 sm6 md4 d-flex shrink v-for="item in items.data" :key="item.titulo">
                <v-card color="rgba(255,255,255,0.8)" flat style="max-width: 350px;" class="text-xs-center mx-auto ">
                  <v-card-text class="text-xs-center">
                    <v-avatar size="60%" tile>
                      <img :src="item.src" alt="alt">
                    </v-avatar>
                    <v-card-text primary-title class="text-xs-center display-1 ">
                      {{item.titulo}}
                    </v-card-text>
                    <v-card-text class="text-xs-justify  subheading font-weight-bold">
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
