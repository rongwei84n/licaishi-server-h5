<template>
  <div class="generalize-wrapper">
    <div class="icon-back" @click="back"></div>
    <div class="logo">

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
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
    .logo
      position absolute
      width: 14%;
      top 4vh
      right 3vw
      height: 6%;
      background-image: url(/static/img/lcs-logo.3133185.png);
      background-size: 100% 100%;
      background-repeat no-repeat


</style>
