<style lang="css" scoped>



</style>

<template lang="html">

<section style="background-color: white;">
            <v-layout row wrap justify-center align-center fill-height>
                <v-flex xs12>
                    <v-card-text flat class="display-1 font-weight-bold pt-5">
                          {{$route.meta.descripcion}}
                    </v-card-text>
                </v-flex>
                <v-flex xs12>
                    <v-layout row wrap align-center justify-center>
                      <v-flex xs12 >
                        <v-container grid-list-xs,sm,md,lg,xl>
                          <v-card flat>
                            <v-card-text flat class="headline font-weight-bold pt-5">
                                {{data.resumen}}
                            </v-card-text>
                            <v-card-text>

                            </v-card-text>
                          </v-card>
                        </v-container>
                      </v-flex>
                  </v-layout>
                </v-flex>
            </v-layout>
</section>

</template>

<script>
import {
  servicios
} from './servicios.json'
export default {
  props: ['unicoServicio'],
  data() {
    return {
      data_servicio: servicios,
      data: ''
    }
  },
  created() {
    this.changeHero();
  },
  updated() {
    this.changeHero()
  },
  methods: {
    changeHero() {
      let longitud_data = this.data_servicio.length;
      for (var i = 0; i < longitud_data; i++) {
        if (this.data_servicio[i].ruta === this.$route.path) {
          this.$route.meta.descripcion = this.data_servicio[i].meta.descripcion
          this.data = this.data_servicio[i];
          return 0
        }
      }
    },
    logger() {
      console.log(this.data_servicio);
    }
  }
}
</script>
