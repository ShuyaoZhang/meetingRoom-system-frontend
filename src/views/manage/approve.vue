<template>
  <div class="approve">
    <el-row :gutter="10">
      <el-col :xs="8" :lg="6">
        <div class="approve-box">
          <div class="box-header bg-blur">

          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    created() {},
    computed: {},
    methods: {},
  }
</script>
<style lang="scss" scoped>
  .approve-box {
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    height: 300px;

    .box-header {
      background: url(../../assets/images/meetingRoom.png) no-repeat center;
      background-size: 100% 100%;
      height: 200px;
    }

    .bg-blur {
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      -webkit-filter: blur(1px);
      -moz-filter: blur(1px);
      -o-filter: blur(1px);
      -ms-filter: blur(1px);
      filter: blur(1px);
    }
  }
</style>