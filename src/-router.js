import Vue from "vue";
import Router from "vue-router";
import ImagenMixin from "./mixins/imagen.vue"

import Error404 from "./layout/error404.vue";
import Pagina_Inicio from "./paginas/principal/inicio.vue";
import Nosotros from "./paginas/nosotros/nosotros.vue";
import Contacto from "./paginas/contacto/contacto.vue";
import CanalesTV from "./paginas/canales/canalestv.vue";
import Servicio from "./paginas/servicios/servicios.vue";
import UnicoServicio from "./paginas/servicios/unicoServicio.vue"
Vue.use(Router);
Vue.mixin(ImagenMixin);
export default new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    };
  },
  routes: [{
      name: "INICIO",
      path: "/",
      component: Pagina_Inicio,
      meta: {
        titulo: "LANUBETV",
        descripcion: "La forma más amigable, segura e inteligente de hacer tus envíos Digitales desde las productoras hacia los medios de publicidad nacionales e internacionales.",
        src: 'Hero/hero_inicio.png'
      }
    },
    {
      name: "NOSOTROS",
      path: "/nosotros",
      components: {
        default: Nosotros
      },
      meta: {
        titulo: "NOSOTROS",
        descripcion: "Somos una empresa ecuatoriana, dedicada a la prestación de servicios digitales a través de nuestra plataforma web, desarrollando, pensando y creando soluciones inteligentes a nuestros clientes.",
        src: 'Hero/hero_nosotros.png'

      }
    },
    {
      name: "SERVICIOS",
      path: "/servicios",
      meta: {
        titulo: "Servicios",
        descripcion: "Nuestro principal trabajo es la distribución de comerciales, pero también somos capaces de realizar otros servicios.",
        src: 'Hero/hero_servicios.png'
      },
      components: {
        default: Servicio
      }
    },
    {
      name: "UnicoServicio",
      path: "/servicios/:unicoServicio",
      component: UnicoServicio,
      meta: {
        titulo: "",
        descripcion: "",
        src: 'Hero/hero_servicios.png'

      }
    },
    {
      name: "CONTACTO",
      path: "/contacto",
      components: {
        default: Contacto
      },
      meta: {
        titulo: "Contactanos",
        descripcion: "Si deseas mayor información, no dudes en comunicarte con nosotros, que inmediatamente te atenderemos.",
        src: 'Hero/hero_contactos.png'

      }
    },
    {
      name: "CANALESTV",
      path: "/canalestv",
      components: {
        default: CanalesTV
      },
      meta: {
        titulo: "Canales Tv",
        descripcion: "Trabajamos con canales de televisión tanto Nacionales como Internacionales.",
        src: 'Hero/hero_canales.png'
      }
    },
    {
      name: "ERROR404",
      path: "*",
      component: Error404,
      meta: {
        titulo: "Error",
        descripcion: "Página no encontrada",
        src: 'Hero/hero_inicio.png'
      }
    }
  ]
});
