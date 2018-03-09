/*
 * @Author: 张浩然 
 * @Date: 2018-03-07 19:23:27 
 * @Last Modified by: 张浩然
 * @Last Modified time: 2018-03-09 11:27:36
 *
 * 产品详情组件
 */

 <template>
  <div id="pDetails">
    <mt-header title="产品详情">
      <mt-button icon="back" @click="back" slot="left"></mt-button>
      <i class="fa fa-share-alt extend-click" slot="right"></i>
    </mt-header>
    <Scroll class="scroll-conntent">
      <div>
        <!-- 产品描述 -->
        <div class="p-presentation">
          <div class="header-content">
            <span class="header-title">光大-歌山16个月</span>
            <img :src="pStatus" alt="">
            <!-- <img src="../../common/image/p-warm-up.png" alt=""> -->
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
          <div class="body-content">
            <p>
              1、苏州姑苏区核心区域项目质押，对应股权评估价值 9.12亿元，该项目位于苏州留园附近，地理位置极其优 越，项目由歌山置业与恒大集团联合开发，剩余未开发 部分土地价值28亿，该土地目前未设置抵押，股权价值 高
            </p>
            <p>
              2、遵义熙悦以其持有位于遵义的东欣广场E组团现房提 供抵押；抵押物评估价值0.76亿元；以上抵押物合计价 值9.88亿，综合抵质押率不超过40%
            </p>
            <p>
              3、交易对手歌山控股（AA发债主体）属于民营企业500 强，连续三年营业收入过百亿，还款来源有保障。
            </p>
            <p>
              4、实际控制人夫妇提供连带责任担保.
            </p>
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
          <div class="body-content">
            <p>
              1、苏州姑苏区核心区域项目质押，对应股权评估价值 9.12亿元，该项目位于苏州留园附近，地理位置极其优 越，项目由歌山置业与恒大集团联合开发，剩余未开发 部分土地价值28亿，该土地目前未设置抵押，股权价值 高
            </p>
            <p>
              2、遵义熙悦以其持有位于遵义的东欣广场E组团现房提 供抵押；抵押物评估价值0.76亿元；以上抵押物合计价 值9.88亿，综合抵质押率不超过40%
            </p>
            <p>
              3、交易对手歌山控股（AA发债主体）属于民营企业500 强，连续三年营业收入过百亿，还款来源有保障。
            </p>
            <p>
              4、实际控制人夫妇提供连带责任担保.
            </p>
          </div>
        </div>
        <!-- 风险控制 -->
        <div class="risk-control">
          <div class="pro-header-content">
            <span>风险控制</span>
          </div>
          <div class="body-content">
            <p>
              1、苏州姑苏区核心区域项目质押，对应股权评估价值 9.12亿元，该项目位于苏州留园附近，地理位置极其优 越，项目由歌山置业与恒大集团联合开发，剩余未开发 部分土地价值28亿，该土地目前未设置抵押，股权价值 高
            </p>
            <p>
              2、遵义熙悦以其持有位于遵义的东欣广场E组团现房提 供抵押；抵押物评估价值0.76亿元；以上抵押物合计价 值9.88亿，综合抵质押率不超过40%
            </p>
            <p>
              3、交易对手歌山控股（AA发债主体）属于民营企业500 强，连续三年营业收入过百亿，还款来源有保障。
            </p>
            <p>
              4、实际控制人夫妇提供连带责任担保.
            </p>
          </div>
        </div>
        <!-- 还款来源 -->
        <div class="source-repayment">
          <div class="pro-header-content">
            <span>还款来源</span>
          </div>
          <div class="body-content">
            <p>
              1、苏州姑苏区核心区域项目质押，对应股权评估价值 9.12亿元，该项目位于苏州留园附近，地理位置极其优 越，项目由歌山置业与恒大集团联合开发，剩余未开发 部分土地价值28亿，该土地目前未设置抵押，股权价值 高
            </p>
          </div>
        </div>
        <!-- 资金用途 -->
        <div class="purpose">
          <div class="pro-header-content">
            <span>资金用途</span>
          </div>
          <div class="body-content">
            <p>
              1、苏州姑苏区核心区域项目质押，对应股权评估价值 9.12亿元，该项目位于苏州留园附近，地理位置极其优 越，项目由歌山置业与恒大集团联合开发，剩余未开发 部分土地价值28亿，该土地目前未设置抵押，股权价值 高
            </p>
          </div>
        </div>
        <!-- 融资方 -->
        <div class="financing">
          <div class="pro-header-content">
            <span>融资方</span>
          </div>
          <div class="body-content">
            <p>
              1、苏州姑苏区核心区域项目质押，对应股权评估价值 9.12亿元，该项目位于苏州留园附近，地理位置极其优 越，项目由歌山置业与恒大集团联合开发，剩余未开发 部分土地价值28亿，该土地目前未设置抵押，股权价值 高
            </p>
          </div>
        </div>
        <!-- 预览资料 -->
        <div class="preview-material">
          <div class="pro-header-content">
            <span>预览资料</span>
          </div>
        </div>
        <white-space></white-space>
      </div>
    </Scroll>
    <!-- 推荐 -->
    <div class="recommend-content">
      <a href="tel:0147-88469258">
        <i class="fa-phone-square fa"></i>
        咨询
      </a>
      <a class="subscribe" @click="subscribe">立即预约</a>
    </div>
  </div>
</template>

 <script type="es6">
import ajax from "api/ajax";
import Scroll from "base/scroll/scroll";
import whiteSpace from "base/whiteSpace/whiteSpace";

export default {
  data() {
    return {
      pCode: "", //产品编号
      pStatusCode: "", //产品状态编码
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
    },
    /**
     * 立即预约
     */
    subscribe() {
      // 跳转到预约页面，目前不知是否需要接口
      this.$router.push("/pOrder");
    },
    back() {
      this.$router.go(-1);
    }
  },
  computed: {
    pStatus() {
      switch ("01") {
        // switch (this.pStatusCode) {
        // 预热中
        case "01":
          return require("../../common/image/p-warm-up.png");
          break;
        // 募集中
        case "02":
          return require("../../common/image/p-funding.png");
          break;
        // 募集结束
        case "03":
          return require("../../common/image/p-finish.png");
          break;
        // 产品成立
        case "04":
          return require("../../common/image/p-complete.png");
          break;
        default:
          break;
      }
    }
  },
  components: {
    Scroll,
    whiteSpace
  }
};
</script>

<style lang="stylus">
@import '~common/stylus/variable';

#pDetails {
  position: relative;
  height: 100%;
  width: 100%;
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
        margin: 14px 0 8px 0;
      }

      p, span, a {
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
          // justify-content: space-around;
          // justify-content: space-evenly;
          align-items: center;
          height: 60px;

          >img {
            width: 44px;
            height: 14px;
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

      // 产品优势
      .p-superiority, .p-collect-account, .risk-control, .source-repayment {
        .body-content {
          >p {
            line-height: 22px;
            margin: 6px 0;
          }
        }
      }
    }
  }

  // 咨询
  .recommend-content {
    height: 40px;
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100vw;
    background-color: $color-background-d;

    >a {
      flex: 1;
      line-height: 40px;
      text-align: center;
      color: #464545;
    }

    .subscribe {
      color: $color-background-d;
      background-color: $color-sub-theme;
    }
  }
}
</style>

 
 
