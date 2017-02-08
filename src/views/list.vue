<template>
  <div class="main">
     <H1>{{title}}</h1>
     <div ref='main' style="width:90%;height:400px;">
     </div>
     <!-- 写个情人节版本图表 -->
     <div ref="loveChart" style="width:100%;height:400px;"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
// const fetchInitData = store => {
//   return store.dispatch(`getCineList`)
// }
export default {
  // prefetch: fetchInitData,
  computed: {
    // ...mapGetters({
    //   cineList: 'getCineList'
    // })
  },
  data () {
    // 基于准备好的dom，初始化echarts实例
    // 绘制图表
    return {
      title: 'Echarts Demo'
    }
  },
  beforeMount () {
  },
  mounted () {
    this.setChart()
    this.loveSetOption()
  },
  methods: {
    setChart () {
      this.setOption(this.$refs.main)
    },
    setOption (_main) {
      let myChart = echarts.init(_main)
      let paperDataURI = 'data:image/png;base64,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'
      myChart.setOption({
        backgroundColor: '#0f375f',
        tooltip: {},
        legend: {
          data: ['all'],
          textStyle: {color: '#ddd'}
        },
        xAxis: [{
          data: ['圣诞节儿童愿望清单', '', '珠穆朗玛\nQomolangma', '乞力马扎罗\nKilimanjaro'],
          axisTick: {show: false},
          axisLine: {show: false},
          axisLabel: {
            margin: 20,
            textStyle: {
              color: '#ddd',
              fontSize: 14
            }
          }
        }],
        yAxis: {
          splitLine: {show: false},
          axisTick: {show: false},
          axisLine: {show: false},
          axisLabel: {show: false}
        },
        markLine: {
          z: -1
        },
        animationEasing: 'elasticOut',
        series: [{
          type: 'pictorialBar',
          name: 'all',
          hoverAnimation: true,
          label: {
            normal: {
              show: true,
              position: 'top',
              formatter: '{c} m',
              textStyle: {
                fontSize: 16,
                color: '#e54035'
              }
            }
          },
          data: [{
            value: 7000,
            symbol: 'image://' + paperDataURI,
            symbolRepeat: true,
            symbolSize: ['130%', '20%'],
            symbolOffset: [0, 10],
            symbolMargin: '-30%',
            animationDelay: function (dataIndex, params) {
              return params.index * 140
            }
          }, {
            value: '-',
            symbol: 'none'
          }, {
            value: 18844,
            symbol: 'image://http://echarts.baidu.com/gallery/data/asset/img//hill-Qomolangma.png',
            // symbolSize: ['200%', '105%'],
            symbolSize: ['200%', '20%'],
            symbolPosition: 'end',
            // symbolRepeat: true,
            // symbolOffset: [0, 10],
            // symbolMargin: '-30%',
            z: 10,
            animationDelay: function (dataIndex, params) {
              return params.index * 120
            }
          }, {
            value: 5895,
            symbol: 'image://http://echarts.baidu.com/gallery/data/asset/img/hill-Kilimanjaro.png',
            symbolSize: ['200%', '105%'],
            symbolPosition: 'end'
          }],
          markLine: {
            symbol: ['none', 'none'],
            label: {
              normal: {show: false}
            },
            lineStyle: {
              normal: {
                color: '#e54035',
                width: 2
              }
            },
            data: [{
              yAxis: 8844
            }]
          }
        }, {
          name: 'all',
          type: 'pictorialBar',
          barGap: '-100%',
          symbol: 'circle',
          itemStyle: {
            normal: {
              color: '#185491'
            }
          },
          silent: true,
          symbolOffset: [0, '50%'],
          z: -10,
          data: [{
            value: 0,
            symbolSize: ['150%', 50]
          }, {
            value: '-'
          }, {
            value: 1,
            symbolSize: ['200%', 50]
          }, {
            value: 1,
            symbolSize: ['200%', 50]
          }]
        }]
      })
    },
    loveSetOption () {
      // 初始化
      let myLove = echarts.init(this.$refs.loveChart, 'macarons')
      console.log(myLove)
      let data = [{name: '罗湖', value: '06:30'}, {name: '国贸', value: '06:32'}, {name: '老街', value: '06:33'}, {name: '大剧院', value: '06:36'}, {name: '科学馆', value: '06:38'}, {name: '华强路', value: '06:40'}, {name: '岗厦', value: '06:43'}, {name: '会展中心', value: '06:45'}, {name: '购物公园', value: '06:46'}, {name: '香蜜湖', value: '06:49'}, {name: '车公庙', value: '06:51'}, {name: '竹子林', value: '06:54'}, {name: '侨城东', value: '06:32'}, {name: '华侨城', value: '06:34'}, {name: '世界之窗', value: '06:36'}, {name: '白石洲', value: '06:38'}, {name: '高新园', value: '06:40'}, {name: '深大', value: '06:31'}, {name: '桃园', value: '06:34'}, {name: '大新', value: '06:36'}, {name: '鲤鱼门', value: '06:38'}, {name: '前海湾', value: '06:42'}, {name: '新安', value: '06:30'}, {name: '宝安中心', value: '06:32'}, {name: '宝体', value: '06:34'}, {name: '坪洲', value: '06:36'}, {name: '西乡', value: '06:38'}, {name: '固戍', value: '06:42'}, {name: '后瑞', value: '06:46'}, {name: '机场东', value: '-'}]
      console.log(data)
      myLove.setOption({
        title: {
          text: '深圳地铁1号线(罗宝线)线路图'
        },
        legend: {
          right: 50,
          data: ['首班车', '末班车']
        },
        tooltip: {
          trigger: 'axis'
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            // boundaryGap: false,
            data: ['罗湖', '国贸', '老街', '大剧院', '科学馆', '华强路', '岗厦', '会展中心', '购物公园', '香蜜湖', '车公庙', '竹子林', '侨城东', '华侨城', '世界之窗', '白石洲', '高新园', '深大', '桃园', '大新', '鲤鱼门', '前海湾', '新安', '宝安中心', '宝体', '坪洲', '西乡', '固戍', '后瑞', '机场东']

          }
        ],
        yAxis: [
          {
            type: 'value',
            max: 24,
            axisLabel: {
              formatter (value, index) {
                return value + ':00'
              }
            }
          }
        ],
        series: [
          {
            name: '首班车',
            type: 'line',
            label: {
              normal: {
                show: true,
                position: 'top',
                formatter (obj) {
                  return obj.value
                }
              }
            },
            // areaStyle: {normal: {}},
            data: ['06.30', '06.32', '06.33', '06.36', '06.38', '06.40', '06.43', '06.45', '06.46', '06.49', '06.51', '06.54', '06.32', '06.34', '06.36', '06.38', '06.40', '06.31', '06.34', '06.36', '06.38', '06.42', '06.30', '06.32', '06.34', '06.36', '06.38', '06.42', '06.46', '——']
          },
          {
            name: '末班车',
            type: 'line',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            data: ['23.00', '23.02', '23.04', '23.06', '23.08', '23.10', '23.13', '23.15', '23.16', '23.19', '23.21', '23.24', '23.26', '23.28', '23.30', '23.32', '23.35', '23.37', '23.40', '23.42', '23.44', '23.45', '23.48', '23.50', '23.52', '23.54', '23.56', '00.00', '00.04', '—']
          }]
      })
    }
  }
}
</script>
<style lang="less">

</style>

