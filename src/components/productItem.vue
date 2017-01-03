<template>
    <div class="page-item">
        <img :src='getUrl(item.item_product_photo)'/>
        <div class="item-name">{{item.product_detail.products_name}}</div>
        <div class="item-price" v-if="item.product_detail.discount_price == item.product_detail.products_price">
        	<label class="item-usd">$</label>{{item.product_detail.products_price}}
        </div>
        <div class="item-price" v-if="item.product_detail.discount_price != item.product_detail.products_price">
        	<label class="item-usd">$</label>{{item.product_detail.discount_price}}<label class="item-price-dis"><label class="item-usd">$</label>{{item.product_detail.products_price}}</label>
        </div>
    </div>
</template>
<script>
  export default{
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    methods: {
      getUrl (data) {
        return '//statics3.seeedstudio.com' + data
      }
    },
    computed: {
      tData () {
        let url = 'wwww.baid.com'
        let tData = {url}
        return tData
      }
    }
  }
</script>
<style lang="stylus" scoped>
    vendor(prop, args)
        -webkit-{prop} args
        -moz-{prop} args
        {prop} args
    border-radius()
        vendor('border-radius', arguments)
    
    box-shadow()
        vendor('box-shadow', arguments)
    .page-item
        background-color #fff
        box-sizing border-box
        width 8.5rem
        margin-right 0.75rem
        display inline-block
        float left
        margin-top 0.5rem
        text-align center
        img
            width 100%
            height 6.45rem
            display block
            object-fit cover
        .item-name
        	color #3C3C3C
        	height 2rem
        	line-height 1rem
        	font-size 14px
        	overflow hidden
        	text-overflow ellipsis
        	display -webkit-box
        	-webkit-box-orient vertical
        	-webkit-line-clamp 2
        .item-name:hover
        	text-decoration underline
        .item-price
            font-family OpenSans-Semibold , Helvetica, Arial, sans-serif
            font-size 14px
            color #F96235
            line-height 0.8rem
            margin-top 0.25rem
            .item-usd
            	font-size 12px
            .item-price-dis
                margin-left 0.25rem
                color #6C6C6C
                text-decoration line-through
    .page-item:nth-child(2n)
        margin-right 0
</style>
            <!--text-decoration underline-->