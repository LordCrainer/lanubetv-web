// Regular expression from W3C HTML5.2 input specification: //
//https://www.w3.org/TR/html/sec-forms.html#email-state-typeemail
<style></style>

<template>
<div>
  <mapaUbicacion :items="mapaUbicacionData">

  </mapaUbicacion>
  <contactoForm :items="contactoFormData">
  </contactoForm>
</div>
</template>
<script>
import mapaUbicacion from "./mapaUbicacion.vue"
import contactoForm from "./contacto_form.vue";
import generadorForm from "./../../componentes/Form/generador_form.vue";
//Expresión Regular

//Algoritmo para su exportación al template
export default {
  components: {
    contactoForm,
    generadorForm,
    mapaUbicacion
  },
  data() {
    return {
      valid: true,
      /*schema: {
        Titulo: "FORMULARIO",
        fields: [{
            type: "text",
            label: "Nombre",
            model: "nombre",
            counter: "15",
            //placeholder: "Tu nombre",
            rules: "nameRules",
            featured: true,
            required: true,
            size: "sm12"
          },

          {
            type: "email",
            label: "Email",
            model: "email",
            //placeholder: "Teléfono",
            rules: "required",
            featured: true,
            required: true
          },
          {
            type: "textarea",
            label: "Comentario",
            model: "comentario",
            counter: "350",
            row: "2",
            //placeholder: "Tu nombre",
            rules: "nameRules",
            featured: true,
            required: true
          }
        ]
      },*/
      model: {},
      options: {},
      features: ["Reactivity", "Encapsulation", "Data Binding"],
      submitted: false,
      mapaUbicacionData: {
        titulo: "NUESTRA UBICACIÓN",
        fondo: require('./../../assets/Contacto/1.-Ubicacion.jpg'),
        mapa: {
          titulo: 'LANUBETV',
          src: require('./../../assets/Contacto/mapa_lanubetv.png')
        }
      },
      contactoFormData: {
        titulo: "CONTACTANOS",
        fondo: require('./../../assets/Contacto/2-formulario_Principal_Imagen.jpg')
      }
    };
  }
};
</script>
