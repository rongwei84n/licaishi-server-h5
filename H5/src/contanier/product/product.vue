/*
 * @Author: 张浩然 
 * @Date: 2018-03-04 22:28:31 
 * @Last Modified by: 张浩然
 * @Last Modified time: 2018-03-04 23:13:24
 * 产品模块布局组件
 */

<template>
    <div class="main">
        <scroll class="scroll-content">
            <header ref="tabsContent" class="tabs-content" @click="set_tabs">
                <span>集合信托</span>
                <span>集合资管</span>
                <span>债权基金</span>
                <span>阳光私募</span>
                <span>股权基金</span>
            </header>
            <productItem></productItem>
        </scroll>
    </div>
</template>

<script type="es6">
import Scroll from "base/scroll/scroll";
import productItem from "components/pro_product/productItem";

export default {
  methods: {
    // 选项卡模块点击事件
    set_tabs(e) {
      // 获取当前点击的对象
      const currobj = e.target;
      const tabsChildNodeList = this.$refs.tabsContent.children;
      //   循环处理tabs被点击的样式
      for (let i = 0; i < tabsChildNodeList.length; i++) {
        const item = tabsChildNodeList[i];
        item.className = null;
      }
      currobj.className = "currSpan";
    }
  },
  components: {
    Scroll,
    productItem
  }
};
</script>

<style lang="stylus" scoped>
.main {
    position: relative;
    width: 100%;
    height: 100vh;

    .scroll-content {
        position: absolute;
        top: 60px;
        bottom: 46px;
        background: #fff;
        overflow: hidden;
        width: 100%;
    }

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


