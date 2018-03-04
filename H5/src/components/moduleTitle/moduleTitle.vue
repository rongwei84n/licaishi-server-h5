<template>
    <div class="moduleTitle">
        <div class="titleContent">
            <img :src="iconUrl" alt="">
            <!-- <img src="../../../static/image/icon_17.jpg" alt=""> -->
            <span>{{title}}</span>
        </div>
        <div class="moreContent">
            <span @click.self="_moreClick()">更多>></span>
        </div>
    </div>
</template>

<script type="es6">
export default {
  props: {
    // 图标地址
    iconUrl: "",
    // title
    title: ""
  },
  methods: {
    /**
     * “更多”按钮单机事件
     * @event
     */
    _moreClick() {
      this.$emit("moreClick");
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable';

.moduleTitle {
    width: 100vw;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dce0e1;
    box-sizing: border-box;
    padding: 0 10px;

    .titleContent {
        display: flex;
        align-items: center;

        img {
            width: 20px;
            height: 20px;
            margin-right: 6px;
        }
    }

    .moreContent {
        >span {
            font-size: 10px;
            color: #686868;
        }
    }
}
</style>
