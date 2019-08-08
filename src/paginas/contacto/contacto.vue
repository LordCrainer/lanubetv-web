// Regular expression from W3C HTML5.2 input specification: //
//https://www.w3.org/TR/html/sec-forms.html#email-state-typeemail
<style></style>

<template>
<div>
  <mapaUbicacion :items="mapaUbicacionData"></mapaUbicacion>
  <contactoForm :items="contactoFormData"></contactoForm>
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
        },
        link: "https://goo.gl/maps/YrRDinzK8VWWC2V17"
      },
      contactoFormData: {
        titulo: "CONTACTANOS",
        fondo: require('./../../assets/Contacto/2-formulario_Principal_Imagen.jpg'),
        datos: [{
            descripcion: "593-4-2832083 ext. 102",
            src: require('./../../assets/Inicio/phone-08.png')
          },
          {
            descripcion: "+593 99 127 5473",
            src: require('./../../assets/Inicio/whatsapp_icon-08.png'),
            dato: "https://api.whatsapp.com/send?phone=+593991275473"
          },
          {
            descripcion: "Noguchi 633 y Huancavilca Edif. Ecobay",
            src: require('./../../assets/Inicio/localizacion-08.png'),
              dato: "https://goo.gl/maps/Yo1vfdaSfsnz8m5SA"
          },
          {
            descripcion: "trafico@lanubetv.net",
            src: require('./../../assets/Inicio/email_icon-08.png'),
              dato: "mailto:trafico@lanubetv.net?subject=Información"
          }
        ]


      }
    };
  }
};
</script>
