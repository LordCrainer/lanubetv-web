<style scoped>
.border_hover:hover {
  border-left: 15px solid rgba(15, 15, 15, 0.5);
  background-color: rgba(15, 15, 15, 0.35);
  color: white;
  font-weight: bold;
}
</style>

<template>
  <v-list  >
    <v-list-tile
      :class="clases"
      v-for="(menu, index) in items"
      :key="index"
      @click="nombreRuta(menu.ruta);"
      :to="menu.ruta"
      ripple
    >
      <slot name="listName" :data="menu" :index="index"></slot>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  props: ["items", "path", "clases"],
  data() {
    return {
      tab: null
      //:to="path[index]"
    };
  },
  methods: {
    nombreRuta(ruta) {
      this.$emit("epath", ruta);
    }
  }
};
</script>
