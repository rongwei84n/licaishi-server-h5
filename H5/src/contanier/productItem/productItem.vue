<template>
    <div class="pro-content">
        <div class="pro-header-content">
            <div class="title-content">
                <span class="type">集合资管</span>
            </div>
            <div class="status-content">
                <span class="name">{{pShortName}}</span>
                <!-- TODO:此处根据状态替换icon -->
                <!-- <img src="" alt="状态"> -->
                <span>{{get_pSaleStatus}}</span>
            </div>
        </div>
        <div class="pro-main">
            <div class="main-left-content">
                <span class="span-key">预期年化</span>
                <span class="span-value annual-rate">{{annualRate}}</span>
            </div>
            <div class="main-right-content">
                <div>
                    <span class="span-key">产品期限</span>
                    <span class="span-value">{{pDulTime}}个月</span>
                </div>
                <div>
                    <span class="span-key">投资领域</span>
                    <span class="span-value">{{pInvestType}}</span>
                </div>
                <div>
                    <span class="span-key">返佣比例</span>
                    <span class="span-value">3%</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="es6">
export default {
  props: {
    pShortName: "", //产品简称
    pSaleStatus: "", //产品销售状态 01：预热中 02：募集中 03：募集结束 04：产品成立
    annualRate: "", //年化率
    pDulTime: "", //投资期限
    pInvestType: "" //投资领域
  },
  created() {},
  computed: {
    get_pSaleStatus() {
      console.log(this.pSaleStatus);
      switch (this.pSaleStatus) {
        case "01":
          return "预热中";
        case "02":
          return "募集中";
        case "03":
          return "募集结束";
        case "04":
          return "产品成立";
        default:
          break;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.pro-content {
    height: 100px;
    width: 100vw;

    .pro-header-content {
        height: 24px;
        border-bottom: 1px solid #fa5c5f;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .title-content {
            font-size: 12px;
            width: 70px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 4px;
            border-right: 1px solid red;
            color: red;
        }

        .status-content {
            flex: 1;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .name {
                font-size: 12px;
                margin-left: 4px;
            }
        }
    }

    .pro-main {
        display: flex;
        height: 78px;
        border-bottom: 4px solid red;

        >div {
            flex: 1;
            display: flex;
            flex-direction: column;
            margin: 10px 0;
            padding: 0 10px;
        }

        .main-left-content {
            border-right: 1px solid red;
            // justify-content: space-around;
        }
    }

    .span-key, .span-value {
        font-size: 10px;
    }

    // 年化率
    .annual-rate {
        flex: 1;
        font-size: 24px;
        display: inline-block;
        height: 42px;
        line-height: 42px;
    }

    .span-value {
        color: red;
    }
}
</style>


