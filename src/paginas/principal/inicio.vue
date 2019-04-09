<template>
<div>
  <nosotros :items="nosotros_init"></nosotros>
  <ventajas :items="ventajas_init"></ventajas>
  <servicio :items="parallax_2"></servicio>
  <canales :items="clientes_canales"></canales>
  <contacto :items="contacto_init"></contacto>

</div>
</template>
<script>
import ventajas from "./ventajas.vue";
import nosotros from "./nosotros.vue";
import canales from "./canales.vue";
import servicio from "./servicio.vue";
import contacto from "./contacto.vue";
export default {
  components: {
    ventajas,
    nosotros,
    canales,
    servicio,
    contacto
  },
  name: "Inicio",
  data() {
    return {
      nosotros_init: {
        titulo: "DISTRIBUIMOS COMERCIALES",
        bacgroundSRC: require('../../assets/Inicio/2.FondoDC.jpg'),
        src: require('../../assets/Inicio/2.Distribucion.png'),
        src1: require('../../assets/Inicio/2.DistribucionH.png'),
        nosotros: {
          titulo: "NOSOTROS",
          descripcion: [
            "Somos una empresa ecuatoriana, dedicada a la prestación de servicios digitales a través de nuestra plataforma web, desarrollada pensando en las necesidades de nuestros potenciales clientes.",
            "Nuestro servicio está dirigido a las agencias de publicidad, agencias de medios y productoras a nivel nacional e internacional, que necesitan realizar envíos de comerciales de televisión a las diferentes estaciones de tv, mediante un sistema sencillo, ágil y confiable.",
            "Contamos con personal especializado para brindar el soporte técnico que nuestros clientes requieran, con un trato personalizado."
          ]
        }
      },
      parallax_2: {
        imagen: {
          src: "http://www.serviciodegruascamus.cl/images/24-7.png"
        },
        src: "https://static1.squarespace.com/static/56db4b9b07eaa05aaab5f1d8/t/58536783c534a5cc2969dfd9/1481860996287/banner1.jpg?format=2500w"
      },
      carousel_init: [{
          src: "https://www.sage.com/na/~/media/site/sagena/responsive/images/smallbiz/section-clouds.jpg",
          text: "probando slot 1"
        },
        {
          src: "https://www.sage.com/na/~/media/site/sagena/responsive/images/smallbiz/section-clouds.jpg",
          text: "probando slot 2"
        }
      ],
      clientes_canales: {
        titulo: "CLIENTES",
        fondo: require('./../../assets/Nosotros/MiViSer.jpg'),
        canales: [{
            titulo: "Primeros 9 canales",
            src: "",
            clientes: [{
                titulo: "Ecuavisa",
                src: "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/K47h-ecuavisa_icon.png"
              },
              {
                titulo: "Ecuavisa",
                src: "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/K47h-ecuavisa_icon.png"
              },
              {
                titulo: "Ecuavisa",
                src: "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/9ar3-gama_icon.png"
              },
              {
                titulo: "Ecuavisa",
                src: "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/K47h-ecuavisa_icon.png"
              },
              {
                titulo: "Ecuavisa",
                src: "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/K47h-ecuavisa_icon.png"
              },
              {
                titulo: "Ecuavisa",
                src: "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/9ar3-gama_icon.png"
              },
              {
                titulo: "Ecuavisa",
                src: "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/K47h-ecuavisa_icon.png"
              },
              {
                titulo: "Ecuavisa",
                src: "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/K47h-ecuavisa_icon.png"
              },
              {
                titulo: "Ecuavisa",
                src: "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/9ar3-gama_icon.png"
              },
              {
                titulo: "Ecuavisa",
                src: "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/9ar3-gama_icon.png"
              },
              {
                titulo: "Ecuavisa",
                src: "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/9ar3-gama_icon.png"
              },
              {
                titulo: "Ecuavisa",
                src: "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/9ar3-gama_icon.png"
              }
            ]
          }
          /*{
            titulo: "Segundos 9",
            src: "",
            clientes: [
              {
                titulo: "Ecuavisa",
                src:
                  "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/K47h-ecuavisa_icon.png"
              },
              {
                titulo: "Ecuavisa",
                src:
                  "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/K47h-ecuavisa_icon.png"
              },
              {
                titulo: "Ecuavisa",
                src:
                  "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/9ar3-gama_icon.png"
              },
              {
                titulo: "Ecuavisa",
                src:
                  "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/K47h-ecuavisa_icon.png"
              },
              {
                titulo: "Ecuavisa",
                src:
                  "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/K47h-ecuavisa_icon.png"
              },
              {
                titulo: "Ecuavisa",
                src:
                  "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/K47h-ecuavisa_icon.png"
              },
              {
                titulo: "Ecuavisa",
                src:
                  "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/9ar3-gama_icon.png"
              },
              {
                titulo: "Ecuavisa",
                src:
                  "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/9ar3-gama_icon.png"
              },
              {
                titulo: "Ecuavisa",
                src:
                  "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/K47h-ecuavisa_icon.png"
              }
            ]
          }*/
        ]
      },
      ventajas_init: {
        titulo: "VENTAJAS",
        data: [{
            titulo: "Revisión",
            descripcion: "Revisión técnica del archivo por nuestro personal calificado, para garantizar la calidad de audio y video.",
            src: "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/p-ck-revision_tecnica_icon.png"
          },
          {
            titulo: "Verificación",
            descripcion: "Verificación de duración del comercial, para certificar que coincide con la duración contratada.",
            src: "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/7_55-check_time_icon.png"
          },
          {
            titulo: "Conversión",
            descripcion: "Conversión en alta calidad del máster al formato específico de cada canal seleccionado para envío.",
            src: "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/Ra0A-hq_icon.png"
          },
          {
            titulo: "Notificación",
            descripcion: "Notificación al cliente, en caso de existir alguna novedad con el archivo"
          },
          {
            titulo: "Solicitud",
            descripcion: "Solicitud vía email de la aprobación para realizar los envíos"
          },
          {
            titulo: "Envíos",
            descripcion: "Realización de los envíos correspondientes, y emisión de la notificación de los envíos realizados."
          }
        ]
      },

      contacto_init: {
        titulo: "ubicacion",
        src: require('../../assets/Inicio/5.-Contacto.jpg'),
        icono: {src: require('./../../assets/Inicio/contactanos.png')},
        datos: [{
            descripcion: "593-4-2832083 ext. 102",
            src: require('./../../assets/Inicio/phone-08.png')
          },
          {
            descripcion: "593-96759-0148",
            src: require('./../../assets/Inicio/whatsapp_icon-08.png')
          },
          {
            descripcion: "Noguchi 633 y Huancavilca Edif. Ecobay",
            src: require('./../../assets/Inicio/localizacion-08.png')
          },
          {
            descripcion: "trafico@lanubetv.net",
            src: require('./../../assets/Inicio/email_icon-08.png')
          }
        ]

      }
    };
  }
};
</script>
