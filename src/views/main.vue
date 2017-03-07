<template>
  <div class="main">
    <div class="page-title">
        <div class="row">
          <div class="col-md-9 col-xs-12">
            <h1><b>Work hard. Dream big.</b><br>
            </h1>
          </div>
        </div>
    </div>
    <!-- 增加地图 -->
    <div id="mapChart" style="width:100%;height:400px;"></div>

    <div class="title">
      <div class="name">名称</div>
      <div class="address">地址</div>
      <div class="tel">电话</div>
    </div>
    <div class="m-list" >
      <div class="item" v-for="cine in cineList" @click="show(cine.mid)">
        <div class="name">{{cine.name}}</div>
        <div class="address"><span class="address">{{cine.address}}</span></div>
        <div class="tel" >{{cine.tel}}</div>
        {{cineList.mid}}
      </div>
    </div>
    <div ref="cineChart" style="width:50%;height:400px;margin-top:20px;" >
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import echarts from 'echarts'

const fetchInitData = store => {
  return store.dispatch(`getCineList`)
}
export default {
  prefetch: fetchInitData,
  computed: {
    ...mapGetters({
      cineList: 'getCineList'
    })
  },
  beforeMount () {
    fetchInitData(this.$store)
  },
  methods: {
    show (mid) {
      this.$store.dispatch('getMovielist', {'mid': mid}).then((res) => {
        this.setPie(res)
      })
    },
    setPie (option) {
      let cineChart = echarts.init(this.$refs.cineChart)
      cineChart.setOption({
        backgroundColor: '#2c343c',
        'color': [
          '#eaf889',
          '#6699FF',
          '#ff6666',
          '#3cb371',
          '#d5b158',
          '#38b6b6'
        ],
        title: {
          text: '电影场次信息',
          left: 'center',
          top: 20,
          textStyle: {
            color: '#ccc'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [{
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: option.sort(function (a, b) { return a.value - b.value }),
          roseType: 'angle',
          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 200
          }
        }]
      })
    },
    /**
     * [setMapChart 地图绘制中显示深圳所有地方的电影院]
     */
    setMapChart () {
      console.log('地图')
    }
  }
}
</script>
<style lang="less">
  .main{
    width: 1140px;
    margin: 0 auto;
    div{
       display: inline-block;
    }
    .m-list{
       height: 400px;
       display: block;
       width: 100%;
       overflow: auto;
    }
    .item{
      display: block;
      font-size:14px;
      cursor: pointer;
      line-height: 20px;
      border: 1px solid #ccc;
      border-top: 0px solid #ccc;
      padding: 5px;
      .name{
        width: 300px;
      }
      .address{
        width: 450px;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .tel{
        width: 150px;
      }
      &:hover{
        background: #B2EBF2;
      }
    }
    .title{
      display: block;
      font-size:16px;
      background: #0097A7;
      padding: 5px 0px;
      .name{
        width: 300px;
        text-align: center;
      }
      .address{
        width: 450px;
        text-align: center;
      }
      .tel{
        width: 150px;
        text-align: center
      }
    }
  }
</style>