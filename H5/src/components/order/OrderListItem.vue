<template>
  <div class="all-content">
      <mt-cell :title="dorderId" value="待打款"/>
      <mt-cell :title="dProdName"></mt-cell>
      <mt-cell :title="dOrderAmount"></mt-cell>
      <mt-cell :title="dRebatePresent"></mt-cell>
      <mt-cell :title="dRebateAmount"></mt-cell>
      <mt-cell :title="dPayStatus"></mt-cell>
      <mt-cell :title="dCustomerName"></mt-cell>
      <mt-cell v-if="payStatus==='01'" value="取消订单"></mt-cell>
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
      payStatus: "", //支付状态(待打款可以取消订单)
      customerName: "" //客户姓名
    },
    data () {
      return {
        dorderId: "订单号: " + this.orderId,
        dProdName: "产品名称: " + this.prodName,
        dOrderAmount: "订单金额: " + this.orderAmount,
        dRebatePresent: "返佣比例: " + this.rebatePresent,
        dRebateAmount: "返佣金额: " + this.rebateAmount,
        dPayStatus: "支付状态: " + this.payStatus,
        dCustomerName: "客户姓名: " + this.customerName,
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .all-content {
  }

</style>
