<template>
  <section>
    <v-layout column>
      <v-flex xs12>
        <v-card-text class="display-1 font-weight-bold black--text">
          {{ items.titulo }}
        </v-card-text>
      </v-flex>
      <v-flex xs12>
        <v-container fluid>
          <v-card flat color="transparent">
            <v-layout wrap>
              <v-flex xs12 sm12 md6>
                <v-container fill-height>
                  <v-layout align-center justify-center>
                    <img
                      width="100%"
                      max-height="500px"
                      :src="items.src"
                      alt=""
                    />
                  </v-layout>
                </v-container>
              </v-flex>
              <v-flex xs12 sm12 md6>
                <v-layout justify-center align-center fill-height>
                  <v-card flat color="transparent">
                    <v-card-text class="headline font-weight-bold">
                      {{ items.nosotros.titulo }}
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-container fluid fill-height>
                      <v-card flat style="border-radius: 15px;">
                        <v-layout align-center justify-center wrap>
                          <div
                            data-aos="fade-down"
                            v-for="(descripcion, indice) in items.nosotros
                              .descripcion"
                            :key="indice"
                            style="width: 100%;"
                          >
                            <v-hover>
                              <v-card
                                slot-scope="{
                                  hover
                                }"
                                flat
                                hover
                                class="pa-1 my-1"
                              >
                                <v-card-text class="body text-xs-justify">
                                  {{ descripcion }}
                                </v-card-text>
                              </v-card>
                            </v-hover>
                          </div>
                        </v-layout>
                      </v-card>
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
