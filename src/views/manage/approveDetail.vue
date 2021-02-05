<template>
  <div class="approveDetail">
    <h2><span>会议室预订审批表</span></h2>
    <div class="approve-topic">预订信息</div>
    <div class="approve-form">
      <div class="approve-item" v-for="item in approveDetail">
        <div class="approve-title"><i :class="item.icon" class="approve-icon"></i>{{item.title}}</div>
        <div class="approve-value">{{item.value}}</div>
      </div>
    </div>
    <div class="approve-topic">审批信息</div>
    <div class="approve-info">
      <div v-if="!approveResult">
        <el-radio-group v-model="approveResultStaging">
          <el-radio :label="1">通过</el-radio>
          <el-radio :label="2">驳回</el-radio>
        </el-radio-group><br />
        <el-input placeholder="请输入驳回原因" size="small" v-model="rejectReason" clearable v-if="approveResultStaging == 2"
          class="reason-input"></el-input><br />
        <el-button type="primary" size="small" style="float:right" @click="approveSure">确定</el-button>
      </div>
      <div v-if="approveResult" class="approve-image">
        <img v-if="approveResult == 1" src="../../assets/images/pass.png" />
        <img v-if="approveResult == 2" src="../../assets/images/reject.png" />
        <div>{{approveResult == 1 ? '审批通过' : '审批驳回'}}</div>
        <div v-if="approveResult == 2">驳回原因：{{rejectReason}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        approveDetail: [{
          title: '会议室预订人',
          icon: 'el-icon-user',
          value: ''
        }, {
          title: '会议主题',
          icon: 'el-icon-star-off',
          value: ''
        }, {
          title: '会议室名称',
          icon: 'el-icon-house',
          value: ''
        }, {
          title: '会议室地点',
          icon: 'el-icon-location-outline',
          value: ''
        }, {
          title: '会议日期',
          icon: 'el-icon-date',
          value: ''
        }, {
          title: '会议时间',
          icon: 'el-icon-time',
          value: ''
        }, {
          title: '参会人数',
          icon: 'el-icon-help',
          value: ''
        }, {
          title: '会议室设备',
          icon: 'el-icon-data-analysis',
          value: ''
        }],
        approveResult: 0, // 审批结果（0：等待审批、1：审批通过:2：审批驳回）
        approveResultStaging: 1, // 审批结果暂存（1：审批通过:2：审批驳回）
        rejectReason: '', // 驳回原因
      }
    },
    created() {
      console.log(this.$route.query.id)
      this.approveDetail[0].value = '黄佳佳'
      this.approveDetail[1].value = '后台管理项目分享会'
      this.approveDetail[2].value = '雅兰阁'
      this.approveDetail[3].value = '教学楼A栋323'
      this.approveDetail[4].value = '2020年11月15日'
      this.approveDetail[5].value = '13:00-14:10'
      this.approveDetail[6].value = '12'
      this.approveDetail[7].value = '投影仪、黑板'
    },
    computed: {},
    methods: {
      // 审批确定
      approveSure() {
        this.approveResult = this.approveResultStaging
      }
    },
  }
</script>
<style lang="scss" scoped>
  .approveDetail {
    height: 800px;
    width: 600px;
    margin: 0 auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    background: #f0f2f5;
  }

  .approve-topic {
    border-left: 2px solid #4135DD;
    margin: 30px 10px 10px;
    height: 28px;
    font-size: 16px;
    font-weight: 600;
    line-height: 28px;
    padding-left: 10px;
  }

  .approve-form {
    padding: 0 30px 0 10px;

    .approve-item {
      line-height: 40px;
      display: flex;
      border-bottom: 1px solid #DCDFE6;
    }

    .approve-title {
      font-size: 16px;
      font-weight: 600;
      color: #17233d;
      width: 35%;
    }

    .approve-icon {
      margin-right: 5px;
    }

    .approve-value {
      font-size: 14px;
      color: #606266;
    }
  }

  .approve-info {
    padding-left: 10px;
    padding-right: 30px;

    .reason-input{
      width: 500px;
      margin:10px 0;
    }

    .approve-image {
      height: 150px;
      width: 100%;
      text-align: center;
      font-size: 14px;
      color: #606266;
    }

    img {
      width: 200px;
      height: 100%;
    }
  }

  h2 {
    font-weight: normal;
    position: relative;
    background: rgba(65, 53, 221, 0.8);
    width: 80%;
    color: #fff;
    text-align: center;
    padding: 10px 20px;
    margin: 20px auto 30px;
    border-radius: 2px;
  }

  h2:before,
  h2:after {
    content: "";
    position: absolute;
    display: block;
    top: -6px;
    border: 18px solid #4135DD;
    ;
  }

  h2:before {
    left: -36px;
    border-right-width: 18px;
    border-left-color: transparent;
  }

  h2:after {
    right: -36px;
    border-left-width: 18px;
    border-right-color: transparent;
  }

  h2 span:before,
  h2 span:after {
    content: "";
    position: absolute;
    display: block;
    border-style: solid;
    border-color: #4135DD transparent transparent transparent;
    top: -6px;
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  h2 span:before {
    left: 0;
    border-width: 6px 0 0 6px;
  }

  h2 span:after {
    right: 0;
    border-width: 6px 6px 0 0;
  }
</style>