<style scoped>
.Internacional {
  height: 100%;
  width: 100vw;
  background-size: cover;
}
</style>

<template>
<section>
  <v-img :style="`background-image: url(${items.fondo});`" class="Internacional">
    <v-container grid-list-xs fill-height>
      <v-layout row wrap justify-center align-center>
        <v-flex xs12>
          <v-card-text class="text-xs-center font-weight-black pa-4 white--text " style="font-size: 6vh;">
            {{items.titulo}}
          </v-card-text>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xs fill-height class="pa-5" style="max-width: 1200px;">
            <v-layout row wrap justify-space-start align-center>
              <v-flex xs4 sm2 md2 d-flex shrink v-for="(item,indice) in items.canales" :key="item.titulo+indice" class="pa-3">
                <div data-aos="zoom-in-up" data-aos-duration="675" :data-aos-delay="`${indice*150}`">
                  <v-card style="width: 100%; height: 100%; min-width: 60px; min-height:60px; max-height: 90px; max-width: 90px; " class="ma-auto">
                    <v-avatar size="100%" tile>
                      <img :src="item.src" alt="alt">
                    </v-avatar>
                  </v-card>
                </div>
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
