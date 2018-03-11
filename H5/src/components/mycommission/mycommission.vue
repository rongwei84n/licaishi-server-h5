<template>
  <div class="commission-wrapper">
    <workRoomHeader @back="back"  mytitle="我的佣金" ></workRoomHeader>
    <img src="~@/common/image/my-co.png"/>
    <Scroll class="scroll-conntent" :data="comList" >
      <div>
        <div v-for="(commission,index) in comList" :key="index" @click="customOrderFun">
          <split :sh="8"></split>
          <myCommissionInfo :myDate="commission.myDate" :myComAmount="commission.myComAmount"
                          :orderId="commission.orderId" :orderAmount="commission.orderAmount"
                            :customName="commission.customName" :customTep="commission.customTep"></myCommissionInfo>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import ajax from "api/ajax";
  import Scroll from "base/scroll/scroll";
  import split from "components/split/split";
  import workRoomHeader from "components/workRoomHeader/workRoomHeader";
  import myCommissionInfo from "components/mycommission/myCommissionInfo";
  export default {
    data() {
      return {
        comList: [
          {
            myDate:"2014.2.26 12:22:22",
            myComAmount:"50",
            orderId:"555555555",
            orderAmount:"26",
            customName:"劳务",
            customTep:"1366666666"
          },
          {
            myDate:"2014.2.26 12:22:22",
            myComAmount:"50",
            orderId:"555555555",
            orderAmount:"26",
            customName:"劳务",
            customTep:"1366666666"
          }
        ],
        pageNo: 1, //当前页
        pullup: true, //开启上拉加载

      }
    },
    components: {
      split,
      workRoomHeader,
      Scroll,
      myCommissionInfo
    },
    methods: {
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .commission-wrapper
    position absolute
    top 0px
    width 100%
    height 100vh
    background #FFF
    z-index 100
    img
      width 100%
      height:80px
    .scroll-conntent
      position: absolute;
      top: 130px;
      bottom: 0px;
      overflow: hidden;
      width: 100%;
</style>
