<style scoped>
.TodosServicios {
  height: 100%;
  width: 100%;
  background-size: cover;
}
</style>

<template>
<section>
  <v-card class="TodosServicios" v-for="item in items.servicios"  :color="item.color" :key="item.titulo">
    <v-layout row wrap :reverse="item.reverse">
      <v-flex xs5>
        <v-layout row wrap>
          <v-card-text class="pa-5" style="height:350px;">
            <v-img :src="item.img[0].src" contain  height="100%" width="100%"></v-img>
          </v-card-text>
        </v-layout>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs6>
        <v-container grid-list-xs>
          <v-layout row wrap justify-center align-start fill-height>
            <v-flex xs12>
              <v-card-text class="text-xs-center font-weight-black pt-5 display-2" :class="`${item.font_color}--text`">
                {{item.titulo}}
              </v-card-text>
              <v-card-text class="text-xs-center font-weight-black pa-4 " :class="`${item.font_color}--text`">
                {{item.descripcion}}
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-container>

      </v-flex>
    </v-layout>
  </v-card>
</section>
</template>

<script>
export default {
  props: ['items']
}
</script>
