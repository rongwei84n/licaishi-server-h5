<template>
  <div class="my-custom-wrapper">
    <workRoomHeader @back="back"  mytitle="我的客户" ></workRoomHeader>
    <split :sh="10"></split>
  </div>
</template>

<script type="text/ecmascript-6">
  import split from "components/split/split";
  import workRoomHeader from "components/workRoomHeader/workRoomHeader";
  export default {
    data() {
      return {}
    },
    components: {
      split,
      workRoomHeader
    },
    methods: {
      back(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .my-custom-wrapper
    position absolute
    top 0px
    width 100%
    height 100vh
    background #FFF
    z-index 100
</style>
