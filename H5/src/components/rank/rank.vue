<template>
  <div class="rank">
    <div class="rank-context">
      <div class="rank-tubiaoqu">

        <div class="tubiao-flex">
          <div class = "tubiao" @click="rankClick">
            <img src="~@/common/image/icon_17.jpg" alt="工作室信息"><br>
            <span>工作室信息</span>
          </div>
        </div>
        <div class="tubiao-flex">
          <div class = "tubiao" @click="rankClick" >
            <img src="~@/common/image/icon_19.jpg" alt="我的客户"><br/>
            <span>我的客户</span>
          </div>
        </div>
        <div class="tubiao-flex">
          <div class = "tubiao" @click="rankClick">
            <img src="~@/common/image/icon_21.jpg" alt="我的佣金"><br/>
            <span>我的佣金</span>
          </div>
        </div>
        <div class="tubiao-flex">
          <div class = "tubiao" @click="rankClick">
            <img src="~@/common/image/icon_23.jpg" alt="我要推广"><br/>
            <span>我要推广</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods:{
      rankClick(){
        alert(1)
      }
    }
  }
</script>

<style lang="stylus" lang="stylus" rel="stylesheet/stylus">
  .rank
    position relative
    width 100%
    height 100vh
    .rank-context
      position absolute
      bottom: 46px
      width 100%
      height 100%
      overflow hidden
      background-color: #eff3f6;
      z-index 100
      .rank-tubiaoqu
        display flex
        width 80%
        margin auto
        margin-top 60%
        flex-wrap wrap
        justify-content: space-around;
        align-items: center;
        .tubiao-flex
          flex 0 0 50%
          .tubiao
            width 80px
            height 85px
            background #FFF
            border-radius 16px
            text-align center
            margin 20px auto
            padding-top 6px
            img
              width: 48px;
            span
              display block
              font-size 13px
              margin-top 5px


</style>
