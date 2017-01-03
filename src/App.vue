<template>
  <div id="app">
      <div class="header-top">
          <div class="top-menu"> <span class="menu">
              <ul>
                <li><router-link to="/" exact>Home</router-link></li>
                <li><router-link to="/topics">Topics</router-link></li>
                <li><router-link to="/counter">Counter</router-link></li>
                <li><router-link to="/about">About</router-link></li>
              </ul>
          </div>
            <div class="search">
               <input type="text" value="Search..">
                <input type="submit" value="">
            </div>
            <div class="clearfix"></div>
      </div>
     <router-view class="view"></router-view>
  </div>
</template>
<style lang="less">
  body {
    font-family: Helvetica, sans-serif;
    .router-link-active{
      color: red;
    }
  }
  

  
</style>
