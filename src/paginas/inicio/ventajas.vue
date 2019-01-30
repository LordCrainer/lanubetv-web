<template>
  <v-app class="ma-0">
    <v-container fill-height>
      <v-layout row align-center justify-between-around>
        <v-flex>
          <v-container grid-list-xl>
            <v-layout align-center justify-space-around>
              <v-flex xs12 sm4 v-for="ventaja in items" :key="ventaja.titulo">
                <div data-aos="fade-up">
                  <v-hover>
                    <v-card
                      slot-scope="{
                        hover,
                        active,
                        toggle
                      }"
                      class="mx-auto"
                      hover
                      height="250"
                      max-width="250"
                    >
                      <v-card-text>{{ ventaja.titulo }}</v-card-text>
                      <img
                        style="max-width: 250px; width: 100%"
                        :src="ventaja.src"
                        alt=""
                      />
                      <v-expand-transition>
                        <v-card
                          v-if="hover"
                          class="d-flex  orange lighten-1 v-card--reveal headline black--text"
                          style="height: 100%; text-decoration: none;"
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
<style>
.v-card--reveal {
  align-items: center;
  top: 0;
  justify-content: center;
  opacity: 0.7;
  position: absolute;
  width: 100%;
}
</style>
