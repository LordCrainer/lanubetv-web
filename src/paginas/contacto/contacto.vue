// Regular expression from W3C HTML5.2 input specification: //
https://www.w3.org/TR/html/sec-forms.html#email-state-typeemail <style></style>

<template>
  <v-container>
    <v-layout justify-center align-center>
      <slot></slot> <contactoForm></contactoForm> </v-layout
  ></v-container>
</template>
<script>
import contactoForm from "./contacto_form.vue";
//Expresión Regular
var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
//Algoritmo para su exportación al template
export default {
  components: {
    contactoForm
  },
  data() {
    return {
      features: ["Reactivity", "Encapsulation", "Data Binding"],
      submitted: false
    };
  },
  methods: {
    // submit form handler
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
    }
  },
  watch: {
    // watching nested property
    "email.value": value => {
      //function(value){}  ==>  (value)=> {}
      this.validate("email", value);
    }
  }
};
</script>
