<template>
  <v-app>
    <carousel :items="items" height="auto">
      <v-container slot="contenido" slot-scope="canales" style="height: 100vh;">
        <v-layout row align-center justify-center>
          <v-flex>
            <v-container grid-list-xl fill-height>
              <v-layout row wrap align-center justify-center>
                <v-flex
                  v-for="canales in canales.item.clientes"
                  :key="canales.Ecuavisa"
                  xs6
                  sm4
                  md4
                >
                  <v-container style="border:1px solid blue;">
                    <v-layout justify-center align-center>
                      <v-flex style="border:1px solid green;" class="pa-auto">
                        <v-avatar size="100%">
                          <v-img
                            contain
                            :src="canales.src"
                            alt="canales"
                            aspect-ratio="2.5"
                            class="pa-0"
                            style="border:1px solid red;"
                          >
                          </v-img>
                        </v-avatar>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex> </v-layout
      ></v-container>
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
