<template>
<div>
  <MiViSer :items="data_nosotros"></MiViSer>
</div>
</template>
<script>
import MiViSer from './MiViSer.vue'
import Nosotros from './nosotros.json'
export default {
  components: {
    MiViSer
  },
  data() {
    return {
      data_nosotros: Nosotros
    };
  }
};
</script>
