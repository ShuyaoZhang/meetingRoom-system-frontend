<template>
  <div class="detail">
    <div class="status">
      <img v-if="status==0" src="../../assets/images/wait.png">
      <img v-if="status==1" src="../../assets/images/pass.png">
      <img v-if="status==2" src="../../assets/images/reject.png">
      <div class="status-text">{{status==0?'等待审批ing':status==1?'审批通过':'审批不通过'}}</div>
    </div>
    <van-cell-group style="width:100%">
      <van-cell v-for="item in recordDetail" :title="item.title" :value="item.value" :icon="item.icon" />
    </van-cell-group>
  </div>
</template>
<script>
  import {
    Cell,
    CellGroup,
    Icon
  } from 'vant';
  export default {
    data() {
      return {
        status:2,
        recordDetail: [{
          title: '会议主题',
          icon: 'star-o',
          value: ''
        }, {
          title: '会议室名称',
          icon: 'like-o',
          value: ''
        }, {
          title: '会议室地点',
          icon: 'location-o',
          value: ''
        }, {
          title: '会议日期',
          icon: 'calendar-o',
          value: ''
        }, {
          title: '会议时间',
          icon: 'clock-o',
          value: ''
        }, {
          title: '参会人数',
          icon: 'friends-o',
          value: ''
        }, {
          title: '会议室设备',
          icon: 'setting-o',
          value: ''
        }]
      }
    },
    components: {
      Cell,
      CellGroup,
      Icon
    },
    created() {
      console.log(this.$route.query.id)
      this.recordDetail[0].value = '后台管理项目分享会'
      this.recordDetail[1].value = '雅兰阁'
      this.recordDetail[2].value = '教学楼A栋323'
      this.recordDetail[3].value = '2020年11月15日'
      this.recordDetail[4].value = '13:00-14:10'
      this.recordDetail[5].value = '12'
      this.recordDetail[6].value = '投影仪、黑板'
    },
    methods: {

    },
  }
</script>
<style lang="scss" scoped>
.status{
  text-align: center;
  background: #fff;
  color:#969799;
  font-size: 14px;

  img{
    width: 5rem;
    height: 5rem;
  }

  .status-text{
    position: relative;
    top:-1rem;
  }
}
</style>