<template>
  <div class="generalize-wrapper">
    <div class="icon-back" @click="back"></div>
    <div class="logo">
    </div>
    <div class="generalize-avatar">
      <img width="64" height="64" :src="headerAvatar"  />
    </div>
    <div>
      {{name}}
    </div>
    <div>
      {{tel}}
    </div>
    <div>
      {{des}}
    </div>
    <div>
      推广方式
    </div>
    <div>
      <ul>
        <li>
          1、向客户出示二维码，通过扫码注册
        </li>
        <li>
          2、向客户出示二维码，通
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        headerAvatar:"",
        name:"理财师姓名",
        tel:"18682052180",
        des:"理财师社区理财师社区理财师社区理财师社区理财师社区理财师社区理财师社区理财师社区理财师社区理财师社区"
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .generalize-wrapper
    position absolute
    top 0px
    width 100%
    height 100vh
    background #FFF
    z-index 100
    background-image url("~@/common/image/lcs_tuiguang.png")
    background-size 100% 100%
    background-repeat no-repeat
    text-align center
    .logo
      position absolute
      width: 14%;
      top 4vh
      right 3vw
      height: 6%;
      background-image: url(/static/img/lcs-logo.3133185.png);
      background-size: 100% 100%;
      background-repeat no-repeat
    .generalize-avatar
      width 90px
      height 90px
      margin: 5vh  auto 10px auto
      border-radius  50%
      background #FFF
      overflow hidden
</style>
