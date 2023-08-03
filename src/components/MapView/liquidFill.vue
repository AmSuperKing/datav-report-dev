<template>
  <div id="liquidfill-conatiner"></div>
</template>

<script>
import 'echarts-liquidfill'
export default {
  name: 'LiquidFill',
  data() {
    return {

    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      const data = [0.7506]
      const chart = this.$echarts.init(document.getElementById('liquidfill-conatiner'))
      chart.setOption({
        series: [{
          color: ['#00e500'],
          name: '月用户同比增长',
          type: 'liquidFill',
          data,
          radius: '95%',
          backgroundStyle: {
            color: '#fff'
          },
          itemStyle: {
            opacity: 1,
            shadowBlur: 0
          },
          outline: {
            show: true,
            borderDistance: 0,
            itemStyle: {
              color: 'none',
              borderColor: '#00e500',
              borderWidth: 1,
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.25)'
            }
          },
          emphasis: {
            itemStyle: {
              opacity: 0.85
            }
          },
          label: {
            formatter: function(param) {
              return param.name + '\n' + param.value * 100 + '%';
            },
            fontSize: 36,
            fontWeight: 'normal',
            color: '#999',
            position: ['50%', '45%']
          }
        }],
        tooltip: {
          show: true,
          formatter: function(param) {
            return param.marker + param.seriesName + '<br>' + param.value * 100 + '%';
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#liquidfill-conatiner {
  width: 100%;
  height: 100%;
}
</style>
