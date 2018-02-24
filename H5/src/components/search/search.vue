<template>
  <div class="settings">
    <div class="setting-header">
      <div class="content-wrapper">
        <div class="avatar">
          <img width="64" height="64" src="~@/common/image/workRoom.png"/>
        </div>
        <div class="content">
          <div class="av-name" v-on:click="gotoLogin">未登录</div>
          <div class="money-all">累计佣金: 10000元</div>
        </div>
      </div>
      <div class="right-icon">
        <div class="ri-setting" v-on:click="gotoPersonInfo">设置</div>
        <div class="ri-message">消息</div>
      </div>
    </div>

    <div class="setting-order">
      <div class="my-order">我的订单</div>
      <div class="wait_pay">
        <div>待打款</div>
        <div>待结佣</div>
        <div>已结佣</div>
        <div>已失败</div>
      </div>
    </div>

    <div class="my-owns">
      <div class="my-labrary">我的工作室</div>
      <div class="my-customer">我的客户</div>
      <div class="my-extend">我要推广</div>
      <div class="my-server">客服热线：400-0852-6325</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },

    methods: {
      gotoLogin() {
        window.phihome.app.openPage("lcs.account.login", null, function (response) {
        });
      },
      gotoPersonInfo() {
        window.phihome.app.openPage("lcs.account.personinfo", null, function (response) {
        });
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .settings
    .setting-header
      position: relative
      .content-wrapper
        color: #fff
        padding: 24px 12px 18px 24px
        font-size: 0
        .avatar
          vertical-align: top
          display: inline-block
        .content
          align-content: center
          display: inline-block
          font-size: 14px
          margin-left: 16px
          .av-name
            margin-top: 10px
            font-size: 16px
            margin-bottom: 10px
          .money-all
            font-size: 12 px
    .right-icon
      position: absolute
      right: 18px
      top: 24px
      font-size: 20px
      .ri-setting
        display: inline-block
      .ri-message
        display: inline-block
    .setting-order
      .my-order
        font-size: 16px

</style>
