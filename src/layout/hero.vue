<template>
<section>
  <v-img  class="Hero" :style="`background-image: url(${items.src}); `">
    <v-img class="imgen" :style="`background-image: url(${$route.meta.src}); `">
    <v-container fill-height grid-list-xl>
      <v-layout pt-4 justify-end align-center class="white--text">
        <v-flex xs12 sm8 md6>
          <v-card hover color="rgba(255,255,255, 1)">
            <v-card-text class="black--text font-weight-bold mt-3 pa-5 text-xs-justify text-sm-justify" style="font-size: 3.5vh">
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
  height: 100%;
  width: 100%;
  min-height: 100vmin;
  background-size: cover;
  background-position: bottom center;
}
.imgen{
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: bottom center;
}
/*:style="`background-image: url(${items.src}); background-size: cover; `"*/
</style>
