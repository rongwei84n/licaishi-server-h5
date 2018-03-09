/*
 * @Author: 张浩然 
 * @Date: 2018-03-07 19:23:27 
 * @Last Modified by: 张浩然
 * @Last Modified time: 2018-03-09 11:02:49
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
        <mt-field label="产品名称" disabled v-model="pShortName"></mt-field>
        <mt-field label="客户姓名" placeholder="请输入客户姓名" v-model="username"></mt-field>
        <mt-field label="身份证号" placeholder="请输入身份证号" v-model="IDCard"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号" v-model="phone"></mt-field>
        <mt-field label="预约金额" placeholder="请输入预约金额" v-model="money">
          <span>万元</span>
        </mt-field>
        <mt-field label="最迟打款日期" disableds v-model="lastDate">
          <i class="fa fa-calendar extend-click" @click="openDatePicker"></i>
        </mt-field>
        <mt-field label="备注" placeholder="备注" type="textarea" rows="4" v-model="introduction"></mt-field>
      </div>
    </Scroll>
    <!-- 推荐 -->
    <footer class="footer">
      <span class="submit">提交</span>
    </footer>
    <mt-datetime-picker type="date" ref="picker" v-model="pickerValue" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" @confirm="handleConfirm">
    </mt-datetime-picker>
  </div>
</template>

 <script type="es6">
import formatDateTime from "common/js/date";
import moment from "moment";
import ajax from "api/ajax";
import Scroll from "base/scroll/scroll";
import whiteSpace from "base/whiteSpace/whiteSpace";

export default {
  props: {
    pShortName: {
      type: String,
      default: "光大-歌山16个月"
    }
  },
  data() {
    return {
      username: "", //客户姓名
      IDCard: "", //身份证号
      phone: "", //手机号
      money: "", //预约金额
      lastDate: "", //最迟打款日期
      pickerValue: "",
      introduction: "" //自我介绍
    };
  },
  created() {
    this.lastDate = this.pickerValue = formatDateTime({
      time: new Date(),
      ymd: true
    });
  },
  methods: {
    /**
     * 返回按钮单机事件
     */
    back() {
      this.$router.go(-1);
    },
    // 获取当前时间
    handleConfirm(date) {
      this.lastDate = this.pickerValue = formatDateTime({
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

 
 
