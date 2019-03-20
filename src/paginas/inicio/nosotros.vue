<template>
  <section class="py-4">
      <v-layout column>
        <v-flex xs12>
          <v-card-text class="display-1 font-weight-bold white--text">
            {{ items.titulo }}
          </v-card-text>
        </v-flex>
        <v-flex xs12>
          <v-container fluid>
            <v-card flat color="transparent">
              <v-layout wrap align-center justify-center>
                <v-flex xs12 sm12 md6>
                  <v-container>
                    <v-layout align-center justify-center fill-height>
                      <v-card color="transparent">
                        <v-card-text>
                          <img contain width="100%" :src="items.src" alt="" />
                        </v-card-text>
                      </v-card>
                    </v-layout>
                  </v-container>
                </v-flex>
                <v-flex xs12 sm12 md6>
                  <v-layout justify-center align-center fill-height>
                    <v-card flat color="transparent">
                      <v-card-text
                        class="headline font-weight-bold white--text"
                      >
                        {{ items.nosotros.titulo }}
                      </v-card-text>
                      <v-divider></v-divider>
                      <v-container fluid>
                        <v-layout align-center justify-center fill-height>
                          <v-flex xs12>
                            <v-card
                              style="border-radius: 5px;"
                              class="pa-2 my-auto"
                            >
                              <div
                                data-aos="fade-down"
                                v-for="(descripcion, indice) in items.nosotros
                                  .descripcion"
                                :key="indice"
                                style="width: 100%;"
                              >
                                <v-card flat class="mt-1">
                                  <v-card-text class="body text-xs-justify">
                                    {{ descripcion }}
                                  </v-card-text>
                                </v-card>
                              </div>
                            </v-card>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-card>
          </v-container>
        </v-flex>
      </v-layout>
  </section>
</template>
<script>
export default {
  props: ["items"]
};
</script>
