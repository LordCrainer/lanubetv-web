<template>
<div>
  <nosotros :items="nosotros_init"></nosotros>
  <ventajas :items="ventajas_init"></ventajas>
  <servicio :items="servicio_init"></servicio>
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
      ventajas_init: {
        titulo: "VENTAJAS",
        data: [{
            titulo: "Revisión",
            descripcion: "Revisión técnica del archivo para garantizar la calidad de audio y video.",
            src: require('./../../assets/Inicio/revision_tecnica_icon.png')
          },
          {
            titulo: "Verificación",
            descripcion: "Verificación de duración del comercial, para certificar que coincide con la duración contratada.",
            src: require('./../../assets/Inicio/verificacion.png')
          },
          {
            titulo: "Conversión",
            descripcion: "Conversión en alta calidad del máster al formato específico de cada canal seleccionado para envío.",
            src: require('./../../assets/Inicio/conversion.png')
          },
          {
            titulo: "Notificación",
            descripcion: "Notificación al cliente, en caso de existir alguna novedad con el archivo",
            src: require('./../../assets/Inicio/notificacion.png')
          },
          {
            titulo: "Solicitud",
            descripcion: "Solicitud vía email de la aprobación para realizar los envíos",
            src: require('./../../assets/Inicio/solicitud.png')
          },
          {
            titulo: "Envíos",
            descripcion: "Realización de los envíos correspondientes, y emisión de la notificación de los envíos realizados.",
            src: require('./../../assets/Inicio/envios.png')
          }
        ]
      },
      servicio_init: {
        imagen: {
          src: require('./../../assets/Inicio/24-7.png')
        },
        src: require('./../../assets/Inicio/3.-Plataforma.jpg')
      },
      clientes_canales: {
        titulo: "CLIENTES",
        fondo: require('./../../assets/Nosotros/MiViSer.jpg'),
        canales: [{
            titulo: "Primeros 9 canales",
            src: "",
            clientes: [
              {
                titulo: "Alacena",
                src: require('./../../assets/Clientes/Empresas/Alacena-icon.jpg')
              },
              {
                titulo: "BancoBolivariano",
                src: require('./../../assets/Clientes/Empresas/BancoBolivariano-icon.png')
              },
              {
                titulo: "BancoDelPacificio",
                src: require('./../../assets/Clientes/Empresas/BancoDelPacifico-icon.png')
              },
              {
                titulo: "BancoDelPichincha",
                src: require('./../../assets/Clientes/Empresas/BancoDelPichincha-icon.png')
              },
              {
                titulo: "BancoGuayaquil",
                src: require('./../../assets/Clientes/Empresas/BancoBolivariano-icon.png')
              },
              {
                titulo: "Bankard",
                src: require('./../../assets/Clientes/Empresas/Bankard-icon.jpg')
              },
              {
                titulo: "Cne",
                src: require('./../../assets/Clientes/Empresas/Cne-icon.png')
              },
              {
                titulo: "Cnt",
                src: require('./../../assets/Clientes/Empresas/Cnt-icon.png')
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
          },/*{
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
      contacto_init: {
        titulo: "ubicacion",
        src: require('../../assets/Inicio/5.-Contacto.jpg'),
        icono: {
          src: require('./../../assets/Inicio/contactanos.png')
        },
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
