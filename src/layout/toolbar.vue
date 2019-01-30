<style scoped>
#list {
  background-color: rgba(255, 255, 255, 0.95);
}
.v-list {
  background-color: rgba(255, 255, 255, 0);
}
</style>

<template>
  <nav v-scroll="onScroll">
    <v-navigation-drawer
      id="list"
      app
      temporary
      hide-overlay
      fixed
      disable-resize-watcher
      v-model="drawer_flag"
      right
    >
      <List
        :items="menus"
        @epath="nombreRuta($event);"
        :clases="[border_class]"
      >
        <v-list-tile
          slot="listName"
          slot-scope="{
            data
          }"
          class="font-weight-bolder"
        >
          <h3>{{ data.nombre }}</h3>
        </v-list-tile>
      </List>
      <v-btn
        fixed
        bottom
        right
        fab
        dark
        color="blue"
        @click.stop="drawer_flag = !drawer_flag;"
      >
        <v-icon>exit_to_app</v-icon>
      </v-btn>
    </v-navigation-drawer>
    <!-- TOOLBAR -->
    <v-toolbar
      app
      fixed
      :dark="offsetTop < 30 ? true : false"
      class="elevation-5 "
      :color="color_toolbar"
      :height="height_toolbar"
    >
      <router-link to="/">
        <img :src="src_logo" alt="alt" width="auto" height="50px" />
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-title :class="color_text" class="font-weight-black display-1">
        {{ titulo }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          id="botonBar"
          flat
          v-for="menu in menus"
          :key="menu.nombre"
          :to="menu.ruta"
          class="font-weight-black  "
          :color="color_text.split('--')[0]"
        >
          {{ menu.nombre }}
        </v-btn>
      </v-toolbar-items>
      <v-btn
        flat
        icon
        :color="color_text.split('--')[0]"
        class="hidden-md-and-up"
        @click.stop="drawer_flag = !drawer_flag;"
      >
        <v-icon large>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
import Navbar from "./../componentes/UI/navbar.vue";
import List from "./../componentes/UI/list.vue";
//import pdfvue from "./inicio/pdf.vue";
//import PDF from "jspdf";
export default {
  props: ["menus"],
  components: {
    Navbar,
    List
  },
  data() {
    return {
      titulo: "LANUBETV",
      border_class: "border_hover",
      src_logo:
        "http://lanubetv.net/index.hyperesources/Logotipo_lanubetv_f.png",
      offsetTop: 0,
      color_text: "white--text",
      height_toolbar: "",
      color_toolbar: "",
      drawer_flag: false,
      mod_scroll: {
        inicio: {
          color: "rgba(0, 50, 150, 0.30)",
          height_toolbar: "60px",
          color_text: "white--text"
        },
        secundario: {
          color: "rgba(0, 70, 150, 0.85)",
          height_toolbar: "70px",
          color_text: "white--text"
        }
      }
    };
  },
  created() {
    this.color_toolbar = this.mod_scroll.inicio.color;
    this.height_toolbar = this.mod_scroll.inicio.height_toolbar;
  },
  methods: {
    onScroll(e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
      if (this.offsetTop < 30) {
        this.color_toolbar = this.mod_scroll.inicio.color;
        this.height_toolbar = this.mod_scroll.inicio.height_toolbar;
        this.color_text = "white--text";
      } else {
        this.color_toolbar = this.mod_scroll.secundario.color;
        this.height_toolbar = this.mod_scroll.secundario.height_toolbar;
        this.color_text = "white--text";
      }
    },
    nombreRuta(ruta) {
      this.$emit("epath", ruta);
    }
  }
};
</script>
