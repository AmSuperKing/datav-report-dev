<template>
  <div id="wordCloud">wordCloud</div>
</template>

<script>
import 'echarts-wordcloud'
export default {
  name: 'WordCloud',
  data() {
    return {

    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    getRandomColor() {
      // Random color
      return 'rgb(' + [
        Math.round(Math.random() * 160),
        Math.round(Math.random() * 160),
        Math.round(Math.random() * 160)
      ].join(',') + ')'
    },
    initChart() {
      const chart = this.$echarts.init(document.getElementById('wordCloud'))
      chart.setOption({
        series: [{
          type: 'wordCloud',
          shape: 'circle',
          left: 'center',
          top: 'center',
          width: '100%',
          height: '100%',
          rotationRange: [-90, 90],
          rotationStep: 45,
          emphasis: {
            focus: 'self',
            textStyle: {
              textShadowBlur: 10,
              textShadowColor: '#eee'
            }
          },
          tooltip: { show: true },
          sizeRange: [12, 36],
          data: [
            { name: 'Vue框架', value: parseInt(Math.random() * 100), textStyle: { normal: { color: this.getRandomColor() } } },
            { name: '前端进阶学校', value: parseInt(Math.random() * 100), textStyle: { normal: { color: this.getRandomColor() } } },
            { name: '数据可视化', value: parseInt(Math.random() * 100), textStyle: { normal: { color: this.getRandomColor() } } },
            { name: 'Apache Echarts', value: parseInt(Math.random() * 100), textStyle: { normal: { color: this.getRandomColor() } } },
            { name: 'JavaScript', value: parseInt(Math.random() * 100), textStyle: { normal: { color: this.getRandomColor() } } },
            { name: 'CSS样式', value: parseInt(Math.random() * 100), textStyle: { normal: { color: this.getRandomColor() } } },
            { name: 'SCSS预处理语言', value: parseInt(Math.random() * 100), textStyle: { normal: { color: this.getRandomColor() } } },
            { name: 'EleMentUI样式框架', value: parseInt(Math.random() * 100), textStyle: { normal: { color: this.getRandomColor() } } },
            { name: 'JQuery库', value: parseInt(Math.random() * 100), textStyle: { normal: { color: this.getRandomColor() } } }
          ]
        }]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#wordCloud {
  width: 100%;
  height: 100%;
}
</style>
