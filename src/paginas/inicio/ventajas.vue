<template>
  <v-app class="ma-0" dark>
    <v-card-text class="display-1 pa-5 font-weight-bold white--text">
      {{ items.titulo }}
    </v-card-text>
    <v-container fill-height>
      <v-layout row align-center justify-space-between>
        <v-flex>
          <v-container grid-list-xl>
            <v-layout wrap row align-center justify-space-between>
              <v-flex
                xs12
                sm6
                md4
                v-for="ventaja in items.data"
                :key="ventaja.titulo"
              >
                <div data-aos="fade-up">
                  <v-hover>
                    <v-card
                      slot-scope="{
                        hover,
                        active,
                        toggle
                      }"
                      class="mx-auto "
                      hover
                      height="250"
                      width="250"
                      style="border-radius: 15%;"
                      color="white"
                    >
                      <v-container fill-height class="pa-0">
                        <v-layout justify-center align-center>
                          <v-flex>
                            <img
                              width="240"
                              height="240"
                              :src="ventaja.src"
                              alt=""
                            />
                          </v-flex>
                        </v-layout>
                      </v-container>

                      <v-expand-transition>
                        <v-card
                          v-if="hover"
                          class="d-flex  blue darken-4 transition-fast-in-fast-out v-card--reveal headline font-weight-bold white--text"
                          style="height: 100%; text-decoration: none; border-radius: 15%; opacity:0.9; "
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
    </v-container>
  </v-app>
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
  border: 1px solid blue;
  position: absolute;
  width: 100%;
}
</style>
