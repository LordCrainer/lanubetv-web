<style scoped>
#list {
  background-color: rgba(255, 255, 255, 0.99);
}

.v-list {
  background-color: rgba(255, 255, 255, 0);
}

#toolbar-title,
#v-list__tile {
  font-family: "Khmer", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}


.toolbar_imagen {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 125px;
  background-color: white;
}
</style>

<template>
<nav v-scroll="onScroll">

  <v-navigation-drawer id="list"  app temporary  v-model="drawer_flag" right>
    <List :items="menus">
      <v-list-tile @click.stop="drawer_flag = !drawer_flag;" slot="listName" slot-scope="{ data }" v-if="!data.flagGroup" :to="data.ruta">
        <v-list-tile-title>{{ data.titulo }}</v-list-tile-title>
      </v-list-tile>
      <v-list-group slot="listGroup" slot-scope="{ data }" v-if="data.flagGroup">
        <v-list-tile slot="activator" :to="data.ruta">
          <v-list-tile-content>
            <v-list-tile-title>{{data.titulo}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-for="subruta in data.subrutas" :key="subruta.nombre" @click.stop="drawer_flag = !drawer_flag;" :to="subruta.ruta" :href="subruta.ruta_externa">
          <v-list-tile-content>
            <v-list-tile-title @click.stop="drawer_flag = !drawer_flag;">{{subruta.nombre}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
    </List>

    <v-btn fixed bottom right fab dark color="blue" @click.stop="drawer_flag = !drawer_flag;">
      <v-icon>exit_to_app</v-icon>
    </v-btn>
  </v-navigation-drawer>
  <!-- TOOLBAR -->
  <v-toolbar fixed :color="color_toolbar" :height="height_toolbar" flat>
    <router-link to="/" style="" class="toolbar_imagen">
      <v-layout row wrap justify-center>
        <img :src="src_logo" alt="alt" aspect-ratio="1" :height="`${height_toolbar}`" />
      </v-layout>
    </router-link>
    <v-spacer></v-spacer>
    <v-toolbar-title id="toolbar-title" :class="color_text" class="title hidden-xs-only">
      <h1>{{ titulo }}</h1>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <menu-button :items="menus" :color="color_text"></menu-button>
    </v-toolbar-items>
    <v-btn flat icon :color="color_text.split('--')[0]" class="hidden-md-and-up" @click.stop="drawer_flag = !drawer_flag;">
      <v-icon large>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</nav>
</template>

<script>
import Navbar from "./../componentes/UI/navbar.vue";
import List from "./../componentes/UI/list.vue";
import menuButton from "./../componentes/UI/menu.vue";
//import pdfvue from "./inicio/pdf.vue";
//import PDF from "jspdf";
export default {
  props: ["menus"],
  components: {
    Navbar,
    List,
    menuButton
  },
  data() {
    return {
      titulo: "LA NUBE TV",
      border_class: "",
      src_logo: require('./../assets/logo.png'),
      offsetTop: 0,

      color_text: "white--text",
      height_toolbar: "",
      color_toolbar: "",
      drawer_flag: false,
      mod_scroll: {
        inicio: {
          color: "transparent", //rgb(31, 55, 173)
          height_toolbar: "64px",
          color_text: "black--text"
        },
        secundario: {
          color: "rgba(61,121, 228, 1)", //rgba(61,121, 228, 1)
          height_toolbar: "70px",
          color_text: "white--text"
        }
      }
    };
  },
  created() {
    this.color_toolbar = this.mod_scroll.inicio.color;
    this.height_toolbar = this.mod_scroll.inicio.height_toolbar;
    this.color_text = this.mod_scroll.inicio.color_text;
  },
  methods: {
    onScroll(e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
      if (this.offsetTop < 30) {
        this.color_toolbar = this.mod_scroll.inicio.color;
        this.height_toolbar = this.mod_scroll.inicio.height_toolbar;
        this.color_text = this.mod_scroll.inicio.color_text;
      } else {
        this.color_toolbar = this.mod_scroll.secundario.color;
        this.height_toolbar = this.mod_scroll.secundario.height_toolbar;
        this.color_text = this.mod_scroll.secundario.color_text;
      }
    }
  }
};
</script>
