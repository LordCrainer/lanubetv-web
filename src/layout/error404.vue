<template>
  <section style="height: 100vh;">
    <v-container fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8>
          <v-card>
            <v-img
              class="white--text"
              style="max-height: 450px;"
              src="http://spootmedia.com/wp-content/uploads/2018/06/443809727.jpg"
            >
            </v-img>
            <v-card-text>
              <div>
                <h1 class="grey--text">PAGINA NO ENCONTRADA</h1>
                <slot> </slot> <br />
              </div>
            </v-card-text>
            <v-card-actions>
              <router-link to="/">
                <v-btn color="green" class="white--text font-weight-bold">
                  VOLVER AL INICIO
                </v-btn></router-link
              >
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section >
</template>
<script>
export default {
  created() {
    this.nombreRuta();
  },
  methods: {
    nombreRuta() {
      this.$emit("epath", "ERROR 404");
    }
  }
};
</script>
