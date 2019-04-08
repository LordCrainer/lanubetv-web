<template>
<section>
  <v-img :style="`background-image: url(${items.fondo});`" class="contacto_form">
    <v-container grid-list-xs fill-height>
      <v-layout row wrap justify-center align-center>
        <v-flex xs12>
          <v-card-text class="text-xs-center display-2 font-weight-black pa-4 white--text">
            {{items.titulo}}
          </v-card-text>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xs fill-height>
            <v-layout row wrap justify-center align-center>
              <v-flex xs12 sm6>

              </v-flex>
              <v-flex xs12 sm6>
                <v-card class="mx-auto " width="400" color="rgba(255, 255, 255, 0.5)">
                  <v-form ref="form"  v-model="valid" lazy-validation class="elevation-5">
                      <v-card-text>
                        <generadorForm :model="model" :schema="schema.fields" :options="options">
                        </generadorForm>
                        <v-card-actions slot="action">
                          <v-btn :disabled="!valid" @click="submit" color="primary">
                            ENVIAR
                          </v-btn>
                          <v-btn @click="clear" color="red" outline>RESET</v-btn>
                        </v-card-actions>
                      </v-card-text>

                  </v-form>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>

        </v-flex>
      </v-layout>

    </v-container>
  </v-img>
</section>
</template>
<script>
import generadorForm from "./../../componentes/Form/generador_form.vue";
export default {
  props: ['items'],
  components: {
    generadorForm
  },
  data() {
    return {
      model: {},
      valid: true,
      options: {},
      schema: {
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
      }
    }
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
  }
};
</script>
<style scoped>
.contacto_form {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: bottom right;
}
.v-input .v-text-field__slot .v-label{
  color: white;
}
.v-label{
  color: rgb(240, 240, 240);
}
input{
  color: white;
}
</style>
