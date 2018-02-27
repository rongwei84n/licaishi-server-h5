<template>
  <div class="m-header">
    <img src="~@/common/image/sfa.png" class="sfa-icon" alt="">
      <div class="search">
        <img src="~@/common/image/search.png" alt="">
        <input type="text" placeholder="国通信托-方兴463号">
      </div>
    <img src="~@/common/image/remind.png" class="message-icon" alt="">
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .m-header
    position: relative
    background: #deae47
    height: 64px
    text-align: center
    color: $color-theme
    font-size: 0
    line-height: 64px;
    padding: 12px 10px;
    .sfa-icon
      display: inline-block
      vertical-align: top
      margin-top: 24px
      width: 39px
      margin-right: 9px
    .message-icon
      width: 25px;
      margin-top 18px
      margin-left 5px
    .search
      display: inline-block
      position relative
      vertical-align: top
      width: 80%
      font-size: $font-size-large
      img
        position absolute
        left: 10px;
        top:24px;
        width: 20px;
      input
        width: 100%;
        height: 28px;
        background #fff
        text-indent: 42px
        font-size 15px
        color: #999999
        border-radius: 6px;
    .mine
      position: absolute
      top: 0
      right: 0
      .icon-mine
        display: block
        padding: 12px
        font-size: 20px
        color: $color-theme
</style>
