<template>
<section>
  <v-img  class="Hero" :style="`background-image: url(${items.src}); `">
    <v-img class="imgen" :style="`background-image: url(${$route.meta.src}); `">
    <v-container fill-height grid-list-xl>
      <v-layout pt-4 justify-end align-center class="white--text">
        <v-flex xs12 sm8 md6>
          <v-card hover color="rgba(255,255,255, 0.95)">
            <v-card-text class="black--text font-weight-bold headline mt-3 pa-5 text-xs-justify text-sm-justify">
              {{$route.meta.descripcion}}
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    </v-img>
  </v-img>
</section>
</template>
<script>

export default {
  props: ["items"],
  data(){
    return{
    }
  }
};
</script>
<style scoped>
.Hero {
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: bottom ;
}
.imgen{
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: bottom ;
}
/*:style="`background-image: url(${items.src}); background-size: cover; `"*/
</style>
