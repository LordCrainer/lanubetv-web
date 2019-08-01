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
        resumen: "Mediante nuestra plataforma web somos capaces de distribuir los comerciales desde las agencias hasta los respectivos canales, de una manera ágil, rápida y segura. ",

      },
          {
          titulo: "PRODUCCIÓN AUDIOVISUAL",
          color: 'rgb(124, 124, 124)',
          font_color: "white",
          reverse: true,
          img: [{
            alt: "",
            src: require('./../../assets/Servicios/producionAudivisual.jpg')
          },
          {
            alt: "",
            src: require('./../../assets/Servicios/producionAudivisual2.jpg')
          }],
          resumen: "Creamos contenido audiovisual con la mejor tecnología, y el espacio de trabajo necesario. Tenemos más de 8 años de experiencia en este campo, por lo cual brindar una excelente calidad es nuestra prioridad."

        },
        {
          titulo: "DISEÑO 3D y 2D",
          color: 'white',
          font_color: "black",
          reverse: false,
          img: [{
            alt: "",
            src: require('./../../assets/logo.png')
          },
          {
            alt: "",
            src: require('./../../assets/Servicios/Modelado3D.jpg')
          },
          {
            alt: "",
            src: require('./../../assets/Servicios/Modelado3D2.jpg')
          }],
          resumen: "Realizamos todo tipo de trabajos gráficos, vectoriales, modelados y renderizados en 2D y 3D. Disponemos de los programas, equipos y experencia necesaria para entregarles un excelente trabajo.",

        },
        {
          titulo: "DESARROLLO WEB",
          color: 'rgb(124, 124, 124)',
          font_color: "white",
          reverse: true,
          img: [{
            alt: "",
            src: require('./../../assets/Servicios/desydisweb.jpg')
          },
          {
            alt: "",
            src: require('./../../assets/Servicios/desydisweb2.jpg')
          },
          {
            alt: "",
            src: require('./../../assets/Servicios/desydisweb3.jpg')
          },
          {
            alt: "",
            src: require('./../../assets/Servicios/desydisweb4.jpg')
          }],
          resumen: "Desarrollamos y diseñamos tanto páginas como aplicaciones web, con el fin de darles la solución más conveniente que se ajuste a sus necesidades. ",

        }]
      }
    }
  }
}
</script>
