<template>
<div>
  <MiViSer :items="items"></MiViSer>
</div>
</template>
<script>
import MiViSer from './MiViSer.vue'
export default {
  components: {
    MiViSer
  },
  data() {
    return {
      items: {
        titulo: "NOSOTROS",
        fondo: require('./../../assets/Nosotros/MiViSer.png'),
        data: [{
            titulo: "MISION",
            text: "Convertirnos en la mejor alternativa para el envío de comerciales de TV y servicios digitales anexos para nuestros clientes, siguiendo estándares nacionales e internacionales de calidad, eficiencia y utilizando la tecnología mas moderna, con una constante actualización.",
            src: require('./../../assets/Nosotros/mision.png')
          },
          {
            titulo: "VISION",
            text: "Buscar la excelencia en la provisión de todos nuestros servicios digitales, a través del uso de la mejor tecnología disponible del mercado y la preparación continua de nuestro recurso humano, en beneficio de la comunidad, clientes y la empresa.",
            src: require('./../../assets/Nosotros/vision.png')
          },
          {
            titulo: "SERVICIO",
            text: "Nuestro servicio está dirigo a las agencias de publicidad, agencias de medios y productoras a nivel nacional e internacional, que necesitan realizar envíos de comerciales de televisión a las diferentes estaciones de tv, mediante un sistema sencillo, ágil y confiable",
            src: require('./../../assets/Nosotros/servicio.png')
          }
        ]
      }
    };
  }
};
</script>
