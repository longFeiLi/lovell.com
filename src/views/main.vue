<template>
  <div class="main">
    <div class="page-title">
        <div>
            <h1 class="sub-title"><b>欢迎Lovell小窝</b>
            </h1>
        </div>
    </div>

    <div class="conn">
      <p class="title">电影信息</p>
      <div class="warp">
        <div>名称: 民治优城百川国际影城 (0755-88899039) </div>
        <div>地址: 宝安区民治大道水尾村路段优城购物中心南区5层</div>
      </div>
      <div class="mt20">
         <div ref="cineChart" style="width:100%;height:320px;" >
         </div>
         <div v-if="screening">
            <el-table
              :data="screening"
              height="250"
              border
              style="width: 100%">
              <el-table-column
                prop="name"
                label="名称"
                width="180">
              </el-table-column>
              <el-table-column
                prop="price"
                label="价格"
                sortable
                width="180">
              </el-table-column>
              <el-table-column
                prop="version"
                label="厅室">
              </el-table-column>
              <el-table-column
                prop="showtime"
                sortable
                label="时间">
              </el-table-column>
              <el-table-column
                prop="language"
                sortable
                label="版本">
              </el-table-column>
              <el-table-column
                prop="data"
                sortable
                label="更新日期">
              </el-table-column>
              
            </el-table>
         </div>
      </div>

    
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import echarts from 'echarts'

const fetchInitData = store => {
  return store.dispatch('getMovielist');
}
export default {
  prefetch: fetchInitData,
  computed: {
    ...mapGetters({
      cineMovie: 'getMovielist',
      screening: 'getScreeningList'
    })
  },
  beforeMount () {
    fetchInitData(this.$store);
  },
  mounted () {
    this.setPie();
  },
  methods: {
    setPie () {
      let ths = this;
      let resObj = this.cineMovie;
      let cineChart = echarts.init(this.$refs.cineChart);
      let option = {
            title : {
                text: '电影排期占比',
                subtext: '每天更新(点击图查看电影排期)',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                x : 'center',
                y : 'bottom',
                data:['战狼','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            series : [
                {
                    name:'电影排期占比',
                    type:'pie',
                    radius : [20, 80],
                    center : ['50%', '50%'],
                    roseType : 'area',
                    data: resObj.sort(function (a, b) { return a.value - b.value })
                }
            ]
      };
      cineChart.setOption(option);
      cineChart.on('click', function (params) {
          // 控制台打印数据的名称
          ths.clickScreen(params.name);
      });
    },
    clickScreen (name) {
      console.log('点击事件' + name);
      this.$store.dispatch('getScreening', { name }).then((res) => {
         console.log(res);
      })
    }
  }
}
</script>
<style lang="less">
  .main{
    width: 1170px;
    margin: 0 auto;
    .sub-title{
      text-align: center;
      margin: 10px 0px;
      line-height: 50px;
      background: #FFFFFF;
      border-radius: 4px;
      letter-spacing: 1.5px;
      box-shadow: 0 2px 2px 0 rgba(0,0,0,0.12);
    }
    .conn{
      width: 90%;
      margin: 0 auto;
      font-size: 14px;
      color: #475669;
      background: #FFFFFF;
      box-shadow: 0 2px 2px 0 rgba(0,0,0,0.12);
      border-radius: 5px;
      padding: 20px;
      .title{
        font-size: 16px;
        font-weight: bold;
      }
      .warp{
        display: flex;
        margin-top: 10px;
        div{
          flex:1;
          text-align: center;
        }
      }
    }
    .mt20{
      margin-top: 20px;
    }
  }
</style>