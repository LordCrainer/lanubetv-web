<template>
  <v-app class="ma-0 pa-0">
    <div>
      <Toolbar :menus="menu_principal" app> </Toolbar>

      <main><router-view name="Inicio"> </router-view></main>
      <v-layout>
        hola
        <v-flex> <router-view></router-view> </v-flex>
      </v-layout>
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
.headline,
.display-1,
.display-2 {
  font-family: "Khmer", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
