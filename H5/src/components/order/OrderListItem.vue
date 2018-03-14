<template>
  <div class="all-content">
    <mt-cell :title="cDisplayOrderId">{{cDisplayStatus}}</mt-cell>
    <mt-cell :title="cDisplayProdName"></mt-cell>
    <mt-cell :title="cDisplayOrderAmount"></mt-cell>
    <mt-cell :title="cDisplayRebatePresent"></mt-cell>
    <mt-cell :title="cDisplayRebateAmount"></mt-cell>
    <mt-cell :title="cDisplayVoucherStatus"></mt-cell>
    <mt-cell :title="cDisplayCustomerName"></mt-cell>
    <mt-cell v-if="status==='01'" value="取消订单"></mt-cell>
  </div>
</template>

<script>
  export default {
    name: "order-list-item",
    props: {
      orderId: "", //订单
      prodName: "", //产品名称
      orderAmount: "", //订单金额
      rebatePresent: "", //返佣比例
      rebateAmount: "",  //返佣金额
      status: "", //订单状态(待打款可以取消订单)
      voucharStatus: "",
      customerName: "" //客户姓名
    },
    data() {
      return {}
    },
    computed:{
      cDisplayOrderId(){
        return "订单号: " + this.orderId;
      },
      cDisplayProdName(){
        return "产品名称: " + this.prodName;
      },
      cDisplayOrderAmount(){
        return "订单金额: " + this.orderAmount;
      },
      cDisplayRebatePresent(){
        return "返佣比例: " + this.rebatePresent;
      },
      cDisplayRebateAmount(){
        return "返佣金额: " + this.rebateAmount;
      },
      cDisplayVoucherStatus(){ //支付状态
        if(this.voucharStatus === "1") {
          return "支付状态: 已支付";
        }else {
          return "支付状态: 未支付";
        }
      },
      cDisplayStatus(){ //订单状态
        if(this.status === "01") {
          return "待打款";
        }else if(this.status === "02") {
          return "待结佣";
        }else if(this.status === "03") {
          return "已结佣";
        }else if(this.status === "99") {
          return "已失效";
        }
        return this.status;
      },
      cDisplayCustomerName(){
        return "客户姓名: " + this.customerName;
      },
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .all-content {
  }

</style>
