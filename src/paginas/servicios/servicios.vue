<style scoped>
.v-carousel__prev .v-btn .v-btn__content .v-icon,
.v-carousel__next .v-btn .v-btn__content .v-icon {
  color: black;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
}
</style>

<template>
<div>
  <allServices :items="data_servicios"></allServices>

</div>
</template>

<script>
import allServices from './TodosServicios.vue'
import dataService from './servicios.json'
export default {
  components: {
    allServices
  },
  data() {
    return {
      data_servicios: dataService
    }
  }
}
</script>
