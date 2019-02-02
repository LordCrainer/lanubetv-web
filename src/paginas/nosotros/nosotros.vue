<template>
  <div class="app py-5">
    <v-card-text class="display-1 pa-3 font-weight-bold black--text">
      {{ items.titulo }}
    </v-card-text>

    <v-container fluid>
      <v-card flat color="transparent">
        <v-layout row wrap>
          <v-flex xs12 sm12 md6>
            <v-container fill-height>
              <v-layout align-center justify-center>
                <img width="100%" max-height="500px" :src="items.src" alt="" />
              </v-layout>
            </v-container>
          </v-flex>
          <v-flex xs12 sm12 md6>
            <v-card flat color="transparent">
              <v-card-text class="headline font-weight-bold">
                {{ items.nosotros.titulo }}
              </v-card-text>

              <v-container fill-height>
                <v-card flat style="border-radius: 15px;">
                  <v-layout align-center justify-center wrap>
                    <div
                      data-aos="fade-down"
                      v-for="(descripcion, indice) in items.nosotros
                        .descripcion"
                      :key="indice"
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
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: {
        titulo: "¿Quiénes somos?",
        src:
          "https://www.elcomercio.com/files/article_main/uploads/2018/10/16/5bc6a13529e3a.jpeg",
        nosotros: {
          titulo: "NOSOTROS",
          descripcion: [
            "Somos una empresa ecuatoriana, dedicada a la prestación de servicios digitales a través de nuestra plataforma web, desarrollada pensando en las necesidades de nuestros potenciales clientes.",
            "Nuestro servicio está dirigido a las agencias de publicidad, agencias de medios y productoras a nivel nacional e internacional, que necesitan realizar envíos de comerciales de televisión a las diferentes estaciones de tv, mediante un sistema sencillo, ágil y confiable.",
            "Contamos con personal especializado para brindar el soporte técnico que nuestros clientes requieran, con un trato personalizado."
          ]
        }
      }
    };
  }
};
</script>
