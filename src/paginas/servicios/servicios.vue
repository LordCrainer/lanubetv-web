<style scoped>



</style>

<template>
<div>
  <allServices :items="data_servicios"></allServices>
</div>
</template>

<script>
import allServices from './TodosServicios.vue'
export default {
  components: {
    allServices
  },
  data() {
    return {
      data_servicios: {
        titulo: "Servicios",

        servicios: [
          {
          titulo: "Distribución de Comerciales",
          color: 'rgb(124, 124, 124)',
          font_color: "white",
          reverse: true,
          img: [{
            alt: "",
            src: require('./../../assets/Servicios/producionAudivisual.jpg')
          }],
          descripcion: "Creamos contenido con la mejor experiencia y espacio para realizar",

        },
        {
          titulo: "3D y 2D",
          color: 'white',
          font_color: "black",
          reverse: false,
          img: [{
            alt: "",
            src: require('./../../assets/Servicios/3dy2d.jpg')
          }],
          descripcion: "",

        },
        {
          titulo: "Desarrollo web",
          color: 'rgb(124, 124, 124)',
          font_color: "white",
          reverse: true,
          img: [{
            alt: "",
            src: require('./../../assets/Servicios/desydisweb.jpg')
          }],
          descripcion: "",

        }]
      }
    }
  }
}
</script>
