/*
 * @Author: 张浩然 
 * @Date: 2018-03-07 19:23:27 
 * @Last Modified by: 张浩然
 * @Last Modified time: 2018-03-08 18:58:13
 *
 * 产品详情组件
 */

 <template>
  <div id="pDetails">
    <mt-header title="产品详情">
      <mt-button icon="back" slot="left"></mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <Scroll class="scroll-conntent">
      <div>
        <!-- 产品描述 -->
        <div class="p-presentation">
          <div class="header-content">
            <span class="header-title">光大-歌山16个月</span>
            <img src="../../../static/image/product_status/preparing.png" alt="">
          </div>
          <div class="body-content">
            <div class="data-content">
              <div>
                <span class="title">投资金额</span>
                <span>100-300万元</span>
                <span>100-300万元</span>
              </div>
              <div>
                <span class="title">预期年华收益</span>
                <span>8%</span>
                <span>100-300万元</span>
              </div>
              <div>
                <span class="title">返佣比例</span>
                <span class="red-span">5%</span>
                <span class="red-span">5%</span>
              </div>
            </div>
            <p class="annotation">
              【2018年01月26日08时更新】本期第9期，剩余额度2450 万，额度不多需要实名预约进款，预约600万+，预计周五 上午10点封账，有下期。（需要双录）
            </p>
          </div>
        </div>
        <!-- 基础信息 -->
        <div class="p-basic-information">
          <div class="pro-header-content">
            <span>基础信息</span>
            <span class="copy">
              <i></i>复制
            </span>
          </div>
          <div class="body-content">
            <div>
              <span class="title">产品全称</span>
              <span></span>
            </div>
            <div>
              <span class="title">募集规模</span>
              <span></span>
            </div>
            <div>
              <span class="title">投资领域</span>
              <span></span>
            </div>
            <div>
              <span class="title">付息方式</span>
              <span></span>
            </div>
            <div>
              <span class="title">大小配比</span>
              <span></span>
            </div>
            <div>
              <span class="title">发行机构</span>
              <span></span>
            </div>
            <div>
              <span class="title">投资期限</span>
              <span></span>
            </div>
            <div>
              <span class="title">发行时间</span>
              <span></span>
            </div>
          </div>
        </div>
        <!-- 产品优势 -->
        <div class="p-superiority">
          <div class="pro-header-content">
            <span>产品优势</span>
            <span class="copy">
              <i></i>复制
            </span>
          </div>
        </div>
        <!-- 募集账号 -->
        <div class="p-collect-account">
          <div class="pro-header-content">
            <span>募集账号</span>
            <span class="copy">
              <i></i>复制
            </span>
          </div>
        </div>
        <!-- 风险控制 -->
        <div class="risk-control">
          <div class="pro-header-content">
            <span>风险控制</span>
          </div>
        </div>
        <!-- 还款来源 -->
        <div class="source-repayment">
          <div class="pro-header-content">
            <span>还款来源</span>
          </div>
        </div>
        <!-- 资金用途 -->
        <div class="purpose">
          <div class="pro-header-content">
            <span>资金用途</span>
          </div>
        </div>
        <!-- 融资方 -->
        <div class="financing">
          <div class="pro-header-content">
            <span>融资方</span>
          </div>
        </div>
        <!-- 预览资料 -->
        <div class="preview-material">
          <div class="pro-header-content">
            <span>预览资料</span>
          </div>
        </div>
      </div>
    </Scroll>
  </div>
</template>

 <script type="es6">
import ajax from "api/ajax";
import Scroll from "base/scroll/scroll";

export default {
  data() {
    return {
      pCode: "", //产品编号
      pDetailsObj: {} //产品详情
    };
  },
  mounted() {
    this.get_pDetails();
  },
  methods: {
    /**
     * 获取产品详情
     */
    get_pDetails() {
      if (this.$route.query) {
        this.pCode = this.$route.query.pCode;
      }
      ajax({
        url: `/srv/v1/product/productDetail?pCode=${this.pCode}`,
        method: "GET"
      }).then(res => {
        if (res.status === this.$store.state.status) {
          this.pDetailsObj = res.data.result;
        }
      });
    }
  },
  components: {
    Scroll
  }
};
</script>

<style lang="stylus">
@import '~common/stylus/variable';

#pDetails {
  position: relative;
  height: 100vh;
  width: 100vw;
  z-index: 100;
  background-color: $color-background;

  .scroll-conntent {
    position: absolute;
    bottom: 34px;
    top: 40px;

    >div {
      >div {
        margin: 6px 0;
        background-color: $color-background-d;

        >div:first-of-type {
          border-bottom: 1px solid $color-title-border;
        }
      }

      .header-title {
        font-size: $font-size-medium-x;
        color: $color-text;
      }

      p, span {
        font-size: $font-size-medium;
        color: $color-text;
      }

      .title {
        color: $color-title;
        margin: 8px 0;
      }

      .red-span {
        color: $color-sub-theme;
      }

      // 带复制功能的title
      .pro-header-content {
        height: 36px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        .copy {
          position: absolute;
          right: 14px;
        }
      }

      // 内容块
      .body-content {
        padding: 10px 6px;
      }

      // 产品描述
      .p-presentation {
        .header-content {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          height: 60px;

          >img {
            width: 32px;
            height: 10px;
          }
        }

        .body-content {
          .data-content {
            display: flex;
            justify-content: space-between;
            margin-bottom: 6px;

            >div {
              flex: 1;
              display: flex;
              flex-direction: column;
              // justify-content: center;
              align-items: center;

              >span {
                margin: 7px 0;
              }
            }
          }

          .annotation {
            color: $color-sub-theme;
            line-height: 20px;
          }
        }
      }

      // 基础信息
      .p-basic-information {
        .body-content {
          >div {
            display: flex;
            align-items: center;
            justify-content: space-between;

            >span {
            }
          }
        }
      }
    }
  }
}
</style>

 
 
