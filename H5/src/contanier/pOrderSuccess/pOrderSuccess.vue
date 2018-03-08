/*
 * @Author: 张浩然 
 * @Date: 2018-03-07 19:23:27 
 * @Last Modified by: 张浩然
 * @Last Modified time: 2018-03-09 00:32:18
 *
 * 产品预约成功
 */

 <template>
  <div id="order">
    <mt-header title="产品预约成功">
      <mt-button icon="back" @click="back" slot="left"></mt-button>
    </mt-header>
    <Scroll id="scroll">
      <div class="body">
        <img src="../../common/image" alt="">
        <p>恭喜您！预约成功，请等待审核</p>
        <div class="btn-content">
          <span class="checkOrder" @click="checkOrder">查看订单</span>
          <span class="goOrder" @click="goOrder">继续预约</span>
        </div>
        <whiteSpace></whiteSpace>
      </div>
    </Scroll>
    <!-- 推荐 -->
    <footer class="footer">
      <span class="submit">提交</span>
    </footer>
  </div>
</template>

 <script type="es6">
import ajax from "api/ajax";
import Scroll from "base/scroll/scroll";
import whiteSpace from "base/whiteSpace/whiteSpace";

export default {
  props: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {
    // 跳转到我的订单
    checkOrder() {},

    // 跳转到产品列表
    goOrder() {
      // 此处跳转到产品列表不能添加历史记录
    },
    /**
     * 返回按钮单机事件
     */
    back() {
      this.$router.go(-1);
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

#order {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 100;
  background-color: $color-background;

  #scroll {
    position: absolute;
    top: 40px;
    bottom: 50px;
    left: 0;
    right: 0;

    .body {
      margin-top: 6px;
      width: 100%;

      >img {
        width: 64px;
        height: 64px;
        margin-top: 50px;
      }

      >p {
        font-size: $font-size-medium;
        color: $color-highlight-background;
      }

      .btn-content {
        height: 34px;
        width: 100%;
      }
    }
  }

  .footer {
    height: 40px;
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: -1;
  }
}
</style>

 
 
