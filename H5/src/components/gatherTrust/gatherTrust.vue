/*
 * @Author: 张浩然 
 * @Date: 2018-03-05 10:11:06 
 * @Last Modified by: 张浩然
 * @Last Modified time: 2018-03-07 00:12:35
 * 产品--集合信托--子组件
 */

<template>
  <div class="gatherTrust">
    <conditionTab @onClick="get_tabsIndex"></conditionTab>
    <Scroll class="scroll-conntent" :data="productList" :pullup="pullup" @scrollToEnd="scrollToEnd">
      <div>
        <product-item v-for="(item,index) in productList" :key="index" :productItem="item"></product-item>
        <loading v-if="pullup"></loading>
        <to-end v-else></to-end>
      </div>
    </Scroll>
    <mt-popup v-model="popupVisible" position="bottom">
      <prodQueryModal :popVisible="popupVisible"></prodQueryModal>
    </mt-popup>
  </div>
</template>

<script type="es6">
import ajax from "api/ajax";
import Scroll from "base/scroll/scroll";
import loading from "base/loading/loading";
import toEnd from "base/toEnd/toEnd";
import productItem from "components/pro_product/productItem";
import prodQueryModal from "components/ProdQueryModal/prodQueryModal";
import conditionTab from "components/conditionTab/conditionTab";

export default {
  data() {
    return {
      /*  集合信托--产品列表*/
      productList: [],
      loading: false,

      popupVisible: true, //筛选条件
      /**
       * 翻页数据
       */
      pullup: true, //开启上拉加载
      pageNo: 1 //当前页
    };
  },
  created() {
    this.get_proList();
  },
  methods: {
    // 上拉加载
    scrollToEnd() {
      this.pageNo++;
      if (this.pageNo === 4) {
        this.pullup = false;
      }
      // this.get_proList();
    },
    /**
     * @param index 条件筛选栏的索引
     */
    get_tabsIndex(index) {
      console.log(index);
      switch (index) {
        case 0:
          this.pageNo = 1;
          this.pullup = true;
          this.get_proList();
          break;
        case 1:
          this.pageNo = 1;
          this.pullup = true;
          this.get_proList();
          break;
        case 2:
          this.pageNo = 1;
          this.pullup = true;
          this.get_proList();
          break;
        // 打开条件筛选框
        case 3:
          this.popupVisible = true;
          break;
        default:
          break;
      }
    },
    /**
     *@author
     */
    get_proList() {
      ajax({
        url: `/srv/v1/product/list?pageNo=${this.pageNo}&pageSize=${
          this.$store.state.pageSize
        }&type=02`,
        method: "GET"
      }).then(res => {
        if (res.status === 200) {
          this.productList = [...this.productList, ...res.data.result.list];

          if (res.data.result.pager) {
            this.pullup = res.data.result.pager.hasNaxtPage;
          } else {
            this.pullup = false;
          }
        }
      });
    }
  },
  components: {
    Scroll,
    productItem,
    conditionTab,
    loading,
    toEnd,
    prodQueryModal
  }
};
</script>

<style lang="stylus">
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

  // 弹出框的高度
  .mint-popup-bottom {
    // height: 70%;
  }
}
</style>


