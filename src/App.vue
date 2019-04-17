<template>
<v-app class="ma-0 pa-0">
  <div>

    <Toolbar :menus="menu_principal" app></Toolbar>
    <main>
      <Hero :items="hero_layout"></Hero>
      <router-view ></router-view>
    </main>

    <FooterW app :items="footerPath"></FooterW>
  </div>
</v-app>
</template>

<script>
import Toolbar from "./layout/toolbar.vue";
import FooterW from "./layout/footer.vue";
import Hero from "./layout/hero.vue";
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
      menu_principal: [{
          ruta: "/",
          nombre: "Incio"
        },
        {
          ruta: "/nosotros",
          nombre: "Nosotros"
        },
        {
          ruta: "/servicios",
          nombre: "Servicios"
        },
        {
          ruta: "/contacto",
          nombre: "Contacto"
        },
        {
          ruta: "/canalestv",
          nombre: "Canales TV"
        }
      ],
      footerPath: [{
        titulo: "Inicio",
        rutas: [{
            nombre: "Nosotros",
            ruta: "/nosotros"
          },
          {
            nombre: "Servicios",
            ruta: "/servicios"
          },
          {
            nombre: "Contacto",
            ruta: "/contacto"
          },
          {
            nombre: "Canales TV",
            ruta: "/canalestv"
          }
        ]
      }, {
        titulo: "Nosotros",
        rutas: [{
            nombre: "Mision",
            ruta: "/nosotros"
          },
          {
            nombre: "Vision",
            ruta: "/nosotros"
          },
          {
            nombre: "Nicho",
            ruta: "/nosotros"
          }
        ]
      }, {
        titulo: "CanalesTV",
        rutas: [{
            nombre: "Nacionales",
            ruta: "/canalestv"
          },
          {
            nombre: "Internacionales",
            ruta: "/canalestv"
          }
        ]
      }
    ],
      hero_layout: {
        ruta: '/',
        src: require('./assets/Hero/Fondo_Hero.jpg'),
        text: "La forma más amigable, segura e inteligente de hacer tus envíos Digitales desde las productoras hacia los medios de publicidad nacionales e internacionales"

      }
    };
  }
};
</script>

<style>
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
