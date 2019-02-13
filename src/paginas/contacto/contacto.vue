// Regular expression from W3C HTML5.2 input specification: //
https://www.w3.org/TR/html/sec-forms.html#email-state-typeemail <style></style>

<template>
  <v-container grid-list-xs pa-4>
    <v-layout wrap row justify-center align-center>
      <v-flex xs12>
        <strong>{{ model }}</strong>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          class="pa-3 pt-4 elevation-5"
        >
          <v-card class="mx-auto" style="min-width: 350px; width:500px;">
            <v-card-text class="text-xs-center pa-4 headline">
              {{ schema.Titulo }}
            </v-card-text>
            <v-card-text>
              <generadorForm
                :model="model"
                :schema="schema.fields"
                :options="options"
              >
              </generadorForm>
              <v-card-actions>
                <v-btn :disabled="!valid" @click="submit" color="primary">
                  ENVIAR
                </v-btn>
                <v-btn @click="clear" color="red" outline>RESET</v-btn>
              </v-card-actions>
            </v-card-text>
          </v-card>
        </v-form>
      </v-flex>
      <slot></slot>
    </v-layout>
  </v-container>
</template>
<script>
import contactoForm from "./contacto_form.vue";
import generadorForm from "./../../componentes/Form/generador_form.vue";
//Expresión Regular
var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
//Algoritmo para su exportación al template
export default {
  components: {
    contactoForm,
    generadorForm
  },
  data() {
    return {
      valid: true,
      schema: {
        Titulo: "FORMULARIO",
        fields: [
          {
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
      },
      model: {},
      options: {},
      features: ["Reactivity", "Encapsulation", "Data Binding"],
      submitted: false
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        console.log("Evniar");
      }
    },
    clear() {
      this.$refs.form.reset();
    }
    /* // submit form handler
    submit: function() {
      this.submitted = true;
    }, // validate by type and value
    validate: function(type, value) {
      if (type === "email") {
        this.email.valid = this.isEmail(value) ? true : false;
      }
    }, // check for valid email adress
    isEmail: function(value) {
      return emailRegExp.test(value);
    }, // check or uncheck all
    checkAll: function(event) {
      this.selection.features = event.target.checked ? this.features : [];
    }*/
  },
  watch: {
    /*// watching nested property
    "email.value": value => {
      //function(value){}  ==>  (value)=> {}
      this.validate("email", value);
    }*/
  }
};
</script>
