<template>
  <div>
    <div type="text" v-on:click="gotoLogin">{{title_name_unlogin}}</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title_name_unlogin:'未登录'
      }
    },

    methods: {
      gotoLogin () {
        // alert('xx');
        // window.phihome.app.toast('浪里浪个浪', function (response) {
        // });
        window.phihome.app.openPage("lcs.account.login", null, function (response) {
        });
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
