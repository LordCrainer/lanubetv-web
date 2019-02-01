<template>
  <v-app class="pa-0 ma-0">
    <carousel :items="items" style="min-height: 100vh; " height="100%">
      <v-container fill-height slot="contenido" slot-scope="canales">
        <v-layout row align-center justify-center>
          <v-flex>
            <v-container grid-list-xl fill-height>
              <v-layout row wrap align-center justify-center>
                <v-flex
                  v-for="canales in canales.item.clientes"
                  :key="canales.Ecuavisa"
                  xs4
                  sm3
                  md3
                >
                  <v-card
                    style="height: 100%; min-width: 75px; border-radius: 50%;"
                    class="ma-auto pa-auto"
                  >
                    <v-img
                      contain
                      :src="canales.src"
                      alt="canales"
                      aspect-ratio="1"
                      class="pa-0 mx-auto"
                    >
                    </v-img>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
    </carousel>
  </v-app>
</template>
<script>
import carousel from "./../../componentes/UI/carousel";
export default {
  props: ["items"],
  components: { carousel }
};
</script>
