<template>
  <div class="all-content">
    <div class="header">
      <mt-header title="我的订单">
        <mt-button icon="back" @click="back" slot="left"></mt-button>
        <mt-button icon="search" slot="right" @click="handleSearch"></mt-button>
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
      <scroll class="scroll-content" :data="arrOrderList">
        <div>
          <!-- 此处建议先按状态分成5个子组件。再5个子组件内去分别处理逻辑，类似于产品模块 -->
          <!-- TODO:测试组件--开始 -->
          <div v-show="arrOrderList.length>0">
            <OrderListItem v-for="(item,index) of arrOrderList" :key="index" :orderId="item.cardNo" :prodName="item.productShortName" :orderAmount="item.amount" :rebatePresent="item.comRatio" :rebateAmount="item.commission" :payStatus="item.status" :customerName="item.customerName" />
          </div>
          <!-- TODO:测试组件--结束 -->

          <!-- <div v-for="(n,index) of 100" :key="index" class="textDiv">{{n}}</div> -->
          <mt-tab-container v-model="selected" class="mt-tab-contailer">
            <mt-tab-container-item id="1" v-if="arrOrderList.length<=0">
              没有全部产品
            </mt-tab-container-item>
            <mt-tab-container-item id="2" v-if="arrOrderList.length<=0">
              没有待打款产品
            </mt-tab-container-item>
            <mt-tab-container-item id="3" v-if="arrOrderList.length<=0">
              没有待结佣产品
            </mt-tab-container-item>
            <mt-tab-container-item id="4" v-if="arrOrderList.length<=0">
              没有已结佣产品
            </mt-tab-container-item>
            <mt-tab-container-item id="5" v-if="arrOrderList.length<=0">
              没有已失败产品
            </mt-tab-container-item>
          </mt-tab-container>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import ajax from "api/ajax";
import Scroll from "base/scroll/scroll";
import OrderListItem from "components/order/OrderListItem";

export default {
  name: "page-order-list",
  data() {
    return {
      selected: "1",

      /**
       * 测试用
       * 订单总对象
       */
      arrOrderList: {
        /* 待打款 */
        "01": [],
        /* 待结佣 */
        "02": [],
        /* 已结佣 */
        "03": [],
        /* 已失败 */
        "99": []
      }
    };
  },
  watch: {
    selected: function (val, oldVal) {
      // 这里就可以通过 val 的值变更来确定
      let order = "0";
      if(val == 1) {
        order = "00";
      }else if(val == 2) {
        order = "01";
      }else if(val == 3) {
        order = "02";
      }else if(val == 4) {
        order = "03";
      }else if(val == 5) {
        order = "99";
      }
      this.get_orderList(order);
    }
  },

  created() {
    let _this = this;
    _this.selected = this.$route.params.tab_id;
    //查询订单
    if(_this.selected == 1) {
      _this.get_orderList("0");
    }
  },
  methods: {
    handleSearch() {},
    back() {
      this.$router.go(-1);
    },
    /**
     * 测试用
     * 请求全部订单
     * 用于测试滑动组件
     */
    get_orderList(order) {
      let _this = this;
      let _url = "/srv/v1/order/list?pageNo=1&pageSize=5&status=" + order;

      ajax({
        url: _url,
        method: "GET"
      }).then(res => {
        if (res.status === 200) {
          this.arrOrderList = res.data.result.list;
        } else {
          this.arrOrderList = '';
        }
      });
    }
  },

  components: {
    Scroll,
    OrderListItem
  }
};
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
    height: calc(100% - 55px);
    position: relative;

    .mt-tab-contailer {
      .slider-wrapper-1 {
        position: relative;
        width: 100%;
        overflow: hidden;
      }

      .slider-wrapper-2 {
        position: relative;
        width: 100%;
        overflow: hidden;
      }
    }

    /* 滑动块区域 */
    .scroll-content {
      position: absolute;
      top: 56px;
      bottom: 0;
      overflow: hidden;
      width: 100%;

      .textDiv {
        height: 100px;
      }
    }
  }
}
</style>
