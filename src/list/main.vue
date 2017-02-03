<template>
  <div class="main">
    <div><h1>电影列表</h1></div>
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
    <div style="height: 100px;">

    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

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
      console.log(mid)
      this.$store.dispatch('getMovielist', {'mid': mid})
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