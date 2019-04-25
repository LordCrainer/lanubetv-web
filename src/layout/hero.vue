<template>
<section>
  <v-img  class="Hero" :style="`background-image: url(${items.src}); `" style="position: relative;">
    <v-img class="imgen hidden-xs-only" :style="`background-image: url(${$route.meta.src}); `" >    </v-img>
    <v-container fill-height grid-list-xl style="position: absolute; top: 0; right: 0;">
      <v-layout pt-4 justify-end align-center class="white--text">
        <v-flex xs12 sm8 md6>
          <v-card hover color="rgba(255,255,255, 1)">
            <v-card-text class="black--text font-weight-bold mt-3 pa-5 text-xs-center text-sm-justify" style="font-size: 1.7em">
              {{$route.meta.descripcion}}
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

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
  height: 100vmin;
  width: 100%;
  min-height: 600px;
  background-size: cover;
  background-position: bottom center;
  background-color: white;
}
.imgen{
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: bottom center;
}
/*:style="`background-image: url(${items.src}); background-size: cover; `"*/
</style>
