<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content" :data="discList">
      <div>
        <div v-if="recommends.length" class="slider-wrapper" ref="sliderWrapper">
          <slider>
            <div v-for="item in recommends">
              <a :href="item.linkUrl">
                <img class="needsclick" @load="loadImage" :src="item.picUrl">
              </a>
            </div>
          </slider>
        </div>
        <div class="nav-func">
          <ul class="ofh">
            <li @click="toFuncPage" class="fl">
              <img src="~@/common/image/icon_17.jpg" alt=""><br>
              <span>热销产品</span>
            </li>
            <li @click="toFuncPage" class="fl">
              <img src="~@/common/image/icon_19.jpg" alt=""><br/>
              <span>最新推荐</span>
            </li>
            <li @click="toFuncPage" class="fl">
              <img src="~@/common/image/icon_21.jpg" alt=""><br/>
              <span>集合信托</span>
            </li>
            <li @click="toFuncPage" class="fl">
              <img src="~@/common/image/icon_23.jpg" alt=""><br/>
              <span>集合资管</span>
            </li>
            <li @click="toFuncPage" class="fl">
              <img src="~@/common/image/icon_29.jpg" alt=""><br>
              <span>债券基金</span>
            </li>
            <li @click="toFuncPage" class="fl">
              <img src="~@/common/image/icon_30.jpg" alt=""><br/>
              <span>阳光私募</span>
            </li>
            <li @click="toFuncPage" class="fl">
              <img src="~@/common/image/icon_31.jpg" alt=""><br/>
              <span>股权基金</span>
            </li>
            <li @click="toFuncPage" class="fl">
              <img src="~@/common/image/icon_32.jpg" alt=""><br/>
              <span>视频路演</span>
            </li>
          </ul>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐66600</h1>
          <ul>
            <li @click="selectItem(item)" v-for="item in discList" class="item">
              <div class="icon">
                <img width="60" height="60" v-lazy="item.imgurl">
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container" v-show="!discList.length">
        <loading></loading>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from 'base/slider/slider'
  import Loading from 'base/loading/loading'
  import Scroll from 'base/scroll/scroll'
  import {getRecommend, getDiscList} from 'api/recommend'
  import {ERR_OK} from 'api/config'

  export default {
    data () {
      return {
        recommends: [],
        discList: []
      }
    },
    created () {
      this._getRecommend()

      this._getDiscList()
    },
    methods: {
      toFuncPage () {

      },
      loadImage () {
        if (!this.checkloaded) {
          this.checkloaded = true
          this.$refs.scroll.refresh()
        }
      },
      _getRecommend () {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommends = res.data.slider
          }
        })
      },
      _getDiscList () {
        getDiscList().then((res) => {
          if (res.code === ERR_OK) {
            this.discList = res.data.list
          }
        })
      }
    },
    components: {
      Slider,
      Loading,
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      background: #fff
      overflow: hidden
      .nav-func
        padding-top 18px
        margin 10px 18px
        ul{
          width 100%
          li{
            width 25%
            text-align center
            margin-bottom 19px
            font-size 14px
            img {
              width 48px
              padding-bottom 6px
            }
          }
        }
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
