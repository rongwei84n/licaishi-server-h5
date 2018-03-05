<template>
  <div class="settings-all-0">
    <div class="setting-header">
      <div class="content-wrapper">
        <div class="avatar">
          <img width="64" height="64" src="~@/common/image/head_portrait.png" />
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
      <div class="view-all-orders" v-on:click="gotoOrderList">查看全部订单></div>
      <div class="my-order">
        我的订单
      </div>
      <div class="order-items">
        <div class="order-items-tab">待打款</div>
        <div class="order-items-tab">待结佣</div>
        <div class="order-items-tab">已结佣</div>
        <div class="order-items-tab">已失败</div>
      </div>
    </div>

    <div class="my-owns">
      <router-link tag="div" class="my-labrary" to="/rank">
        <span class="tab-link">我的工作室</span>
      </router-link>
      <div class="my-customer">我的客户</div>
      <div class="my-extend">我要推广</div>
      <div class="my-server">客服热线：400-0852-6325</div>
      <div class="my-padding"></div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "未登录",
      neturl: "http://47.97.100.240/"
    };
  },
  created: function() {
    let _this = this;
    window.phihome.util.netRequest(
      "get",
      _this.neturl + "srv/v1/accountDetail",
      "",
      "",
      function(response) {
        response = JSON.parse(response);
        if (response.errorCode == 0) {
          //网络请求成功
          let netResponse = JSON.parse(response.netResponse);
          if (netResponse.error == 0) {
            //获取账号成功
            _this.name = netResponse.data.nickname;
          } else {
            _this.name = "未设置";
          }
        } else {
          _this.name = "未登录";
        }
      }
    );
  },

  methods: {
    // 跳转到原生页面
    gotoLogin() {
      window.phihome.app.openPage("lcs.account.login", null, function(
        response
      ) {});
    },
    gotoPersonInfo() {
      window.phihome.app.openPage("lcs.account.personinfo", null, function(
        response
      ) {});
    },
    gotoOrderList() {
      this.$router.push({name: 'Orderlist'});
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable';

.settings-all-0 {
  position: fixed;
  width: 100%;
  top: 0px;
  bottom: 0;
  background: gainsboro;
  z-index: 2;

  .setting-header {
    padding-left: 18px;
    position: relative;
    background: white
    border-bottom: solid 1px gainsboro

    .content-wrapper {
      padding: 24px 12px 18px 0px;
      font-size: 0;

      .avatar {
        vertical-align: top;
        display: inline-block;
      }

      .content {
        align-content: center;
        display: inline-block;
        font-size: 14px;
        margin-left: 16px;

        .av-name {
          margin-top: 10px;
          font-size: 16px;
          margin-bottom: 10px;
        }

        .money-all {
          font-size: 12px;
        }
      }
    }
  }

  .right-icon {
    position: absolute;
    right: 18px;
    top: 24px;
    font-size: 20px;

    .ri-setting {
      visibility: hidden;
      display: inline-block;
    }

    .ri-message {
      display: inline-block;
    }
  }

  .setting-order {
    background: white;
    .view-all-orders {
      padding-top: 10px;
      text-align: right;
      padding-right: 18px;
      font-size: 14px;
    }

    .my-order {
      text-align: center;
      font-size: 16px;
    }

    .order-items {
      display: flex;
      width: 100%;
      height: 80px;
      line-height: 80px;

      .order-items-tab {
        flex: 1;
        text-align: center;
      }
    }
  }

  .my-owns {
    background: white;
    border-bottom: solid 1px gainsboro;

    .my-labrary {
      height: 48px;
      line-height: 48px;
      padding-left: 18px;
      border-bottom: solid 1px gainsboro;
    }
    .my-customer {
      height: 48px;
      line-height: 48px;
      padding-left: 18px;
      border-bottom: solid 1px gainsboro;
    }
    .my-extend {
      height: 48px;
      line-height: 48px;
      padding-left: 18px;
      border-bottom: solid 1px gainsboro;
    }
    .my-server {
      height: 48px;
      line-height: 48px;
      padding-left: 18px;
      border-bottom: solid 1px gainsboro;
    }
    .my-padding {
      height: 12px;
      line-height: 12px;
      background: white;
    }
  }
}
</style>
