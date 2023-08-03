<template>
  <div class="sales-view">
    <el-card shadow="hover" :body-style="{ padding: '0 0 20px 0' }">
      <template v-slot:header>
        <div class="menu-wrapper">
          <el-menu
            class="sales-view-menu"
            mode="horizontal"
            :default-active="activeIndex"
            @select="onMenuSelect"
          >
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>

          <div class="right-menu">
            <el-radio-group v-model="radioValue" size="small">
              <el-radio-button label="今日" />
              <el-radio-button label="本周" />
              <el-radio-button label="本月" />
              <el-radio-button label="今年" />
            </el-radio-group>

            <el-date-picker
              v-model="selectedDate"
              type="daterange"
              size="small"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
              class="sales-view-date-picker"
            />
          </div>
        </div>
      </template>
      <template>
        <div class="sales-view-chart-wrapper">
          <v-chart :options="chartOption" />
          <div class="sales-view-list">
            <div class="sales-view-title">排行榜</div>
            <div
              v-for="item in rankData"
              :key="item.no"
              class="list-item"
            >
              <!-- <div
                class="list-item-no"
                :class="+item.no <= 3 ? 'top-no' : ''"
              >{{ item.no }}</div> -->
              <!-- 另外一种绑定方式 -->
              <div
                :class="['list-item-no', +item.no <= 3 ? 'top-no' : '']"
              >{{ item.no }}</div>
              <div class="list-item-name">{{ item.name }}</div>
              <div class="list-item-money">{{ item.money }}</div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'SalesView',
  data() {
    return {
      activeIndex: '1',
      radioValue: '今日',
      selectedDate: '',
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      chartOption: {
        title: {
          text: '年度销售额',
          textStyle: {
            fontSize: 12,
            color: '#666'
          },
          left: 25,
          top: 20
        },
        tooltip: {},
        xAxis: {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', ],
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: '#999'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            color: '#333'
          }
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              type: 'dotted',
              color: '#eee'
            }
          }
        },
        series: [
          {
            type: 'bar',
            data: [200, 250, 300, 350, 300, 250, 200, 250, 300, 350, 300, 250],
            barWidth: '35%'
          }
        ],
        color: ['#3398db'],
        grid: {
          top: 70,
          left: 60,
          right: 60,
          bottom: 50
        }
      },
      rankData: [
        {
          no: 1,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 2,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 3,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 4,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 5,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 6,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 7,
          name: '麦当劳',
          money: '323,234'
        }
      ]
    }
  },
  mounted() {},
  methods: {
    onMenuSelect(index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="scss">
.sales-view .el-card .el-card__header {
  border-bottom: none !important;
  padding: 0 !important;
}
</style>
<style lang="scss" scoped>
.sales-view {
  margin-top: 20px;
  .menu-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    .sales-view-menu {
      width: 100%;
      padding-left: 20px;
      .el-menu-item {
        margin: 0 20px;
        height: 50px;
        line-height: 50px;
      }
    }
    .right-menu {
      position: absolute;
      top: 0;
      right: 20px;
      height: 50px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .sales-view-date-picker {
        margin-left: 20px;
      }
    }
  }
  .sales-view-chart-wrapper {
    display: flex;
    height: 270px;
    .echarts {
      flex: 0 0 70%;
      width: 70%;
      height: 100%;
    }
    .sales-view-list {
      flex: 1;
      width: 100%;
      height: 100%;
      overflow: hidden;
      .sales-view-title {
        margin: 20px 0 15px 0;
        font-size: 12px;
        color: #666;
        font-weight: 500;
      }
      .list-item {
        height: 20px;
        display: flex;
        align-items: center;
        font-size: 12px;
        padding: 6px 20px 6px 0;
        &-no {
          width: 20px;
          height: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #333;
          &.top-no {
            color: #fff;
            font-weight: 500;
            background-color: #f64d23;
            border-radius: 50%;
          }
        }
        &-name {
          margin-left: 10px;
          color: #333;
        }
        &-money {
          flex: 1;
          text-align: right;
        }
      }
    }
  }
}
</style>
