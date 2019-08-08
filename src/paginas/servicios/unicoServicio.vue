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
                    <v-container grid-list-xs,sm,md,lg,xl>
                        <v-card-text flat class="display-2 font-weight-bold pt-5">
                            INFORMACIÓN: {{$route.params}}
                            <v-btn color="primary" @click="logger">text</v-btn>
                        </v-card-text>
                        <v-card-text>
                            DATO: {{welcome}}
                        </v-card-text>
                    </v-container>
                </v-flex>
            </v-layout>
        </v-container>
</section>

</template>

<script>
export default {
  props: ['unicoServicio'],
  data() {
    return {
      welcome: 'Bienvenidos a'
    }
  },
  created() {
    this.changeHero();
  },
  methods: {
    changeHero() {
      this.$route.meta.descripcion = "Producción Audivisual"
    },
    logger() {
      console.log(this.$route);
    }
  },
  mounted() {
    if (this.unicoServicio) {
      this.welcome = "Produccion audiovisual para jovenes"
    }

  }
}
</script>
