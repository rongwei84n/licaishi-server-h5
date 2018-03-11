<template>
  <div class="custom-order">
    <workRoomHeader @back="back"  mytitle="客户订单" ></workRoomHeader>
    <split :sh="4"></split>
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">全部</mt-tab-item>
      <mt-tab-item id="2">待打款</mt-tab-item>
      <mt-tab-item id="3">待结佣</mt-tab-item>
      <mt-tab-item id="4">已结佣</mt-tab-item>
      <mt-tab-item id="5">已失败</mt-tab-item>
    </mt-navbar>
    <split :sh="4"></split>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div v-for="(product,index) in customOrderList">
          <customOrderInfo :productName="product.productShortName"
          :loanAmount="product.profit" :auEndDate="product.createTime"
                           :commission="product.commission" :productTime="product.ee"></customOrderInfo>
          <split :sh="8"></split>
        </div>

      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'测试 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'选项 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script type="text/ecmascript-6">
  import ajax from "api/ajax";
  import Scroll from "base/scroll/scroll";
  import loading from "base/loading/loading";
  import toEnd from "base/toEnd/toEnd";
  import split from "components/split/split";
  import workRoomHeader from "components/workRoomHeader/workRoomHeader";
  import customOrderInfo from "components/myCustom/customOrderInfo";
  export default {
    data () {
      return {
        selected:"1",
        customOrderList:[],
        pageNo: 1, //当前页
        pullup: true, //开启上拉加载
        customId:""
      }
    },
    created(){
      this.customId = this.$route.query.customId
      this.get_custom_order()
    },
    methods: {
      back(){
        this.$router.go(-1)
      },
      get_custom_order(){
        ajax({
          url: `/srv/v1/workshop/queryOrdersByCustomerId?pageNo=${this.pageNo}&pageSize=${
            this.$store.state.pageSize
            }&customerId=2`,
          method: "GET"
        }).then(res => {
          if (res.status === 200) {
            this.customOrderList = [...this.customOrderList, ...res.data.result.list];
            if (res.data.result.pager) {
              this.pullup = res.data.result.pager.hasNaxtPage;
            } else {
              this.pullup = false;
            }
          }
        });
      }
    },
    components: {
      workRoomHeader,
      customOrderInfo,
      split

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .custom-order
    position absolute
    top 0px
    width 100%
    height 100vh
    background #FFF
    z-index 1
    .mint-navbar .mint-tab-item
      padding:8px
    .mint-tab-item-label
      font-size 13px
</style>
