<template>
  <section class="ma-0 py-5" style="background-color:rgb(48,48,48);">
    <v-card-text class="display-1 pa-5 font-weight-bold white--text">
      {{ items.titulo }}
    </v-card-text>
    <v-layout row align-center justify-center>
      <v-flex>
        <v-container grid-list-xl>
          <v-layout wrap row align-center justify-space-between>
            <v-flex
              xs12
              sm6
              md4
              v-for="ventaja in items.data"
              :key="ventaja.titulo"
              class="my-4"
            >
              <div data-aos="fade-up">
                <v-hover>
                  <v-card
                    slot-scope="{
                      hover,
                      active,
                      toggle
                    }"
                    class="ma-auto"
                    hover
                    height="250"
                    width="250"
                    style="border-radius: 50%;"
                    color="white"
                  >
                    <v-img
                      contain
                      class="ma-auto pa-0"
                      height="inherit"
                      width="230"
                      :src="ventaja.src"
                      alt=""
                    >
                    </v-img>

                    <v-expand-transition>
                      <v-card
                        v-if="hover"
                        class="d-flex  blue darken-4 transition-fast-in-fast-out v-card--reveal headline font-weight-bold white--text"
                        style=" height: 100%; text-decoration: none; border-radius: 5%; "
                      >
                        <v-card-text>{{ ventaja.descripcion }}</v-card-text>
                      </v-card>
                    </v-expand-transition>
                  </v-card>
                </v-hover>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </section>
</template>
<script>
export default {
  props: ["items"],
  data() {
    return {};
  }
};
</script>
<style scoped>
.v-card--reveal {
  align-items: center;
  top: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
}
</style>
