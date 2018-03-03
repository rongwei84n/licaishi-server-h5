<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend">
      <img @click.self="linkActive" title="0" src="../../common/image/homeActive.png" alt="homeActive.png"><br/>
      <span class="tab-link">首页</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/product">
      <img @click.self="linkActive" title="1" src="~@/common/image/product.png" alt="productActive.png"><br/>
      <span class="tab-link">产品</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <img  @click.self="linkActive" title="2" src="~@/common/image/workRoom.png" alt="workRoomActive.png"><br/>
      <span class="tab-link">工作室</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <img @click.self="linkActive" title="3" src="~@/common/image/userCenter.png" alt="userCenterActive.png"><br/>
      <span class="tab-link">我的</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  import home from "../../common/image/home.png"
  import product from "../../common/image/product.png"
  import workRoom from "../../common/image/workRoom.png"
  import userCenter from "../../common/image/userCenter.png"
  import homeActive from "../../common/image/homeActive.png"
  import productActive from "../../common/image/productAcitve.png"
  import workRoomActive from "../../common/image/workRoomActive.png"
  import userCenterActive from "../../common/image/userCenterActive.png"
export default {
  data () {
    return {
      tabIcons: [home, product, workRoom, userCenter],
      tabIconsA: [homeActive, productActive, workRoomActive, userCenterActive],
      recommends: [],
      discList: []
    }
  },
  props: {
  },
  methods: {
    linkActive(event) {
      let target = event.target;
      let tabImgs = document.querySelectorAll('.tab img');
      let liTags = document.querySelectorAll('.tab .tab-item');
      let index = target.getAttribute('title');
      for (let i = 0; i < liTags.length; i++) {
        liTags[i].className = 'tab-item';
      }
      liTags[index].className = 'tab-item active';
      for (let i = 0; i < tabImgs.length; i++) {
        tabImgs[i].src = this.tabIcons[i];
      }
      target.src = this.tabIconsA[index];
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .tab
    position: fixed
    bottom: 0px
    z-index 99
    width: 100%
    background: #fff
    color: #303030
    display: flex
    height: 54px
    padding-top: 10px
    padding-bottom: 10px
    /*line-height: 44px*/
    font-size: $font-size-medium
    .tab-item
      flex: 1
      text-align: center
      img
        height: 36px
      .tab-link
        padding-bottom: 5px
      &.router-link-active
        .tab-link
          color: red
</style>
