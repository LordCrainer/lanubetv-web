<template>
  <div id="app">
    <Layout :menus="menu_principal"> </Layout>
    <router-view></router-view>
  </div>
</template>

<script>
import Layout from "./layout/toolbar.vue";
export default {
  name: "App",
  components: {
    Layout
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
