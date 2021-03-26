<template>
  <div class="show-pannel">
    <el-row :gutter="40" class="panel-group">
      <el-col :xs="12" :sm="12" :lg="6">
        <div class="panel-box">
          <div class="panel-box-left">
            <div class="panel-box-img">
              <img src="@/assets/images/pannel-one.png" />
            </div>
          </div>
          <div class="panel-box-right">
            <div class="panel-box-item">
              <div class="panel-box-title">建筑楼总数</div>
              <div class="panel-box-value">4</div>
            </div>
            <div class="panel-box-item">
              <div class="panel-box-title">会议室总数</div>
              <div class="panel-box-value">243</div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6">
        <div class="panel-box">
          <div class="panel-box-left">
            <div class="panel-box-img pannel-two">
              <img src="@/assets/images/pannel-two.png" />
            </div>
          </div>
          <div class="panel-box-right">
            <div class="panel-box-item">
              <div class="panel-box-title">通过会议室</div>
              <div class="panel-box-value">2314</div>
            </div>
            <div class="panel-box-item">
              <div class="panel-box-title">驳回会议室</div>
              <div class="panel-box-value">23</div>
            </div>
            <div class="panel-box-item">
              <div class="panel-box-title">未审批会议室</div>
              <div class="panel-box-value">23</div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6">
        <div class="panel-box">
          <div class="panel-box-left">
            <div class="panel-box-img pannel-three">
              <img src="@/assets/images/pannel-three.png" />
            </div>
          </div>
          <div class="panel-box-right">
            <div class="panel-box-item">
              <div class="panel-box-title">今日会议数</div>
              <div class="panel-box-value">4</div>
            </div>
            <div class="panel-box-item">
              <div class="panel-box-title">明日会议数</div>
              <div class="panel-box-value">243</div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6">
        <div class="panel-box">
          <div class="panel-box-left">
            <div class="panel-box-img pannel-four">
              <img src="@/assets/images/pannel-four.png" />
            </div>
          </div>
          <div class="panel-box-right hot">
            <img src="@/assets/images/first.png" /><div class="panel-box-value hot first">教学楼110</div><br>
            <img src="@/assets/images/second.png" /><div class="panel-box-value hot second">教学楼110</div><br>
            <img src="@/assets/images/third.png" /><div class="panel-box-value hot third">教学楼110</div><br>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    props: {

    },
    created() {},
    methods: {},
  }
</script>
<style lang="scss" scoped>
  .show-pannel {
    margin-bottom: 20px;

    .panel-box {
      height: 120px;
      background: #fff;
      padding: 22px 20px;
      display: flex;

      .panel-box-left {
        width: 45%;
      }

      .panel-box-img {
        background: rgba(65, 53, 221, 0.08);
        border-radius: 50%;
        width: 80px;
        height: 80px;
        display: flex;
      }

      img {
        margin: auto;
        height: 50%;
        width: 50%;
      }

      .panel-box-right {
        margin: auto 0;
      }

      .panel-box-item {
        display: flex;
        line-height: 24px;
      }

      .panel-box-title {
        font-size: 14px;
        color: #606266;
        width: 100px;
      }

      .panel-box-value {
        font-size: 22px;
        font-weight: 600;
        color: #303133;
      }

      .hot {
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        display: inline-block;

        img{
          width: 22px;
          height:22px;
          margin-right:5px;
        }
      }
      
      .first{
        color: #FD0002;
      }

      .second{
        color: #5191FF;
      }

      .third{
        color: #FFAF00;
      }

      .pannel-two{
        background: rgba(231, 166, 97, 0.1);
      }
      .pannel-three{
        background: rgba(252, 70, 107, 0.08);
      }
      .pannel-four{
        background: rgba(84, 222, 205, 0.1);
      }
    }
  }
</style>