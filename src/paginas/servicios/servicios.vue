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
          img: [{
            alt: "",
            src: require('./../../assets/Servicios/producionAudivisual.jpg')
          }],
          descripcion: "Creamos contenido con la mejor experiencia y espacio para realizar",

        },
        {
          titulo: "Distribución de Comerciales",
          color: 'rgb(124, 124, 124)',
          img: [{
            alt: "",
            src: require('./../../assets/Servicios/3dy2d.jpg')
          }],
          descripcion: "",

        },
        {
          titulo: "Distribución de Comerciales",
          color: 'rgb(124, 124, 124)',
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
