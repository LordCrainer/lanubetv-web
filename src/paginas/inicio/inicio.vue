<template>
  <div>
    <hero :items="hero_init"></hero>
    <nosotros :items="nosotros_init"></nosotros>
    <ventajas :items="ventajas_init"></ventajas>
    <parallax2 :items="parallax_2" :minHeight="50"></parallax2>
    <canales :items="clientes_canales"></canales>
  </div>
</template>
<script>
import hero from "./hero.vue";
import ventajas from "./ventajas.vue";
import nosotros from "./nosotros.vue";
import canales from "./canales.vue";
import carousel from "./../../componentes/UI/carousel.vue";
import parallax2 from "./../../componentes/UI/parallax2.vue";
export default {
  components: { hero, ventajas, nosotros, canales, carousel, parallax2 },
  name: "Inicio",
  data() {
    return {
      src_logo:
        "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/MRgO-logo_lanubetv.png",

      //https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/yiII-background.jpg
      hero_init: {
        //          'https://www.workday.com/content/dam/web/en-us/images/screenshots/w31/tech-hero-background.jpg/jcr:content/renditions/cq5dam.md.1200.897.jpg',

        //https://d585tldpucybw.cloudfront.net/sfimages/default-source/labs/kendo/kendo-umbrella/umbrella-bg.jpg?sfvrsn=2c25c32e_2

        //
        //https://d585tldpucybw.cloudfront.net/sfimages/default-source/labs/kendo/kendo-umbrella/umbrella-bg.jpg?sfvrsn=2c25c32e_2
        src: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
        text:
          "La forma más amigable, segura e inteligente de hacer tus envíos Digitales desde las productoras hacia los medios de publicidad nacionales e internacionales"
      },
      parallax_2: {
        src:
          "https://static1.squarespace.com/static/56db4b9b07eaa05aaab5f1d8/t/58536783c534a5cc2969dfd9/1481860996287/banner1.jpg?format=2500w"
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
      clientes_canales: [
        {
          titulo: "Primeros 9 canales",
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
                "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/9ar3-gama_icon.png"
            }
          ]
        }
        /* {
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
        titulo: "¿QUIÉNES SOMOS?",
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
