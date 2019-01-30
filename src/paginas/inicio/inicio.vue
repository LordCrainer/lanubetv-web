<template>
  <div>
    <parallax
      :src="parallax_init.src"
      style="height: 100vh;"
      :text="parallax_init.text"
    ></parallax>
    <ventajas :items="ventajas_init"></ventajas>
  </div>
</template>
<script>
import ventajas from "./ventajas.vue";
import carousel from "./../../componentes/UI/carousel.vue";
import parallax from "./../../componentes/UI/parallax.vue";
export default {
  components: { ventajas, carousel, parallax },
  data() {
    return {
      parallax_init: {
        src:
          "https://www.altonivel.com.mx/assets/images/Actualidad/Mexico/Elecciones/nube.jpg",
        text:
          "La forma más amigable e inteligente de realizar tus envíos, desde tu fuente de trabajo hacia los medios de publicidad"
      },
      carousel_init: [
        {
          src:
            "https://www.sage.com/na/~/media/site/sagena/responsive/images/smallbiz/section-clouds.jpg"
        }
      ],
      ventajas_init: [
        {
          titulo: "Servicio",
          descripcion: "Las 24 horas al día los 7 días de la semana",
          src:
            "https://www.damen.com/-/media/New-Corporate-Damen/Images/Services/Services_logo.png?la=es-ES"
        },
        { titulo: "Conversion", descripcion: "" },
        { titulo: "Verificación", descripcion: "" }
      ]
    };
  }
};
</script>
