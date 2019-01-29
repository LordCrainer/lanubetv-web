<template>
  <v-tabs slot="extension" v-model="tab" color="transparent" grow>
    <v-tabs-slider
      style="border: 2px solid black;"
      :color="clases.split('--')[0]"
    ></v-tabs-slider>
    <v-tab
      style="font-size: 13px;"
      v-for="menu in menus"
      :key="menu.nombre"
      @click="nombreRuta(menu.ruta);"
      :to="menu.ruta"
      class="font-weight-black "
      :class="clases"
    >
      {{ menu.nombre }}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  props: ["menus", "color", "clases"],
  data() {
    return {
      show: false,
      //item.items == undefined || item.items.length == 0
      //    ? ''
      //    : 'keyboard_arrow_down'
      tab: null
    };
  },
  methods: {
    nombreRuta(ruta) {
      this.$emit("epath", ruta);
      return ruta;
    }
  }
};
</script>
<style>
#navbar {
}
</style>
