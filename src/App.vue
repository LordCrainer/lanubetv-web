<template>
  <v-app class="ma-0 pa-0">
    <div>
      <Toolbar :menus="menu_principal" app> </Toolbar>
      <main><router-view> </router-view></main>
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
          nombre: "Empresa"
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
#app {
  font-family: "Khmer", regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
