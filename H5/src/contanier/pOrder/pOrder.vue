/*
 * @Author: 张浩然 
 * @Date: 2018-03-07 19:23:27 
 * @Last Modified by: 张浩然
 * @Last Modified time: 2018-03-11 22:33:59
 *
 * 基础布局组件
 * 带头部与底部布局
 */

 <template>
  <div id="order">
    <mt-header title="预约">
      <mt-button icon="back" @click="back" slot="left"></mt-button>
    </mt-header>
    <Scroll id="scroll">
      <div class="body">
        <mt-field label="产品名称" disabled v-model="pName"></mt-field>
        <!-- TODO:此处客户另外会提供接口获取 -->
        <mt-field label="客户姓名" placeholder="请输入客户姓名" v-model="userName"></mt-field>
        <mt-field label="身份证号" placeholder="请输入身份证号" v-model="cardId"></mt-field>
        <!-- <mt-field label="手机号" placeholder="请输入手机号" v-model="phone"></mt-field> -->
        <mt-field label="银行卡账号" placeholder="请输入手机号" v-model="bankCard"></mt-field>
        <mt-field label="打卡行" placeholder="点击右侧图标选择银行" v-model="bankName">
          <i class="fa fa-credit-card"></i>
        </mt-field>
        <mt-field label="预约金额" placeholder="请输入预约金额" v-model="amount">
          <span>万元</span>
        </mt-field>
        <mt-field label="最迟打款日期" placeholder="点击右侧图标选择日期" disabled v-model="lastPayDate">
          <i class="fa fa-calendar extend-click" @click="openDatePicker"></i>
        </mt-field>
        <mt-field label="备注" placeholder="备注" type="textarea" rows="4" v-model="note"></mt-field>
      </div>
    </Scroll>
    <!-- 推荐 -->
    <footer class="footer">
      <span class="submit" @click="submit">提交</span>
    </footer>
    <mt-datetime-picker type="date" ref="picker" v-model="pickerValue" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" @confirm="handleConfirm">
    </mt-datetime-picker>
  </div>
</template>

 <script type="es6">
import formatDateTime from "common/js/date";
// import moment from "moment";
import ajax from "api/ajax";
import Scroll from "base/scroll/scroll";
import whiteSpace from "base/whiteSpace/whiteSpace";

export default {
  data() {
    return {
      //产品编号
      pCode: "",
      //产品名称
      pName: "",
      userId: "", //客户id
      /**
       *
       */
      userName: "", //客户姓名
      cardId: "", //身份证号
      bankCard: "", //银行卡
      amount: "", //预约金额
      lastPayDate: "", //最迟打款日期
      pickerValue: "",
      note: "", //备注
      bankName: "" //打卡行
    };
  },
  created() {
    this.lastPayDate = this.pickerValue = formatDateTime({
      time: new Date(),
      ymd: true
    });
    // 此处router获取失败
    this.pCode = this.$route.params.pCode;
    this.pName = this.$route.params.pShortName;
  },
  methods: {
    // 提交
    submit() {
      // TODO:首先得判断当前登录状态
      ajax({
        url: "/srv/v1/order/createOrder",
        params: {
          pCode: this.pCode,
          pName: this.pName,
          userId: this.userId,
          userName: this.userName,
          cardId: this.cardId,
          amount: this.amount,
          lastPayDate: this.lastPayDate,
          note: this.note
        },
        method: "POST"
      }).then(res => {
        if (res.status === 200) {
          if (res.data.result.pager) {
            this.pullup = res.data.result.pager.hasNaxtPage;
            this.productList = [...this.productList, ...res.data.result.list];
          } else {
            this.pullup = false;
          }
        }
      });
      this.$router.push("/pOrderSuccess");
    },
    /**
     * 返回按钮单机事件
     */
    back() {
      this.$router.go(-1);
    },
    // 获取当前时间
    handleConfirm(date) {
      this.lastPayDate = this.pickerValue = formatDateTime({
        time: date,
        ymd: true
      });
    },
    openDatePicker() {
      this.$refs.picker.open();
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
      background-color: $color-background-d;
    }
  }

  .footer {
    height: 40px;
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: -1;

    .submit {
      width: 100%;
      height: 100%;
      display: block;
      font-size: 14px;
      line-height: 40px;
      text-align: center;
      background-color: $color-sub-theme;
      color: $color-background-d;
    }
  }
}
</style>

 
 
