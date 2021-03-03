<template>
  <div class="record">
    <el-row :gutter="40">
      <el-col :md="12" :lg="8" :xl="6" v-for="i in recordList">
        <div class="record-box">
          <div class="record-top">{{i.meetingTheme}}</div>
          <div class="record-form">
            <div class="record-item" v-for="item in recordDetail">
              <div class="record-title"><i :class="item.icon" class="record-icon"></i>{{item.title}}：</div>
              <div class="record-value">{{i[item.value]}}</div>
            </div>
          </div>
          <div class="record-img">
            <img src="@/assets/images/1.png">
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    props: {
      recordList: {
        type: Array,
        required: true
      },
    },
    data() {
      return {
        recordDetail: [  {
          title: '会议日期',
          icon: 'el-icon-date',
          value: 'date'
        }, {
          title: '会议时间',
          icon: 'el-icon-time',
          value: 'time'
        },{
          title: '会议室地点',
          icon: 'el-icon-location-outline',
          value: 'location'
        }, {
          title: '参会人数',
          icon: 'el-icon-help',
          value: 'meetingNum'
        }, {
          title: '会议室设备',
          icon: 'el-icon-data-analysis',
          value: 'equipment'
        }],
      }
    },
    mounted(){

    },
    methods: {

    },
  }
</script>
<style lang="scss" scoped>
  .record-box {
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    height: 350px;
  }

  .record-top{
    height: 50px;
    background:  rgba(65,53,221,0.85);
    color:#fff;
    font-size: 16px;
    line-height: 50px;
    text-align: center;
  }

  .record-form {
    padding-left: 10px;
    padding-top: 10px;

    .record-item {
      line-height: 36px;
      display: flex;
    }

    .record-title {
      font-size: 15px;
      font-weight: 600;
      color: #17233d;
      width: 35%;
    }

    .record-icon {
      margin-right: 5px;
    }

    .record-value {
      font-size: 14px;
      color: #606266;
    }
  }

  .record-img{
    width:170px;
    height: 170px;
    float: right;
    margin-top: -30px;

    img{
      height: 100%;
      width:100%;
    }
  }
</style>