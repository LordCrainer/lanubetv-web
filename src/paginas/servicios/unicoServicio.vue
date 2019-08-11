<style lang="css" scoped>



</style>

<template lang="html">

<section style="background-color: white;">
        <v-container grid-list-xs,sm,md,lg,xl>
            <v-layout row wrap justify-center align-center fill-height>
                <v-flex xs12>
                    <v-card-text flat class="display-2 font-weight-bold pt-5">
                        TITULO: {{unicoServicio}}
                    </v-card-text>
                </v-flex>
                <v-flex xs12>
                    <v-layout row wrap align-center justify-center>
                      <v-flex xs12 >
                        <v-card>
                          <v-card-text flat class="display-2 font-weight-bold pt-5">
                              INFORMACIÓN: {{$route.params}}
                              <v-btn color="primary" @click="logger">text</v-btn>
                          </v-card-text>
                          <v-card-text>

                          </v-card-text>
                        </v-card>
                      </v-flex>
                  </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
</section>

</template>

<script>
import {servicios} from './servicios.json'
export default {
  props: ['unicoServicio'],
  data() {
    return {
      data_servicio: servicios,
    }
  },
  created() {
    this.changeHero();
  },
  updated(){
    this.changeHero()
  },
  methods: {
    changeHero() {
      let longitud_data = this.data_servicio.length;
      for (var i = 0; i < longitud_data; i++) {
        if(this.data_servicio[i].ruta === this.$route.path){
            this.$route.meta.descripcion = this.data_servicio[i].meta.descripcion
            console.log(this.data_servicio[i].meta.descripcion);
            return 0
        }
      }
    }
  }
}
</script>
