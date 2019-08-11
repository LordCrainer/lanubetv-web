<template>
<section>
  <v-img  class="Hero" :style="`background-image: url(${items.src}); `" style="position: relative;">
    <v-img class="imgen hidden-xs-only" :style="`background-image: url(${$route.meta.src}); `" >    </v-img>
    <v-container fill-height grid-list-xl style="position: absolute; top: 0; right: 0;">
      <v-layout pt-4 justify-end align-center class="white--text">
        <v-flex xs12 sm8 md6>
          <v-card hover color="rgba(255,255,255, 1)">
            <v-card-text class="black--text font-weight-bold mt-3 pa-5 text-xs-center text-sm-justify" style="font-size: 1.7em">
              {{$route.meta.descripcion}} DES: {{descripcion}}
            </v-card-text>
          </v-card>
          <v-fab-transition>
                <v-btn @click="$vuetify.goTo('#contenido', {duration: 1000,offset: 30} )"
                  v-show="true"
                  color="indigo"
                  dark
                  fixed
                  bottom
                  right
                  fab

                >
                  <v-icon>arrow_drop_down</v-icon>
                </v-btn>
              </v-fab-transition>
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
      descripcion: ""
    }
  },
  beforeCreate(){
    this.descripcion = this.$route.meta.descripcion
    console.log("Before Created: ",this.$route.meta.descripcion);

  },
  created(){
    this.descripcion = this.$route.meta.descripcion
    console.log("Created: ", this.$route.meta.descripcion);
  },
  beforeMount(){
    this.descripcion = this.$route.meta.descripcion
    console.log("Before Mount: ",this.$route.meta.descripcion);
  },
  updated(){
    this.descripcion = this.$route.meta.descripcion
    // this.changeDescriptionByPath()
    console.log("updated: ", this.$route.meta.descripcion);
  },
  methods:{

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
