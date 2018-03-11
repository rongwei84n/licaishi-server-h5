<template>
  <div class="all-content">
    <div class="header">
      <mt-header title="我的订单">
        <router-link to="/" slot="left">
          <mt-button icon="back" v-on:click="handleClose"></mt-button>
        </router-link>
        <mt-button icon="search" slot="right" v-on:click="handleSearch"></mt-button>
      </mt-header>
    </div>

    <div class="page-navbar">
      <!-- navbar -->
      <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item id="1">全部</mt-tab-item>
        <mt-tab-item id="2">待打款</mt-tab-item>
        <mt-tab-item id="3">待结佣</mt-tab-item>
        <mt-tab-item id="4">已结佣</mt-tab-item>
        <mt-tab-item id="5">已失败</mt-tab-item>
      </mt-navbar>

      <!-- tabcontainer -->
      <mt-tab-container v-model="selected" class="mt-tab-contailer">
        <mt-tab-container-item id="1">
          <mt-cell v-for="n in 20" :title="'内容 ' + n" />
        </mt-tab-container-item>
        <div v-if="allOrders.length" class="slider-wrapper" ref="sliderWrapper">
          <mt-tab-container-item id="2" >
            <OrderListItem   v-for="(item,index) in allOrders" :key="index"
                             :orderId="item.orderNo"
                             :prodName="item.productName"
                             :orderAmount="item.commission"
                             :rebatePresent="item.commissionRatio"
                             :rebateAmount="cc"
                             :payStatus="item.payStatus"
                             :customerName="item.customerName"
                             :customerPhone="item.customerPhoneNum"/>
          </mt-tab-container-item>
        </div>

        <mt-tab-container-item id="3">
          <mt-cell v-for="n in 6" :title="'选项 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <mt-cell :title="'选项 4'" />
        </mt-tab-container-item>
        <mt-tab-container-item id="5">
          <mt-cell :title="'选项 5'" />
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
  import OrderListItem from "components/order/OrderListItem";

  export default {
    name: 'page-order-list',
    data () {
      return {
        neturl: 'http://47.97.100.240/',
        selected: '1',
        allOrders: {}, //全部订单
        waitPayOrders: {}, //待打款
        waitCommission: {},//带结佣
        alreadyCommission: {}, //已结佣
        alreadyFailed: {} //已失败
      }
    },
    created() {
      //查询订单
      let _this = this;
      window.phihome.util.netRequest(
        "get",
        _this.neturl + "srv/v1/order/list?pageNo=1&pageSize=100&type=1",
        "",
        "",
        function(response) {
          response = JSON.parse(response);
          if (response.status == 200) {
            //获取订单成功
            // _this.name = response.message;
            alert(response.result.list.length)
            _this.allOrders = response.result.list;
          } else {
          }
        }
      );
    },
    methods: {
      handleClose: function(){
      },
      handleSearch: function(){
      }

    },
    components: {
      OrderListItem
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.all-content {
  position: relative;
  width: 100%;
  height: 100%;
  background: #EDF1F5;
  z-index: 100;
  .header {
    border-bottom: solid 5px gainsboro;
  }

  .page-navbar {
    .mt-tab-contailer {
      .slider-wrapper {
        position: relative;
        width: 100%;
        overflow: hidden;
      }
    }
  }

}


</style>
