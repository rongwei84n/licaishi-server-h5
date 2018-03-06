/*
 * @Author: 张浩然 
 * @Date: 2018-03-05 10:11:06 
 * @Last Modified by: 张浩然
 * @Last Modified time: 2018-03-06 20:08:02
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
import ajax from "api/ajax";
import Scroll from "base/scroll/scroll";
import productItem from "components/pro_product/productItem";
import conditionTab from "components/conditionTab/conditionTab";

export default {
  data() {
    return {
      /*  集合信托--产品列表*/
      productList: [],
      loading: false,

      /**
       * 翻页数据
       */
      pageNo: 1 //当前页
    };
  },
  created() {
    this.get_proList();
  },
  methods: {
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.list[this.list.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i);
        }
        this.loading = false;
      }, 2500);
    },
    /**
     * @param index 条件筛选栏的索引
     */
    get_tabsIndex(index) {
      console.log(index);
    },
    /**
     *@author
     */
    get_proList() {
      console.log(this.$store.state.pageSize);
      ajax({
        url: `/srv/v1/product/list?pageNo=${this.pageNo}&pageSize=${
          this.$store.state.pageSize
        }&type=01`,
        method: "GET"
      }).then(res => {
        if (res.status === 200) {
          this.productList = res.data.result.list;
        }
      });
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


