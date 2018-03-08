/*
 * @Author: 张浩然 
 * @Date: 2018-03-07 19:23:27 
 * @Last Modified by: 张浩然
 * @Last Modified time: 2018-03-08 00:09:21
 *
 * 产品详情组件
 */

 <template>
    <div id="pDetails">
        <mt-header title="产品详情">
            <mt-button icon="back" slot="left"></mt-button>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
    </div>
</template>

 <script type="es6">
import ajax from "api/ajax";

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
  }
};
</script>

<style lang="stylus">
#pDetails {
    position: relative;
    height: 100vh;
    width: 100vw;
    z-index: 2;
}
</style>

 
 
