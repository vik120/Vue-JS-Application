export default {
  name: 'imageblock',
  components: {},
  props: {
    indexval: {
      type: Number
    },
    imagedata: {
      type: Object
    }
  },
  data () {
    return {

    }
  },
  computed: {
    img () {
      return this.imagedata.links[0].href
    },
    index () {
      return this.indexval
    }
  },
  mounted () {

  },
  methods: {

  }
}
