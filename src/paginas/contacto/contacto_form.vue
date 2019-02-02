<template>
  <v-layout align-center justify-center>
    <v-card style="min-width: 350px; width:500px;" class="mx-auto ">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        class="pa-3 pt-4 elevation-5"
      >
        <v-text-field
          v-model="name"
          :rules="nameRules"
          :counter="10"
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
        <!--
          <v-select
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            label="Item"
            required
          ></v-select>
        -->

        <!--
          <v-radio-group v-model="radio" row>
            <v-radio
              label="Servicio al Cliente"
              value="Servicio al Cliente"
            ></v-radio>
            <v-radio label="Soporte" value="Soporte Técnico"></v-radio>
            <v-radio label="Cobranza" value="Cobranza"></v-radio>
          </v-radio-group>
        -->
        <v-textarea
          label="Comentario"
          v-model="textArea"
          :rules="textAreaRules"
          auto-grow
          box
          rows="3"
          :counter="500"
        ></v-textarea>
        <!--
          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
          ></v-checkbox>
        -->

        <v-btn :disabled="!valid" @click="submit" color="primary">
          ENVIAR
        </v-btn>
        <v-btn @click="clear" color="red" outline>RESET</v-btn>
      </v-form>
    </v-card>
  </v-layout>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Nombre requerido",
      v => (v && v.length <= 10) || "Nombre debe ser menor a 10 carácteres"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail requerido",
      v =>
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(v) ||
        "E-mail debe ser válido"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    radio: "Servicio al Cliente",
    textAreaRules: [
      v => !!v || "Escriba un comentario",
      v => (v && v.length > 0) || "Digite un comentario"
    ],
    textArea: null,
    user: "user_ANaMPedZDtBmrIV2T25NV",
    template: "mailRespuesta",
    enviarCorreo: "",
    correo: "info@ecoblock-up.com",
    asunto: "INFORMACIÓN"
  }),

  methods: {
    remplazar_texto(texto) {
      return texto.replace(/ /g, "%20");
    },
    submit() {
      if (this.$refs.form.validate()) {
        /*axios({
          type: "POST",
          url:
            "https://api.elasticemail.com/v2/email/send?apikey=94DAF66E-4DF6-4E8E-AF96-D094A8D21DF3&subject=&from=&fromName=&sender=&senderName=&msgFrom=&msgFromName=&replyTo=&replyToName=&to=&msgTo=&msgCC=&msgBcc=&lists=&segments=&mergeSourceFilename=&dataSource=&channel=&bodyHtml=&bodyText=&charset=&charsetBodyHtml=&charsetBodyText=&encodingType=&template=&headers_firstname=firstname: myValueHere&postBack=&merge_firstname=John&timeOffSetMinutes=&poolName=My Custom Pool&isTransactional=false&attachments=&trackOpens=true&trackClicks=true&utmSource=source1&utmMedium=medium1&utmCampaign=campaign1&utmContent=content1",
          data: {
            key: "8ad552e9-2ad8-4822-989e-cd90123f2ff7",
            message: {
              from_email: "info@ecoblock-up.com",
              to: [
                {
                  email: this.email,
                  name: "‘RECIPIENT NAME (OPTIONAL)’",
                  type: "‘to’"
                },
                {
                  email: "camogan3000@hotmail.com",
                  name: "‘ANOTHER RECIPIENT NAME (OPTIONAL)’",
                  type: "to"
                }
              ],
              autotext: "true",
              subject: "YOUR SUBJECT HERE!",
              html: "YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!"
            }
          }
        }).then(function(response) {
          console.log("valio la pena"); // if you're into that sorta thing
        });*/

        let enviar =
          "mailto:" +
          this.correo +
          "?subject=" +
          this.asunto +
          "&body=" +
          this.remplazar_texto(this.textArea);
        console.log(enviar);
        window.location.href = enviar;

        //this.$refs.form.reset();
        // Native form submission is not yet supported
        /*axios.post("/api/submit", {
          name: this.name,
          email: this.email,
          select: this.select,
          checkbox: this.checkbox
        });*/
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>
