<template>
  <section class="py-0 ma-0" style="background-color: white;">
    <carousel :items="items" height="100%" class="py-5">
      <v-container slot="contenido" slot-scope="canales">
        <v-card flat color="transparent" class="mx-auto">
          <v-card-text class="display-2 mb-5 indigo--text font-weight-bold">
            CLIENTES
          </v-card-text>
          <v-layout fill-height align-center justify-center>
            <v-flex>
              <v-container grid-list-xl>
                <v-card flat class="mx-auto transparent">
                  <v-layout row wrap align-center justify-space-around>
                    <v-flex
                      v-for="canales in canales.item.clientes"
                      :key="canales.Ecuavisa"
                      xs4
                      sm4
                      md3
                    >
                      <v-card
                        height="auto"
                        width="100%"
                        style="min-width: 75px; min-height: 75px; text-align: center; max-width: 150px; max-height: 175px; border-radius: 50%;"
                        class="ma-auto pa-auto"
                        color="black"
                      >
                        <v-img
                          contain
                          :src="canales.src"
                          alt="canales"
                          height="inherit"
                          aspect-ratio="1"
                          class="pa-0 mx-auto"
                        >
                        </v-img>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-container>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>
    </carousel>
  </section>
</template>
<script>
import carousel from "./../../componentes/UI/carousel";
export default {
  props: ["items"],
  components: { carousel }
};
</script>
