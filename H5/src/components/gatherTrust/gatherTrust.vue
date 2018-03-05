/*
 * @Author: 张浩然 
 * @Date: 2018-03-05 10:11:06 
 * @Last Modified by: 张浩然
 * @Last Modified time: 2018-03-05 20:08:35
 * 产品--集合信托--子组件
 */

<template>
    <div class="gatherTrust">
        <conditionTab @onClick="get_tabsIndex"></conditionTab>
        <Scroll class="scroll-conntent" :data="productList">
            <div>
                <productItem></productItem>
                <productItem></productItem>
                <productItem></productItem>
                <productItem></productItem>
                <productItem></productItem>
                <productItem></productItem>
                <productItem></productItem>
            </div>
        </Scroll>
    </div>
</template>

<script type="es6">
import Scroll from "base/scroll/scroll";
import productItem from "components/pro_product/productItem";
import conditionTab from "components/conditionTab/conditionTab";

export default {
  data() {
    return {
      /*  集合信托--产品列表*/
      productList: []
    };
  },
  methods: {
    /**
     * @event 获取条件筛选栏的索引
     */
    get_tabsIndex(index) {
      console.log(index);
      // TODO:此处根据索引枚举查询条件
    }
  },
  components: {
    Scroll,
    productItem,
    conditionTab
  }
};
</script>

<style lang="stylus" scoped>
.gatherTrust {
    position: relative;
    width: 100%;
    height: calc(100vh - 90px);

    .tabs-content {
    }

    /* 滑动块区域 */
    .scroll-conntent {
        position: absolute;
        top: 34px;
        bottom: 46px;
        overflow: hidden;
        width: 100%;
    }
}
</style>


