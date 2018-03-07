<template>
  <div id="app">
    <m-header></m-header>
    <Tab></Tab>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
require("./common/js/phihome-1.0.0.js?n=1");
import MHeader from "components/m-header/m-header";
import Tab from "components/tab/tab";
export default {
  components: {
    MHeader,
    Tab
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}


</style>
