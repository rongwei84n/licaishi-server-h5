<template>
  <div class="custom-order">
    <workRoomHeader @back="back"  mytitle="客户订单" ></workRoomHeader>
  </div>
</template>

<script type="text/ecmascript-6">
  import workRoomHeader from "components/workRoomHeader/workRoomHeader";
  export default {
    methods: {
      back(){
        this.$router.go(-1)
      }
    },
    components: {
      workRoomHeader
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .custom-order
    position absolute
    top 0px
    width 100%
    height 100vh
    background red
    z-index 1
</style>
