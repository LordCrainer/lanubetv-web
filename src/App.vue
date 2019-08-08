<style>
[v-cloak]>* {
  display: none;
}

.white--background {
  background-color: white;
}

.grey--background {
  background-color: rgb(75, 75, 75);
}

body {
  //background-images: url("https://stmed.net/sites/default/files/white-blue-wallpapers-25353-4347074.jpg");
  /*background: linear-gradient(
    135deg,
    rgb(16, 60, 145) 20%,
    rgba(248, 172, 0, 0.1) 20%,
    rgba(248, 172, 0, 0.1) 75%,
    rgb(16, 60, 145) 75%
  );*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


/*section {
  background: linear-gradient(
    135deg,
    rgb(16, 60, 145) 20%,
    rgba(0, 50, 150, 0.5) 40%,
    rgba(0, 50, 150, 0.5) 60%,
    rgb(16, 60, 145) 80%
  );
}*/

.headline,
.display-1,
.display-2 {
  font-family: "Khmer", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.parallaxEffect {
  /* Set a specific height */
  min-height: 100vh;
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<template>
<v-app class="ma-0 pa-0">
  <div>

    <Toolbar :menus="menu_principal.rutas" app></Toolbar>
    <main>
      <Hero :items="hero_layout"></Hero>
      <router-view id="contenido"></router-view>
    </main>

    <FooterW app :items="menu_principal"></FooterW>
  </div>
</v-app>
</template>

<script>
import Toolbar from "./layout/toolbar.vue";
import FooterW from "./layout/footer.vue";
import Hero from "./layout/hero.vue";
var obj = require("./app.json");
export default {
  name: "App",
  components: {
    Toolbar,
    FooterW,
    Hero
  },
  data() {
    return {
      rutaActual: "",
      menu_principal: {
        rutas: [{
            titulo: "Inicio",
            ruta: '/'
          },
          {
            titulo: "Nosotros",
            icon: '',
            ruta: '/nosotros',
            subrutas: [{
                nombre: "Mision",
                ruta: "/nosotros"
              },
              {
                nombre: "Vision",
                ruta: "/nosotros"
              }
            ]
          },
          {
            titulo: 'Servicios',
            ruta: '/servicios',
            flagGroup: true,
            subrutas: [{
                nombre: 'Diseño 3D y 2D',
                ruta: '/servicios/diseno-3d-2d'
              }, {
                nombre: 'Producción Audivisual',
                ruta: '/servicios/produccion-audivisual'
              },
              {
                nombre: 'Distribución de Comerciales',
                ruta: '/servicios/distribucion-comerciales'
              }
            ]
          },
          {
            titulo: "Contacto",
            ruta: '/contacto',
            subrutas: [{
              nombre: "Ubicación",
              ruta: "/contacto"
            }, {
              nombre: "Contactar",
              ruta: "/contacto"
            }]
          },
          {
            titulo: "CanalesTV",
            ruta: '/canalestv',
            subrutas: [{
              nombre: "Nacionales",
              ruta: "/canalestv"
            }, {
              nombre: "Internacionales",
              ruta: "/canalestv"
            }]
          },
          {
            titulo: 'Plataforma',
            flagGroup: true,
            subrutas: [{
              nombre: 'Envío Digitales',
              ruta_externa: 'https://app.lanubetv.net',
              flagTarget: true
            }]
          }
        ],
        datos: [{
            icon: "phone",
            title: "593-4-2832083 ext. 102 "
          },
          {
            icon: "smartphone",
            title: "+593 99 127 5473",
            icon2: "save",
            dato: "https://api.whatsapp.com/send?phone=+593991275473"
          },
          {
            icon: "location_on",
            title: "Noguchi 633 y Huancavilca Edif. Ecobay ",
            dato: "https://goo.gl/maps/Yo1vfdaSfsnz8m5SA"
          },
          {
            icon: "mail_outline",
            title: "trafico@lanubetv.net",
            dato: "mailto:trafico@lanubetv.net?subject=Información"
          }
        ]
      },
      hero_layout: {
        ruta: '/',
        src: require('./assets/Hero/Fondo_Hero.png'),
        text: "La forma más amigable, segura e inteligente de hacer tus envíos Digitales desde las productoras hacia los medios de publicidad nacionales e internacionales"

      }
    };
  }
};
</script>
