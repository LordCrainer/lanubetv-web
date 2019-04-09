<template>
  <section>
    <v-card>
      <v-layout column align-center justify-center>
        <v-flex>
          <v-card-text class="display-2 font-weight-bold pa-4 mt-4">
            {{ items.titulo }}
          </v-card-text>
        </v-flex>
        <v-flex >
          <v-card flat class="ma-auto" color="transparent">
            <v-container grid-list-xl class="py-5" fluid>
              <v-layout wrap row fill-height align-center justify-center>
                <v-flex
                  xs12
                  sm6
                  md4
                  v-for="(ventaja,indice) in items.data"
                  :key="ventaja.titulo"
                  class="my-4 d-flex"

                >
                  <div data-aos="fade-up">
                    <v-layout column align-center justify-center>
                      <v-card
                        class=" pa-2 text-xs-center elevation-3"
                        height="70vh"
                        style=" max-height: 300px; max-width:275px; color: white "
                        :color="`${indice%2== 0 ? 'rgb(60,60,60)': 'rgb(38, 48, 62)'} `"
                      >
                        <v-flex class="pa-0" >
                          <v-card-text class="headline">
                            {{ ventaja.titulo }}
                          </v-card-text>
                        </v-flex>
                        <v-flex >
                            <v-avatar size="80"  color="white" >
                              <img  v-if="ventaja.src" :src="ventaja.src"  alt="" style="height:80%; width:80%; "/>
                            </v-avatar>
                        </v-flex>
                        <v-flex class="pa-0">
                          <v-card-text class="pa-auto subheading">
                            {{ ventaja.descripcion }}
                          </v-card-text>
                        </v-flex>
                      </v-card>
                    </v-layout>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card>
  </section>
</template>
<script>
export default {
  props: ["items"],
  data() {
    return {
      hover1: false
    };
  }
};
</script>
<style scoped>

.v-card--reveal {
  border-radius: 5%;
  align-items: center;
  top: 0;
  opacity: 0.97;
  justify-content: center;
  position: absolute;
  width: 100%;
  text-decoration: none;
}
</style>
