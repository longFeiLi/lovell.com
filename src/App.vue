<template>
  <div id="app" class="container">
     <header>
        <div class="logo">
          <a href="//www.lovell.com.cn">
            Lovell
          </a>
        </div>
        <nav>
          <ul>
            <li><router-link to="/"  v-bind:class="{ active: $route.path === '/' }"  >Home</router-link></li>
            <li><router-link to="/list" v-bind:class="{ active: $route.path === '/list' }" >列表</router-link></li>
            <li><router-link to="/counter" v-bind:class="{ active: $route.path === '/counter' }">资料</router-link></li>
            <li><router-link to="/about" v-bind:class="{ active: $route.path === '/about' }">关于</router-link></li>
          </ul>
        </nav>
    </header>
     <router-view class="view"></router-view>
     <div class="txt-footer" >
        Copyright © 2008-2017 lovell.com.cn<br/>
        Email: longfeili0925@gmail.com
     </div>
  </div>
  <!-- 底部 -->
</template>
<style lang="less">
  @import "assets/main.less";
  @import '../node_modules/element-ui/lib/theme-default/index.css';
</style>

<script>
export default {
  name: 'my-menu',
  data () {
    return {
      menus: ''
    }
  },
  methods: {
    goTo () {
      console.log(this.$route.path)
    }
  }
}
</script>
