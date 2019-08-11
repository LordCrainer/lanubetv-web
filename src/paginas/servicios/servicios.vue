<style scoped>



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
