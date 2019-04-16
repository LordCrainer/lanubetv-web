<style scoped>
.Internacional{
  height: 100vh;
  width: 100%;
  background-size: cover;
}


</style>

<template>

<section>
    <v-img :style="`background-image: url(${items.fondo});`" class="Internacional">
        <v-container grid-list-xs fill-height>
            <v-layout row wrap justify-center align-center>
              <v-flex>

              </v-flex>
            </v-layout>
        </v-container>
    </v-img>
</section>

</template>

<script>

export default {
    props: ['items']
}

</script>
