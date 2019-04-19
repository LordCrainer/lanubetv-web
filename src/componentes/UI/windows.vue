<style  scoped>
.img_windows_items {
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.prev_icon {
  position: absolute;
  top: 40%;
  left: 0%;
  padding:0;
  z-index: 1;
}

.next_icon {
  position: absolute;
  top: 40%;
  right: 0%;
  padding:0;
  z-index: 1;
}
.next_icon button{
  z-index: 99;
}
</style>

<template >
<v-card v-bind="windowsOption" style="position: relative;">

  <v-window v-model="onboarding" style="position: relative;">
    <v-window-item v-for="(item, indice) in items" :key="`windows-${item}-${indice}`">
      <v-card v-bind="cardOption">
        <v-layout align-center justify-center fill-height>
          <v-img height="100%" :style="`background-image: url(${item.src}); `" class="img_windows_items">
            <v-layout row wrap justify-center align-center fill-height>
              <v-card-text class="text-xs-center black--text">
                {{item.descripcion}}
              </v-card-text>
            </v-layout>
          </v-img>
        </v-layout>
      </v-card>
    </v-window-item>
    <v-item-group v-model="onboarding" class="text-xs-center" mandatory v-bind="midIconOption" style="position: absolute; width: 100%; bottom: 0; display: none;">
      <v-item v-for="indice in length" :key="`btn-${indice}`">
        <v-btn slot-scope="{ active, toggle }" :input-value="active" icon @click="toggle">
          <v-icon>{{midIcon}}</v-icon>
        </v-btn>
      </v-item>
    </v-item-group>
  </v-window>
  <div class="prev_icon">
    <v-btn v-bind="prevIconOption" @click="prev">
      <v-icon medium>{{prevIcon}}</v-icon>
    </v-btn>
  </div>
  <div class="next_icon">
    <v-btn v-bind="nextIconOption" @click="next">
      <v-icon medium>{{nextIcon}}</v-icon>
    </v-btn>
  </div>
</v-card>
</template>

<script>
export default {
  props: {
    items: {
      type: Array
    },
    prevIcon: {
      type: String,
      default: "chevron_left"
    },
    nextIcon: {
      type: String,
      default: 'chevron_right'
    },
    midIcon: {
      type: String,
      default: "fiber_manual_record"
    },
    windowsOption: {
      type: Object,
      default: function() {
        return {
          dark: true,
          flat: true,
          tile: true,
          color: "transparent"
        }
      }
    },
    cardOption: {
      type: Object,
      default: function() {
        return {
          color: 'transparent',
          height: "350",
          width: "450",
          flat: true,
          dark: false
        }
      }
    },
    prevIconOption: {
      default: function() {
        return {
          medium: true,
          fab: true,
          color: "rgba(0, 0, 0, 0.15)"
        }
      }
    },
    midIconOption: {
      default: function() {
        return {

        }
      }
    },
    nextIconOption: {
      default: function() {
        return {
          medium: true,
          fab: true,
          color: "rgba(0, 0, 0, 0.1)"
        }
      }
    }
  },
  data() {
    return {
      length: this.items.length || 0,
      onboarding: 0,
    }
  },
  methods: {
    next() {
      this.onboarding = this.onboarding + 1 === this.length ?
        0 :
        this.onboarding + 1
    },
    prev() {
      this.onboarding = this.onboarding - 1 < 0 ?
        this.length - 1 :
        this.onboarding - 1
    }
  }
}
</script>
