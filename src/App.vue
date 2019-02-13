<template>
  <v-app class="ma-0 pa-0">
    <div>
      <Toolbar :menus="menu_principal" app> </Toolbar>

      <main><router-view name="Inicio"> </router-view></main>
      <main>
        <v-card height="300" color="blue lighten-3">
          <v-layout align-center justify-center fill-height>
            <v-card-text class="text-xs-center"> PARALLAX </v-card-text>
          </v-layout>
        </v-card>
        <router-view></router-view>
      </main>

      <FooterW app></FooterW>
    </div>
  </v-app>
</template>

<script>
import Toolbar from "./layout/toolbar.vue";
import FooterW from "./layout/footer.vue";
export default {
  name: "App",
  components: {
    Toolbar,
    FooterW
  },
  data() {
    return {
      rutaActual: "",
      menu_principal: [
        {
          ruta: "/",
          nombre: "Incio"
        },
        {
          ruta: "/nosotros",
          nombre: "Nosotros"
        },
        {
          ruta: "/servicio",
          nombre: "Servicio"
        },
        {
          ruta: "/contacto",
          nombre: "Contacto"
        },
        {
          ruta: "/canalestv",
          nombre: "Canales TV"
        }
      ]
    };
  }
};
</script>

<style>
.white--background {
  background-color: white;
}
body {
  //background-images: url("https://stmed.net/sites/default/files/white-blue-wallpapers-25353-4347074.jpg");
  background: linear-gradient(
    135deg,
    rgb(16, 60, 145) 20%,
    rgba(248, 172, 0, 0.1) 20%,
    rgba(248, 172, 0, 0.1) 75%,
    rgb(16, 60, 145) 75%
  );
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
</style>
