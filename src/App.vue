<template>
  <div>
    <Toolbar :menus="menu_principal"> </Toolbar>

    <router-view></router-view>

    <FooterW></FooterW>
  </div>
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
