<template>
  <div class="list-con" v-if="item.product.length > 0">
  	<div class="list-name">{{item.basic.item_name}}</div>
    <div class="list-pro">
    	<product-item v-for="film in item.product" :item="film"></product-item>
    </div>
  </div>
</template>
<style lang="stylus">
.list-con
	width 100%
	background #FFFFFF
	.list-name
		font-family OpenSans-Semibold , Helvetica, Arial, sans-serif
		font-size 20px
		color #3C3C3C
		line-height 1.35rem
		margin 1.5rem 0 0 1rem
	.list-pro
		width 17.75rem
		margin 0 auto
	.list-pro:before,.list-pro:after
		display block
		content ''
		clear both
</style>
<script>
  import ProductItem from './productItem'
  export default{
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    components: {
      ProductItem
    }
  }
</script>
