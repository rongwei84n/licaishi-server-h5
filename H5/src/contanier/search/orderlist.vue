<template>
  <div class="all-content">
    <div class="header">
      <mt-header title="我的订单">
        <router-link to="/" slot="left">
          <mt-button icon="back" v-on:click="handleClose"></mt-button>
        </router-link>
        <mt-button icon="search" slot="right" v-on:click="handleSearch"></mt-button>
      </mt-header>
    </div>
    <div class="page-navbar">
      <!-- navbar -->
      <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item id="1">全部</mt-tab-item>
        <mt-tab-item id="2">待打款</mt-tab-item>
        <mt-tab-item id="3">待结佣</mt-tab-item>
        <mt-tab-item id="4">已结佣</mt-tab-item>
        <mt-tab-item id="5">已失败</mt-tab-item>
      </mt-navbar>

      <!-- tabcontainer -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <mt-cell v-for="(item, index) in 20" :title="'内容 ' + item" />
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell  :title="'测试 2' " />
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell :title="'选项 3' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <mt-cell :title="'选项 4'" />
        </mt-tab-container-item>
        <mt-tab-container-item id="5">
          <mt-cell :title="'选项 5'" />
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

  </div>
</template>

<script>
  import ajax from "api/ajax"
  export default {
    name: 'page-order-list',
    data () {
      return {
        url: 'http://47.97.100.240/',
        selected: '1'
      }
    },
    mounted:function() {
      //查询订单
    },
    methods: {
      handleClose: function() {
      },
      handleSearch: function() {
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.all-content {
  position: relative;
  width: 100%;
  height: 100%;
  background: #EDF1F5;
  z-index: 100;
  .header {
    border-bottom: solid 5px gainsboro;
  }

  .tab-container-w {
    .tab-item1 {
      display: list-item
    }
    .tab-item2 {
      display: list-item
    }
    .tab-item3 {
      display: list-item
    }
  }

}


</style>
