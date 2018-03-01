<template>
  <div class="settings-all-0">
    <div class="setting-header">
      <div class="content-wrapper">
        <div class="avatar">
          <img width="64" height="64" src="~@/common/image/workRoom.png"/>
        </div>
        <div class="content">
          <div class="av-name" v-on:click="gotoLogin">{{name}}</div>
          <div class="money-all">累计佣金: 10000元</div>
        </div>
      </div>
      <div class="right-icon">
        <div class="ri-setting" v-on:click="gotoPersonInfo">设置</div>
        <div class="ri-message">消息</div>
      </div>
    </div>

    <div class="setting-order">
      <div class="view-all-orders">查看全部订单></div>
      <div class="my-order">
        我的订单
      </div>
      <div class="order-items">
        <div class="order-item-wait-pay">待打款</div>
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
      return {
        name: '未登录',
        neturl: 'http://47.97.100.240/'
      }
    },
    created: function () {
      let _this = this;
      window.phihome.util.netRequest("get", _this.neturl + 'srv/v1/accountDetail', '', '',
        function (response) {
          response = JSON.parse(response);
          if (response.errorCode == 0) { //网络请求成功
            let netResponse = JSON.parse(response.netResponse);
            if (netResponse.error == 0) { //获取账号成功
              _this.name = netResponse.data.nickname;
            } else {
              _this.name = '未设置';
            }
          } else {
            _this.name = '未登录';
          }
        })
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
  @import "~common/stylus/variable"

  .settings-all-0
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    background: #fff
    .setting-header
      padding-left 18px
      position: relative
      .content-wrapper
        padding: 24px 12px 18px 0px
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
            font-size: 12px
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
      .view-all-orders
        text-align right
        padding-right: 18px
        font-size: 14px
      .my-order
        text-align center
        font-size: 16px
      .order-items
        position relative
        padding-left 18px
        display inline-block
        .order-item-wait-pay
          font-size 20px
    .my-owns
      padding-left 18px
      .my-labrary
        font-size: 20px

</style>
