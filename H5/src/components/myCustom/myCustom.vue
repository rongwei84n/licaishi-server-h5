<template>
  <div class="my-custom-wrapper">
    <workRoomHeader @back="back"  mytitle="我的客户" ></workRoomHeader>
    <Scroll class="scroll-conntent" :data="customs" >
      <div>
        <div v-for="(custom,index) in customs" :key="index" @click="customOrderFun">
          <split :sh="8"></split>
          <customBaseInfo :customName="custom.name" :customTel="custom.phone"
                          :customOrderCount="custom.orderCounts" :customSignDate="custom.createtime"></customBaseInfo>
        </div>
      </div>
    </Scroll>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import ajax from "api/ajax";
  import Scroll from "base/scroll/scroll";
  import split from "components/split/split";
  import workRoomHeader from "components/workRoomHeader/workRoomHeader";
  import customBaseInfo from "components/myCustom/customBaseInfo";
  export default {
    data() {
      return {
        customs:[

        ],
        pageNo: 1, //当前页
        pullup: true, //开启上拉加载
      }
    },
    components: {
      split,
      workRoomHeader,
      customBaseInfo,
      Scroll
    },
    created() {
      this.get_mycustom();
    },
    methods: {
      back(){
        this.$router.go(-1)
      },
      customOrderFun(){
        this.$router.push("/rank/mycustom/customOrder")
      },
      get_mycustom(){
        ajax({
          url: `/srv/v1/workshop/queryMyCustomers?pageNo=1&pageSize=20&type=01`,
          method: "GET"
        }).then(res => {

          if (res.status === 200) {
            this.customs = [...this.customs, ...res.data.result.list];
            if (res.data.result.pager) {
              //this.pullup = res.data.result.pager.hasNaxtPage;
            } else {
              //this.pullup = false;
            }
          }
        });
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
    /* 滑动块区域 */
    .scroll-conntent
      position: absolute;
      top: 50px;
      bottom: 0px;
      overflow: hidden;
      width: 100%;
</style>
