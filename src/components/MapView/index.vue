<template>
  <div class="map-view">
    <div class="left">
      <bmap-scatter />
    </div>

    <div class="right">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title">月用户同比增长</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <liquid-fill />
          </div>
        </template>
      </el-card>

      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title">热门搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <word-cloud />
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
import BmapScatter from '@/views/BMap.vue'
import LiquidFill from './liquidFill.vue'
import WordCloud from './wordCloud.vue'
export default {
  name: 'MapView',
  components: {
    BmapScatter,
    LiquidFill,
    WordCloud
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
.right .el-card .el-card__header {
  padding: 0;
}
</style>
<style lang="scss" scoped>
.map-view {
  display: flex;
  margin-top: 20px;
  .left {
    flex: 0 0 80%;
    width: 80%;
    height: 600px;
    background-color: #fff;
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
    .title {
      display: flex;
      align-items: center;
      height: 60px;
      padding: 0 0 0 20px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 500;
    }
    .chart-wrapper {
      width: 100%;
      height: 190px;
    }
  }
}
</style>
