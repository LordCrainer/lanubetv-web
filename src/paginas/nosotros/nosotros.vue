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
        fondo: require('./../../assets/Nosotros/MiViSer.jpg'),
        data: [{titulo: "MISION",text: "La forma más amigable, segura e inteligente de hacer tus envíos Digitales desde las productoras hacia los medios de publicidad nacionales e internacionales", src: require('./../../assets/Nosotros/mision.png')} ,
        {titulo: "VISION",text: "La forma más amigable, segura e inteligente de hacer tus envíos Digitales desde las productoras hacia los medios de publicidad nacionales e internacionales", src: require('./../../assets/Nosotros/vision.png')},
        {titulo: "SERVICIO",text: "Nuestro servicio está dirigo a las agencias de publicidad, agencias de medios y productoras a nivel nacional e internacional, que necesitan realizar envíos de comerciales de televisión a las diferentes estaciones de tv, mediante un sistema sencillo, ágil y confiable", src: require('./../../assets/Nosotros/servicio.png')}]
      }
    };
  }
};
</script>
