<template>
<section>
  <parallax2 :items="items" minHeight="50%">
    <v-layout slot="contenido" fill-height align-center justify-center wrap>
      <v-flex xs7 sm6 style="background-color: rgba(0,0,0,0.6); height: 100%;">
        <v-layout fill-height align-center justify-center>
          <v-card flat color="transparent" class="ma-auto">
            <v-card-text class="white--text font-weight-bold text-xs-center" style="font-size: 6vh;">Plataforma las 24/7</v-card-text>
          </v-card>
        </v-layout>
      </v-flex>
      <v-flex xs5 sm6>
        <v-layout fill-height align-center justify-center>
          <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="500">
            <v-card flat color="transparent" class="pa-4">
              <v-img :src="items.imagen.src" height="16vw" width="16vw"></v-img>
            </v-card>
          </div>
        </v-layout>
      </v-flex>

    </v-layout>
  </parallax2>
</section>
</template>
<script>
import parallax2 from "./../../componentes/UI/parallax2.vue";
export default {
  props: ["items"],
  components: {
    parallax2
  }
};
</script>
