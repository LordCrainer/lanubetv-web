<style>
.v-carousel__prev .v-btn .v-btn__content .v-icon,
.v-carousel__next .v-btn .v-btn__content .v-icon {
  color: black;
}
</style>

<template>
<div>
  <nosotros :items="nosotros_init"></nosotros>
  <ventajas :items="ventajas_init"></ventajas>

  <contacto :items="contacto_init"></contacto>
  <clientes :items="clientes_canales"></clientes>
  <servicio :items="servicio_init"></servicio>

</div>
</template>

<script>
import ventajas from "./ventajas.vue";
import nosotros from "./nosotros.vue";
import clientes from "./clientes.vue";
import servicio from "./servicio.vue";
import contacto from "./contacto.vue";
var data = require("./inicio.json");
export default {
  components: {
    ventajas,
    nosotros,
    clientes,
    servicio,
    contacto
  },
  name: "Inicio",
  data() {
    return {
      nosotros_init: {
        titulo: "DISTRIBUIMOS COMERCIALES",
        backgroundSRC: 'Inicio/2.FondoDC.jpg',
        src: 'Inicio/2.Distribucion.png',
        src1: 'Inicio/2.DistribucionH.png',
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
          src: 'Inicio/revision_tecnica_icon.png'
        }, {
          titulo: "Verificación",
          descripcion: "Verificación de duración del comercial, para certificar que coincide con la duración contratada.",
          src: 'Inicio/verificacion.png'
        }, {
          titulo: "Conversión",
          descripcion: "Conversión en alta calidad del máster al formato específico de cada canal seleccionado para envío.",
          src: 'Inicio/conversion.png'
        }, {
          titulo: "Notificación",
          descripcion: "Notificación al cliente, en caso de existir alguna novedad con el archivo",
          src: 'Inicio/notificacion.png'
        }, {
          titulo: "Solicitud",
          descripcion: "Solicitud vía email de la aprobación para realizar los envíos",
          src: 'Inicio/solicitud.png'
        }, {
          titulo: "Envíos",
          descripcion: "Realización de los envíos correspondientes, y emisión de la notificación de los envíos realizados.",
          src: 'Inicio/envios.png'
        }]
      },
      servicio_init: {
        imagen: {
          src: 'Inicio/24-7.png'
        },
        src: 'Inicio/3.-Plataforma.jpg'
      },
      clientes_canales: {
        titulo: "CLIENTES",
        fondo: 'Nosotros/MiViSer.jpg',
        canales: [{
          titulo: "Primeros 16 canales",
          src: "",
          clientes: [{
            titulo: "Alacena",
            src: 'Clientes/Alacena_icon.jpg'
          }, {
            titulo: "BancoBolivariano",
            src: 'Clientes/BancoBolivariano_icon.png'
          }, {
            titulo: "BancoDelPacificio",
            src: 'Clientes/BancoDelPacifico_icon.png'
          }, {
            titulo: "BancoDelPichincha",
            src: 'Clientes/BancoDelPichincha_icon.png'
          }, {
            titulo: "BancoGuayaquil",
            src: 'Clientes/BancoGuayaquil_icon.png'
          }, {
            titulo: "Bankard",
            src: 'Clientes/Bankard_icon.jpg'
          }, {
            titulo: "Cne",
            src: 'Clientes/Cne_icon.png'
          }, {
            titulo: "Cnt",
            src: 'Clientes/Cnt_icon.png'
          }, {
            titulo: "Dinner Club",
            src: 'Clientes/dinnerClub_icon.jpg'
          }, {
            titulo: "Disney",
            src: 'Clientes/disney_icon.jpg'
          }, {
            titulo: "Don Vitorio",
            src: 'Clientes/DonVitorio.jpg'
          }, {
            titulo: "Doña Gusto",
            src: 'Clientes/doña_gusto.jpg'
          }]
        }, {
          titulo: "Segundos 9",
          src: "",
          clientes: [{
            titulo: "El Gobierno de Todos",
            src: 'Clientes/elGobiernoTodos.png'
          }, {
            titulo: "Gran Aki",
            src: 'Clientes/granAki_icon.jpg'
          }, {
            titulo: "Head Shoulder",
            src: 'Clientes/headShoulder.png'
          }, {
            titulo: "Isabel",
            src: 'Clientes/isabel.png'
          }, {
            titulo: "La Ganga",
            src: 'Clientes/laGanga.png'
          }, {
            titulo: "Mazda",
            src: 'Clientes/mazda.png'
          }, {
            titulo: "Megamaxi",
            src: 'Clientes/megamaxi.png'
          }, {
            titulo: "Movistar",
            src: 'Clientes/movistar.png'
          }, {
            titulo: "Pantene",
            src: 'Clientes/pantene.jpg'
          }, {
            titulo: "Pilsener",
            src: 'Clientes/pilsener.png'
          }, {
            titulo: "Properati",
            src: 'Clientes/properati.png'
          }, {
            titulo: "Pycca",
            src: 'Clientes/pycca.png'
          }]
        }]
      },
      contacto_init: {
        titulo: "ubicacion",
        src: 'Inicio/5.-Contacto.jpg',
        icono: {
          src: 'Inicio/contactanos.png'
        },
        datos: [{
          descripcion: "593 4 2832083 ext. 102",
          src: 'Inicio/phone-08.png'
        }, {
          descripcion: "+593 99157 8671",
          src: 'Inicio/whatsapp_icon-08.png',
          dato: "https://api.whatsapp.com/send?phone=+593991578671"
        }, {
          descripcion: "Noguchi 633 y Huancavilca Edif. Ecobay",
          src: 'Inicio/localizacion-08.png',
          dato: "https://goo.gl/maps/Yo1vfdaSfsnz8m5SA"
        }, {
          descripcion: "trafico@lanubetv.net",
          src: 'Inicio/email_icon-08.png',
          dato: "mailto:trafico@lanubetv.net?subject=Información"
        }]

      }
    };
  }
};
</script>
