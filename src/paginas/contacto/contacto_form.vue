<style scoped>
.contacto_form {
  height: 100%;
  min-height: 90vmin;
  width: 100%;
  background-size: cover;
  background-position: bottom right;
}

.theme--light.v-label {
  color: rgb(255, 255, 0);
}
</style>

<template>
<section>
  <v-img :style="`background-image: url(${items.fondo});`" class="contacto_form">
    <v-layout row wrap justify-center align-center fill-height>
      <v-flex xs12>
        <v-card-text class="text-xs-center display-2 font-weight-black py-0 pt-4 white--text">
          {{items.titulo}}
        </v-card-text>
      </v-flex>
      <v-flex xs12>
        <v-container grid-list-xs fill-height style="max-width: 1500px;">
          <v-layout row wrap justify-center align-center>
            <v-flex xs12 sm6>
              <v-container grid-list-xs,sm,md,lg,xl fill-height>
                <v-layout wrap row justify-center align-center>
                  <v-flex xs12 v-for="(dato,indice) in items.datos" :key="indice" class="py-2">
                    <div data-aos="zoom-in" data-aos-offset="0">
                      <v-layout wrap row align-center justify-center>
                        <v-btn fab dark medium color="white" :href="dato.dato" target="_blank">
                          <v-avatar size="50" tile>
                            <img :src="dato.src" alt="alt">
                          </v-avatar>
                        </v-btn>
                        <v-flex xs12 sm9>
                          <h2 class="text-xs-center text-sm-left white--text">{{dato.descripcion}}</h2>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
            <v-flex xs12 sm6>
              <v-card hover class="mx-auto" width="450" style="min-width:350px;" color="rgba(0, 0, 0, 0.30)">
                <v-form ref="form" v-model="valid" lazy-validation>
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
      asuntoMail: "Información",
      Emails: ["ventas@lanubetv.net", "trafico@lanubetv.net", "soporte@lanubetv.net"],
      EnviarA: "trafico@lanubetv.net",
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
            size: "sm12",
            dark: true
          },

          {
            type: "email",
            label: "Email",
            model: "email",
            //placeholder: "Teléfono",
            rules: "required",
            featured: true,
            required: true,
            dark: true
          },/*
          {
            type: "select",
            label: "Departamento",
            model: "departamento",
            values: ['Ventas', "Tráfico", "Soporte"],
            required: true,
            featured: true,
            rules: "requiredMultiple",
            opciones: {
              chips: true,
              multiple: true,
              dark: true,
              color: "blue",
              'deletable-chips': true
            }
          },*/ {
            type: "textarea",
            label: "Comentario",
            model: "comentario",
            counter: "350",
            row: "6",
            //placeholder: "Tu nombre",
            rules: "nameRules",
            featured: true,
            required: true,
            dark: true
          }
        ]
      }
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        console.log(this.EmailPorDepartamento(this.model));
        let EnviarMail = "mailto:" +
          this.EnviarA + "?subject=" + this.asuntoMail + "&body=" + this.model.comentario
        // Native form submission is not yet supported
        console.log(EnviarMail);
        window.location.href = EnviarMail
      }
    },
    clear() {
      this.$refs.form.reset();
    },
    EmailPorDepartamento(valor) {
      this.Emails
    }
  }
};
</script>
