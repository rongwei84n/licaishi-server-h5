<template>
  <div class="work-room-info">

    <workRoomHeader @back="back" @clickFunc="modif" mytitle="工作室信息" content="修改" rightFlag="true"></workRoomHeader>
    <div class="splith">
      <div class="pro-info" v-show="proFlag">
        提交成功，请耐心等待审核
      </div>
    </div>
    <mt-field label="名称：" placeholder="请输入名称" type="text" v-model="workRoom.workshopName"></mt-field>
    <mt-field label="网址：" placeholder="请输入网址" type="url" v-model="workRoom.workshopUrl"></mt-field>
    <mt-field label="简介：" placeholder="请输入简介" type="textarea" v-model="workRoom.workshopIntro"></mt-field>
    <mt-field label="客服电话：" placeholder="请输入客服电话" type="number" v-model="workRoom.phone"></mt-field>
  </div>
</template>

<script type="text/ecmascript-6">
  import workRoomHeader from "components/workRoomHeader/workRoomHeader";
  import ajax from "api/ajax";
  export default {
    data(){
      return{
        /**workname:'理财师工作室名称',
        address:'http://baidu.com',
        dec:'欢迎来到理财师社区，阿斯兰的激发了就是看了就放大来看就是代理反馈',
        tep:'15333336666',*/
        proFlag:false,
        workRoom:""
      }
    },
    components:{
      workRoomHeader
    },
    created() {
      this.get_work_room_info();
    },
    methods:{
      modif(){
        this.proFlag = true
      },
      back(){
        this.$router.go(-1)
      },
      get_work_room_info(){
        ajax({
          url: `/srv/v1/Workshop/queryWorkshop`,
          method: "GET"
        }).then(res => {

          if (res.status === 200) {
            this.workRoom = res.data.result;
          }
        });
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .work-room-info
    position absolute
    top 0px
    width 100%
    height 100vh
    background #FFF
    z-index 100
    .mint-cell
      min-height 40px
      //border-bottom 1px solid #eff3f6
      .mint-cell-title
        width auto
        margin-left 10px
        .mint-cell-text
          font-size 14px
      .mint-cell-value
        margin-right 10px
      .mint-field-core
        font-size 14px
      .mint-cell-wrapper
        width 100%
        background-position bottom right
        padding 0px
    .splith
      width: 100%
      //min-height 8px
      padding: 4px 6px
      //border-top: 1px solid rgba(7, 17, 27, 0.1)
      //border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      background: #EFF3F6
      .pro-info
        color red
        width 100%
        height 36px
        margin 4px 0px
        border 1px solid sandybrown
        background-color rgb(255, 235, 225)
        font-size 14px
        line-height 36px
        text-align  center



</style>
