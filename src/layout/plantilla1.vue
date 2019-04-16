<style scoped>



</style>

<template >
<v-img :style="`background-image: url(${items.fondo});`" class="contacto_form">
  <v-container grid-list-xs fill-height>
    <v-layout row wrap justify-center align-center>
    </v-layout>
  </v-container>
</v-img>
</template>

<script>
export default {
  props: [items]
}
</script>
