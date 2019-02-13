<template>
  <section class="white--background">
    <v-layout column align-center justify-center>
      <v-flex>
        <v-card-text class="display-1 font-weight-bold pa-4 mt-4">
          {{ items.titulo }}
        </v-card-text>
      </v-flex>
      <v-flex>
        <v-card flat class="ma-auto">
          <v-container grid-list-xl>
            <v-layout wrap row fill-height align-center justify-center>
              <v-flex
                xs12
                sm6
                md4
                v-for="ventaja in items.data"
                :key="ventaja.titulo"
                class="my-4"
              >
                <div data-aos="fade-up">
                  <v-layout column align-center justify-center>
                    <v-card
                      class=" pa-2 elevation-0 text-xs-center"
                      height="300"
                      width="100%"
                      style=" max-height: 275px; max-width: 300px;"
                    >
                      <v-flex class="pa-0">
                        <v-card-text class="headline">
                          {{ ventaja.titulo }}
                        </v-card-text>
                      </v-flex>
                      <v-flex>
                        <v-avatar size="75" tile>
                          <v-img :src="ventaja.src" alt=""> </v-img>
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
