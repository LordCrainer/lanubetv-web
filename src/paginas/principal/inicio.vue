<style>
  .v-carousel__prev .v-btn .v-btn__content .v-icon, .v-carousel__next .v-btn .v-btn__content .v-icon{
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
        }, {
          titulo: "Verificación",
          descripcion: "Verificación de duración del comercial, para certificar que coincide con la duración contratada.",
          src: require('./../../assets/Inicio/verificacion.png')
        }, {
          titulo: "Conversión",
          descripcion: "Conversión en alta calidad del máster al formato específico de cada canal seleccionado para envío.",
          src: require('./../../assets/Inicio/conversion.png')
        }, {
          titulo: "Notificación",
          descripcion: "Notificación al cliente, en caso de existir alguna novedad con el archivo",
          src: require('./../../assets/Inicio/notificacion.png')
        }, {
          titulo: "Solicitud",
          descripcion: "Solicitud vía email de la aprobación para realizar los envíos",
          src: require('./../../assets/Inicio/solicitud.png')
        }, {
          titulo: "Envíos",
          descripcion: "Realización de los envíos correspondientes, y emisión de la notificación de los envíos realizados.",
          src: require('./../../assets/Inicio/envios.png')
        }]
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
          titulo: "Primeros 16 canales",
          src: "",
          clientes: [{
            titulo: "Alacena",
            src: require('./../../assets/Clientes/Alacena_icon.jpg')
          }, {
            titulo: "BancoBolivariano",
            src: require('./../../assets/Clientes/BancoBolivariano_icon.png')
          }, {
            titulo: "BancoDelPacificio",
            src: require('./../../assets/Clientes/BancoDelPacifico_icon.png')
          }, {
            titulo: "BancoDelPichincha",
            src: require('./../../assets/Clientes/BancoDelPichincha_icon.png')
          }, {
            titulo: "BancoGuayaquil",
            src: require('./../../assets/Clientes/BancoGuayaquil_icon.png')
          }, {
            titulo: "Bankard",
            src: require('./../../assets/Clientes/Bankard_icon.jpg')
          }, {
            titulo: "Cne",
            src: require('./../../assets/Clientes/Cne_icon.png')
          }, {
            titulo: "Cnt",
            src: require('./../../assets/Clientes/Cnt_icon.png')
          }, {
            titulo: "Dinner Club",
            src: require('./../../assets/Clientes/dinnerClub_icon.jpg')
          }, {
            titulo: "Disney",
            src: require('./../../assets/Clientes/disney_icon.jpg')
          }, {
            titulo: "Don Vitorio",
            src: require('./../../assets/Clientes/DonVitorio.jpg')
          }, {
            titulo: "Doña Gusto",
            src: require('./../../assets/Clientes/doña_gusto.jpg')
          }]
        }, {
          titulo: "Segundos 9",
          src: "",
          clientes: [{
            titulo: "El Gobierno de Todos",
            src: require('./../../assets/Clientes/elGobiernoTodos.png')
          }, {
            titulo: "Gran Aki",
            src: require('./../../assets/Clientes/granAki_icon.jpg')
          }, {
            titulo: "Head Shoulder",
            src: require('./../../assets/Clientes/headShoulder.png')
          }, {
            titulo: "Isabel",
            src: require('./../../assets/Clientes/isabel.png')
          }, {
            titulo: "La Ganga",
            src: require('./../../assets/Clientes/laGanga.png')
          }, {
            titulo: "Mazda",
            src: require('./../../assets/Clientes/mazda.png')
          }, {
            titulo: "Megamaxi",
            src: require('./../../assets/Clientes/megamaxi.png')
          }, {
            titulo: "Movistar",
            src: require('./../../assets/Clientes/movistar.png')
          }, {
            titulo: "Pantene",
            src: require('./../../assets/Clientes/pantene.jpg')
          }, {
            titulo: "Pilsener",
            src: require('./../../assets/Clientes/pilsener.png')
          }, {
            titulo: "Properati",
            src: require('./../../assets/Clientes/properati.png')
          }, {
            titulo: "Pycca",
            src: require('./../../assets/Clientes/pycca.png')
          }]
        }]
      },
      contacto_init: {
        titulo: "ubicacion",
        src: require('../../assets/Inicio/5.-Contacto.jpg'),
        icono: {
          src: require('./../../assets/Inicio/contactanos.png')
        },
        datos: [{
          descripcion: "593 4 2832083 ext. 102",
          src: require('./../../assets/Inicio/phone-08.png')
        }, {
          descripcion: "+593 99157 8671",
          src: require('./../../assets/Inicio/whatsapp_icon-08.png'),
          dato: "https://api.whatsapp.com/send?phone=+593991578671"
        }, {
          descripcion: "Noguchi 633 y Huancavilca Edif. Ecobay",
          src: require('./../../assets/Inicio/localizacion-08.png'),
          dato: "https://goo.gl/maps/Yo1vfdaSfsnz8m5SA"
        }, {
          descripcion: "trafico@lanubetv.net",
          src: require('./../../assets/Inicio/email_icon-08.png'),
          dato: "mailto:trafico@lanubetv.net?subject=Información"
        }]

      }
    };
  }
};
</script>
