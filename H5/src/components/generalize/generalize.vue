<template>
  <div class="generalize-wrapper">
    <workRoomHeader @back="back" mytitle=""></workRoomHeader>
    <div class="logo">
    </div>
    <div class="generalize-avatar">
      <img width="100%" height="100%" :src="headerAvatar" />
    </div>
    <div class="generalize-content">
      <div class="name-class">
        {{name}}
      </div>
      <div class="tel-class">
        {{tel}}
      </div>
      <div class="des-class">
        &nbsp;&nbsp;&nbsp;&nbsp;{{des}}
      </div>
      <div class="tuiguang-class">
        推广方式
      </div>
      <div class="tuiguangfangshi">
        <table>
          <tr>
            <td>
              <div class="share-content">
                <p>1、向客户出示二维码，通过扫码注册</p>
                <img :src="qrcodeUrl" alt="">
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="share-content">
                <p>2、分享链接给客户，通过链接注册</p>
                <mt-button type="danger" @click="btnEvent">链接分享</mt-button>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <!-- 分享模态框组件 -->
    <SoshmModal @confirmClick="confirmClick" @fooModalContent="soshmStatus = false" v-if="soshmStatus"></SoshmModal>
  </div>
</template>

<script type="text/ecmascript-6" crossorigin>
import workRoomHeader from "components/workRoomHeader/workRoomHeader";
import SoshmModal from "base/soshmModal/soshmModal";

export default {
  data() {
    return {
      headerAvatar: "",
      name: "",
      tel: "",
      des: "",
      uid: "",
      neturl: "http://47.97.100.240/",
      // TODO:在后面带上当前理财师的uid参数
      // TODO:目标地址
      target: "http://47.97.100.240:8085",
      qrcodeUrl: "", //二维码分享地址
      /**
       * 分享模态框
       */
      soshmStatus: false
    };
  },
  created() {
    this.qrcodeUrl = `http://qr.topscan.com/api.php?text=${
      this.target
    }/shareRegister?uid=${this.uid}`;
    this.queryAccountDetail();
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    // 分享按钮点击事件
    btnEvent() {
      this.soshmStatus = !this.soshmStatus;
    },
    // 分享模态框确定点击事件
    confirmClick(index) {
      this.AppShare(index);
      this.soshmStatus = !this.soshmStatus;
    },
    // 在App内进行分享
    AppShare(index) {
      let _this = this;
      // 按枚举顺序输出？
      console.log(index);

      // let params = {
      //   url: `${this.currentItem.url}`,
      //   title: this.currentItem.share_main_title,
      //   share_logo_url: this.currentItem.share_logo_url,
      //   content: this.currentItem.share_sub_title,
      //   sharetype: index
      // };
      // 发短信参数特殊处理
      if (index === 6) {
        params = {
          url: "",
          title: "",
          share_logo_url: "",
          content: `${window.localStorage.userName}邀请您加入${
            this.currentItem.name
          }${this.currentItem.url}`,
          sharetype: index
        };
      }

      let sharedStr = _this.tel;
      if(_this.name != '' ) {
        sharedStr = '理财师' + _this.name;
      }
      sharedStr = sharedStr + " 邀请你加入理财师";
      sharedStr += ";"; //分享的标题和URL，用;隔开
      sharedStr += "http://47.97.100.240:8085/";

      var page = ""; //微信分享
      if (index === 2) {//朋友圈分享
        page = "lcs.account.share.wechatmoments";
      } else if(index ===3) {
        page = "lcs.account.share.wechat";
      }

      if (page != "") { //微信，朋友圈分享
        window.phihome.app.openPage(page, sharedStr + '', function(
          response
        ) {
        });
      }
      if (window.webkit) {
        // 跟ios发
      } else if (window.jsInterface) {
        // 跟安卓跑
      } else {
      }
    },
    queryAccountDetail() {
      window.phihome.util.netRequest(
        "get",
        this.neturl + "srv/v1/accountDetail",
        "",
        "",
        response => {
          response = JSON.parse(response);
          if (response.error == 0) {
            //获取账号成功
            this.name = response.data.nickname;
            this.tel = response.data.phonenumber;
            this.des = response.data.workstudio;
            this.headerAvatar = response.data.img;
            // console.log(111);
            // console.log("this.headerAvatar", response.data.img);
            this.uid = response.data.uid;
            // TODO:更新地址
            this.qrcodeUrl = `http://qr.topscan.com/api.php?text=${
              this.target
            }/shareRegister?uid=${this.uid}`;
            console.log(this.qrcodeUrl);
            //this.isLogin = true;
          } else {
            this.name = "未设置";
            //this.isLogin = false;
            this.headerAvatar = "";
          }
        }
      );
    }
  },
  components: {
    workRoomHeader,
    SoshmModal
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.generalize-wrapper {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100vh;
  background: #FFF;
  z-index: 100;
  background-image: url('~@/common/image/lcs_tuiguang.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;

  .logo {
    position: absolute;
    width: 14%;
    top: 4vh;
    right: 3vw;
    height: 6%;
    background-image: url('~@/common/image/lcs-logo.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .generalize-avatar {
    width: 90px;
    height: 90px;
    margin: 0px auto 10px auto;
    border-radius: 50%;
    background: #FFF;
    overflow: hidden;
  }

  .generalize-content {
    text-align: center;
    color: #FFF;

    div {
      margin-top: 14px;
    }

    .name-class {
      font-size: 15px;
    }

    .tel-class {
      font-size: 15px;
    }

    .des-class {
      font-size: 13px;
      line-height: 22px;
      text-align: left;
      padding: 0px 10px;
    }

    .tuiguangfangshi {
      table {
        margin: auto;

        tr {
          td {
            height: 44px;
            line-height: 44px;
            text-align: left;
            font-size: 14px;

            .share-content {
              display: flex;
              flex-direction: column;
              align-items: center;

              >img {
                width: 140px;
                height: 140px;
              }
            }
          }
        }
      }
    }
  }

  .mint-header {
    background: none;
    height: 45px;
  }

  .mint-header-button.is-left {
    color: #FFF;
  }
}
</style>
