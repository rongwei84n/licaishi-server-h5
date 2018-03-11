<template>
  <div class="my-custom-wrapper">
    <workRoomHeader @back="back"  mytitle="我的客户" ></workRoomHeader>
    <div v-for="(custom,index) in customs" :key="index" @click="customOrderFun">
      <split :sh="8"></split>
      <customBaseInfo :customName="custom.customName" :customTel="custom.customTel"
                      :customOrderCount="custom.customOrderCount" :customSignDate="custom.customSignDate"></customBaseInfo>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import split from "components/split/split";
  import workRoomHeader from "components/workRoomHeader/workRoomHeader";
  import customBaseInfo from "components/myCustom/customBaseInfo";
  export default {
    data() {
      return {
        customs:[
          {
            customName:"我是客户",
            customTel:"14255569988",
            customOrderCount:"33",
            customSignDate:"2018.02.23 16:30:55"
          },
          {
            customName:"我是客户",
            customTel:"14255569988",
            customOrderCount:"33",
            customSignDate:"2018.02.23 16:30:55"
          },
          {
            customName:"我是客户",
            customTel:"14255569988",
            customOrderCount:"33",
            customSignDate:"2018.02.23 16:30:55"
          },
          {
            customName:"我是客户",
            customTel:"14255569988",
            customOrderCount:"33",
            customSignDate:"2018.02.23 16:30:55"
          }
        ]
      }
    },
    components: {
      split,
      workRoomHeader,
      customBaseInfo
    },
    methods: {
      back(){
        this.$router.go(-1)
      },
      customOrderFun(){
        this.$router.push("/rank/mycustom/customOrder")
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
