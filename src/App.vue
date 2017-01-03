<template>
  <div id="app">
      <div class="header-top">
          <div class="top-menu"> 
              <ul>
                <li><router-link to="/" class="active" >首页</router-link></li>
                <li><router-link to="/topics">列表</router-link></li>
                <li><router-link to="/counter">资料</router-link></li>
                <li><router-link to="/about">关于</router-link></li>
              </ul>
          </div>
         <div class="clearfix"></div>
      </div>
     <router-view class="view"></router-view>
  </div>
</template>
<style lang="less">
  body {
    font-family: "Myriad Set Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;;
    font-size: 12px;
    margin: 0px;
    .clearfix{
      clear: none;
    }
    .header-top{
      width: 100%;
      height: 60px;
      background-color: #009688;
      min-width:1140px;
      .top-menu{
        width: 1140px;
        margin: 0 auto;
        height:60px;
      }
      ul{
        margin: 0px;
        padding: 0px;
        font-size: 16px;
        list-style-type: none;
        li{
          float: left;
          margin: 0px 20px;
          line-height: 60px;
          .active{
            opacity: 1;
          }
        }
      }
      a {
        color: #ffffff;
        text-decoration: none;
        font-weight: 400;
        opacity: .8;
        &:hover{
          color: #ffffff;
          opacity: 1;
        }
      }
    }
  }
  

  
</style>
