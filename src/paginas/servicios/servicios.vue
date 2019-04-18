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
        servicios: [{
        titulo: "DISTRIBUCION DE COMERCIALES",
        color: 'white',
        font_color: "black",
        reverse: false,
        img: [{
          alt: "",
          src: require('./../../assets/Servicios/producionAudivisual.jpg')
        },
        {
          alt: "",
          src: require('./../../assets/Servicios/3dy2d.jpg')
        }],
        descripcion: "Brindamos ",

      },
          {
          titulo: "PRODUCCIÓN AUDIOVISUAL",
          color: 'rgb(124, 124, 124)',
          font_color: "white",
          reverse: true,
          img: [{
            alt: "",
            src: require('./../../assets/Servicios/DC_subir.png')
          },
          {
            alt: "",
            src: require('./../../assets/Servicios/DC_enviar.png')
          },
          {
            alt: "",
            src: require('./../../assets/Servicios/DC_preview.png')
          },
          {
            alt: "",
            src: require('./../../assets/Servicios/DC_descargar.png')
          }],
          descripcion: "Creamos contenido con la mejor experiencia y espacio para realizar",

        },
        {
          titulo: "DISEÑO 3D y 2D",
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
          titulo: "DESARROLLO WEB",
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
