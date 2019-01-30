import Vue from "vue";
import Router from "vue-router";

/*import App from "./App.vue";

import Header from "./componentes/header.vue";
import Footer from "./componentes/footer.vue";*/
import Error404 from "./layout/error404.vue";
import Pagina_Inicio from "./paginas/inicio/inicio.vue";
import Nosotros from "./paginas/nosotros/nosotros.vue";
/*import Productos from "./componentes/Productos/productos.vue";
import Contact from "./componentes/Contact/contact.vue";
import Nosotros from "./componentes/Nosotros/nosotros.vue";*/
Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      name: "EMRESAS",
      path: "/",
      component: Pagina_Inicio
    },
    {
      name: "NOSOTROS",
      path: "/nosotros",
      components: { default: Nosotros }
    },
    {
      name: "SERVICIOS",
      path: "/productos",
      components: { default: Pagina_Inicio }
    },
    {
      name: "CONTACTO",
      path: "/contacto",
      components: {
        default: Pagina_Inicio
      }
    },
    {
      name: "NOSOTROS",
      path: "/nosotros",
      components: {
        default: Pagina_Inicio
      }
    },
    {
      name: "ERROR404",
      path: "*",
      components: { default: Error404 }
    }
  ]
});
