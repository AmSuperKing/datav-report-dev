<template>
  <v-chart ref="mapChartRef" :options="options" />
</template>

<script>
import 'echarts/extension/bmap/bmap'
import mapStyles from './mapStyle.json'

const testPoints = [{
  name: '北京',
  value: [116.404269, 39.913385, 200]
}, {
  name: '南京',
  value: [118.800697,32.065386, 100]
}]
const testPoints2 = [{
  name: '广州',
  value: [113.269704,23.137729, 300]
}, {
  name: '上海',
  value: [121.48054, 31.236176, 200]
}]

export default {
  name: 'BMap',
  data() {
    return {
      options: {}
    }
  },
  mounted() {
    /* disable-eslint */
    this.options = {
      title: {
        text: '销售数据大盘',
        subtext: '销售趋势统计',
        sublink: '/#/',
        left: 'center'
      },
      tooltip: {},
      bmap: {
        key: 'OjxfZDz80ZNMSIz9sE5u7m7uZKatjQQf',
        center: [104.114129, 37.550339],
        zoom: 5,
        roam: true, // 是否允许地图缩放
        mapStyle: {
          styleJson: mapStyles
        }
      },
      series: [
        {
          name: '销售额',
          type: 'scatter',
          coordinateSystem: 'bmap',
          data: testPoints,
          encode: {
            value: 2
          },
          itemStyle: {
            color: 'purple'
          },
          symbolSize: function(val) {
            return val[2] / 10
          },
          label: {
            show: false,
            position: 'right',
            formatter: function(v) {
              return `${v.data.name} - ${v.data.value[2]}`
            }
          },
          emphasis: {
            label: {
              show: true
            }
          }
        },
        {
          name: 'Top 2',
          type: 'effectScatter',
          coordinateSystem: 'bmap',
          data: testPoints2,
          symbolSize: function(val) {
            return val[2] / 10
          },
          encode: {
            value: 2
          },
          label: {
            formatter: function(v) {
              return `${v.data.name} - ${v.data.value[2]}`
            },
            position: 'right',
            show: true
          },
          hoverAnimation: true,
          rippleEffect: {
            brushType: 'stroke'
          },
          itemStyle: {
            color: 'purple',
            shadowBlur: 10,
            shadowColor: '#333'
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
