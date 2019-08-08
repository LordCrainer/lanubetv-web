
<script>
export default {
  methods: {
    imagenPath(path) {
      if (path) {
        return require(`@/assets/${path}`)
      }
      return ''
    }
  }
}
</script>
