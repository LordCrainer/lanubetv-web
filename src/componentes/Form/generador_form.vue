<template>
  <div>
    <v-flex
      v-for="(field, index) in schema"
      :key="index + 1"
      :class="[!field.size ? size : field.size]"      >
      <div v-if="field.type != 'Add_Fields'">
        <formField
          :field="field"
          :value="model[field.model]"
          @input="updateForm(model, field.model, $event);"
        >
        </formField>
        <v-spacer></v-spacer>
      </div>
      <div v-else>
        <v-card class="mx-auto pa-2" style="max-width: 750px;">
          <v-card-text class="text-xs-center">
            <h1>{{ field.schema.Titulo }}</h1>
          </v-card-text>
          <v-form @submit.prevent="Enviar" ref="formulario" lazy-validation>
            <v-container
              v-for="(submodel, index_sub) in model[field.model]"
              :key="index_sub * 2"
              grid-list-xs
              text-xs-center
            >
              <v-layout row wrap>
                <v-flex xs2 class="mx-auto pa-4">
                  <v-btn
                    icon
                    color="blue darkn-3"
                    @click="
                      Eliminar_Elemento(
                        model,
                        field.model,
                        index_sub,
                        submodel,
                        model[field.model]
                      );
                    "
                    dark
                  >
                    <v-icon>delete</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex xs10>
                  <generadorForm
                    :model="submodel"
                    :schema="field.schema.fields"
                    :options="field.options"
                  >
                  </generadorForm>
                </v-flex>
              </v-layout>
            </v-container>
            <v-btn
              icon
              color="red darken-2"
              dark
              fab
              v-on:click="
                AgregarElmento(model[field.model], model, field.model);
              "
            >
              <v-icon>add</v-icon>
            </v-btn>
          </v-form>
        </v-card>
      </div>
    </v-flex>
  </div>

</template>

<script>
import formField from "./form_fields.vue";
//import EntradaLista from "./ListIn.vue";

export default {
  name: "generadorForm",
  props: { model: Object, schema: Array, options: Object },
  components: {
    formField
    //EntradaLista
  },
  data() {
    return {
      Campo: "formField",
      Datos_Form: this.model || {},
      size: "xs12",
      model1: {},
      referencia: "form"
    };
  },
  created: function() {
    // On load
  },
  methods: {
    Enviar() {
      if (this.$refs.formulario.validate()) {
        // Native form submission is not yet supported
      }
      console.log("Evniar");
    },
    clear() {
      this.$refs.form.reset();
    },
    Eliminar_Elemento(objeto, campo, indice, sub, model) {
      model.splice(indice, 1);
      //this.$emit("input", objeto);
    },
    AgregarElmento(objeto, ob, campo) {
      if (ob[campo] === undefined) {
        this.$set(ob, campo, []);
      }
      objeto = ob[campo];
      var indice = objeto.length;
      //console.log(indice);
      if (indice === 0 || (indice > 0 && objeto[indice - 1] !== "")) {
        objeto.splice(indice, 0, {});
      }
    },
    updateForm(objeto, fieldName, value) {
      this.$set(objeto, fieldName, value);
      //console.log("Model: ");
      //console.log(objeto);
      this.$emit("input", objeto);
    },
    onBlur: function() {
      console.info("blur");
    },
    onChange: function() {
      console.info("change");
    },
    onFocus: function() {
      console.info("focus");
    }
  }
};
</script>
