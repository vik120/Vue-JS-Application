import { GChart } from 'vue-google-charts'
import axios from 'axios'

export default {
  name: 'graph',
  components: {
    GChart
  },
  props: [],
  data () {
    return {
      baseUrl: 'https://api.nasa.gov/insight_weather/?api_key=DDz14KZjytRMwXmLi6JAz1mguDV0zcqCSs6QksTZ&feedtype=json&ver=1.0',
      responseData: {},
      chartData: Array
    }
  },
  computed: {
  },
  mounted () {
    this.getChartData()
  },
  methods: {
    getChartData () {
      axios.get(this.baseUrl).then(
        response => {
          this.chartData = response.data
        }
      ).catch(
        response => {
          console.log(response)
        }
      )
    }
  },
  created () {
  }
}
