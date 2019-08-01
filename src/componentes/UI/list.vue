<style scoped>
.border_hover:hover {
  border-left: 15px solid rgba(15, 15, 15, 0.5);
  background-color: rgba(15, 15, 15, 0.35);
  color: white;
  font-weight: bold;
}
</style>

<template>
<v-list>
  <div v-for="(menu, index) in items" :key="index">
    <slot name="listName" :class="clases" @click="nombreRuta(menu.ruta);" :to="menu.ruta" :href="menu.extRuta" ripple :data="menu" :index="index"></slot>
    <slot name="listGroup" :data="menu" :index="index"></slot>

    <!-- <v-list slot="listGroup" slot-scope="{ data }" v-if="data.flagGroup">
      <v-list-group >
        <v-list-tile slot="activator">
      <v-list-tile-title>{{data.titulo}}</v-list-tile-title>
    </v-list-tile>
        <v-list-tile v-for="subruta in data.subrutas" :key="subruta.nombre" @click="">
          <v-list-tile-title>{{subruta.nombre}}</v-list-tile-title>
        </v-list-tile>
      </v-list-group>
    </v-list> -->
  </div>
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
