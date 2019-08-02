<style lang="css" scoped>



</style>

<template>
<div style="height: 100%">
  <v-menu v-for="menu in items" :key="menu.titulo" bottom open-on-hover offset-y>
    <v-btn flat slot="activator" :to="menu.ruta" :href="menu.ruta_externa" :color="color.split('--')[0]">
      {{menu.titulo}}
      <v-icon v-if="menu.flagGroup">expand_more</v-icon>
    </v-btn>
    <v-list v-if="menu.flagGroup">
      <v-list-tile
      v-for="(subruta, i) in menu.subrutas"
      @click=""
      :key="subruta.nombre"
      :to="subruta.ruta"
      :href="subruta.ruta_externa"
      :target="subruta.flagTarget? '_blank': ''">
      <v-list-tile-content>
        <v-list-tile-title>
          {{ subruta.nombre }}
        </v-list-tile-title>
      </v-list-tile-content>

      </v-list-tile>
    </v-list>
  </v-menu>
</div>
</template>

<script>
export default {
  props: ['items', 'color']
}
</script>
