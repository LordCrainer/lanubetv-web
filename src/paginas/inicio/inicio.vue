<template>
  <div>
    <parallax :src="parallax_init.src" style="height: 100vh;">
      <v-container slot="contenido" fluid fill-height class="ma-0 pa-0">
        <v-layout justify-center align-center>
          <v-flex xs12 sm12>
            <v-card hover flat color="rgba(0,0,0, 0.5)">
              <v-card-text
                class="white--text font-weight-bold headline pa-5 text-xs-center"
              >
                {{ parallax_init.text }}
              </v-card-text></v-card
            >
          </v-flex>
        </v-layout>
      </v-container>
    </parallax>
    <nosotros :items="nosotros_init"></nosotros>

    <ventajas :items="ventajas_init"></ventajas>
    <parallax :src="parallax_2.src" style="height: 50vh;"></parallax>
    <canales :items="carousel_init"></canales>
  </div>
</template>
<script>
import ventajas from "./ventajas.vue";
import nosotros from "./nosotros.vue";
import canales from "./canales.vue";
import carousel from "./../../componentes/UI/carousel.vue";
import parallax from "./../../componentes/UI/parallax.vue";
export default {
  components: { ventajas, nosotros, canales, carousel, parallax },
  data() {
    return {
      //https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/yiII-background.jpg
      parallax_init: {
        src:
          "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/Oqqn-background.jpg",
        text:
          "La forma más amigable, segura e inteligente de hacer tus envíos Digitales desde las productoras hacia los medios de publicidad nacionales e internacionales"
      },
      parallax_2: {
        src:
          "https://www.convenzis.co.uk/wp-content/uploads/2018/04/government-digital-technology.jpg"
      },
      carousel_init: [
        {
          src:
            "https://www.sage.com/na/~/media/site/sagena/responsive/images/smallbiz/section-clouds.jpg",
          text: "probando slot 1"
        },
        {
          src:
            "https://www.sage.com/na/~/media/site/sagena/responsive/images/smallbiz/section-clouds.jpg",
          text: "probando slot 2"
        }
      ],
      ventajas_init: {
        titulo: "VENTAJAS",
        data: [
          {
            titulo: "Revisión",
            descripcion:
              "Revisión técnica del archivo por nuestro personal calificado, para garantizar la calidad de audio y video.",
            src:
              "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/p-ck-revision_tecnica_icon.png"
          },
          {
            titulo: "Verificación",
            descripcion:
              "Verificación de duración del comercial, para certificar que coincide con la duración contratada.",
            src:
              "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/7_55-check_time_icon.png"
          },
          {
            titulo: "Conversión",
            descripcion:
              "Conversión en alta calidad del máster al formato específico de cada canal seleccionado para envío.",
            src:
              "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/Ra0A-hq_icon.png"
          },
          {
            titulo: "Notificación",
            descripcion:
              "Notificación al cliente, en caso de existir alguna novedad con el archivo"
          },
          {
            titulo: "Solicitud",
            descripcion:
              "Solicitud vía email de la aprobación para realizar los envíos"
          },
          {
            titulo: "Envíos",
            descripcion:
              "Realización de los envíos correspondientes, y emisión de la notificación de los envíos realizados."
          }
        ]
      },
      nosotros_init: {
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
