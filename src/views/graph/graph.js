import axios from 'axios'
import $ from 'jquery'
import ApexCharts from 'apexcharts'
export default {
  name: 'graph',
  components: {
  },
  props: [],
  data () {
    return {
      baseUrl: 'https://api.nasa.gov/insight_weather/?api_key=DDz14KZjytRMwXmLi6JAz1mguDV0zcqCSs6QksTZ&feedtype=json&ver=1.0',
      chartData: [],
      chartKey: []
    }
  },
  computed: {
    drawGraph () {
      var options = {
        series: [{
          name: 'av',
          data: this.chartData
        }],
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        }
      }
      var chart = new ApexCharts(document.querySelector('#chart'), options)
      setTimeout(function () {
        chart.render()
      }, 1000)
    }
  },
  mounted () {
    var app = this
    axios.get(this.baseUrl).then(
      response => {
        console.log(response.data)
        $.each(response.data, function (key, value) {
          app.chartData.push(value.AT.av)
          app.chartKey.push(key)
        })
      }
    ).catch(
      response => {
        console.log(response)
      }
    )
    this.drawGraph()
  },
  methods: {
  },
  created () {
  }
}
