/*
 * @Author: 张浩然 
 * @Date: 2018-03-04 22:28:31 
 * @Last Modified by: 张浩然
 * @Last Modified time: 2018-03-08 23:15:01
 * 产品模块布局组件
 */

<template>
  <div id="product">

    <header ref="tabsContent" class="tabs-content" @click="set_tabs">
      <span v-for="(item,index) in headerTabList" :class="{currSpan:activeIndex===index}" :data-index="index" :key="index">{{item}}</span>
    </header>
    <gatherTrust v-if="activeIndex===0"></gatherTrust>
    <gatherZG v-if="activeIndex===1"></gatherZG>
    <bondFund v-if="activeIndex===2"></bondFund>
    <sunPrivate v-if="activeIndex===3"></sunPrivate>
    <equityFund v-if="activeIndex===4"></equityFund>

  </div>
</template>

<script type="es6">
import Scroll from "base/scroll/scroll";
import gatherTrust from "components/gatherTrust/gatherTrust"; //集合信托
import gatherZG from "components/gatherZG/gatherZG"; //集合资管
import bondFund from "components/bondFund/bondFund"; //债权基金
import sunPrivate from "components/sunPrivate/sunPrivate"; //阳光私募
import equityFund from "components/equityFund/equityFund"; //股权基金

export default {
  data() {
    return {
      // 头部tabs列表
      headerTabList: [
        "集合信托",
        "集合资管",
        "债权基金",
        "阳光私募",
        "股权基金"
      ],
      activeIndex: 0 //初始化选中的tab项
    };
  },
  methods: {
    // 选项卡模块点击事件
    set_tabs(e) {
      // 获取当前点击的对象的索引
      const currobjKey = e.target.getAttribute("data-index");
      this.activeIndex = parseInt(currobjKey);
    }
  },
  components: {
    Scroll,
    gatherTrust,
    gatherZG,
    bondFund,
    sunPrivate,
    equityFund
  }
};
</script>

<style lang="stylus" scoped>
#product {
  position: relative;
  width: 100%;
  height: 100%;
  top: 40px;
  bottom: 46px;
  background: #fff;
  overflow: hidden;

  // 头部选项卡
  .tabs-content {
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #de0b17;
    background-color: #eff3f6;
    padding-bottom: 10px;

    >span {
      display: inline-block;
      height: 40px;
      line-height: 40px;
      flex: 1;
      text-align: center;
      font-size: 14px;
      color: #333333;
    }

    .currSpan {
      color: #FFFFFF;
      background-color: #de0b17;
    }
  }
}
</style>


