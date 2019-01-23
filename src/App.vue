<template>
  <div id="app"><Headerw :menus="menu_principal"></Headerw></div>
</template>

<script>
import Headerw from "./componentes/header.vue";
export default {
  name: "App",
  components: {
    Headerw
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
