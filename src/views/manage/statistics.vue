<template>
  <div class="statistics">
    <show-pannel />
    <div style="background:#fff">
    <el-row :gutter="1">
      <el-col :xs="24" :xl="12">
        <pie-chart :chartData="meetingRoomNum" chartTitle="各建筑楼会议室数量" seriesName="会议室数量"></pie-chart>
      </el-col>
      <el-col :xs="24" :xl="12">

      </el-col>
    </el-row>
    <el-divider><i class="el-icon-scissors"></i></el-divider>

    <el-form class="right-inline" label-width="70px">
      <el-form-item label="建筑楼：">
        <el-checkbox :indeterminate="buildingIM" v-model="buildingAll" @change="buildingCheckAll">全选</el-checkbox>
        <el-checkbox-group v-model="buildingcheck" @change="buildingCheckChange">
          <el-checkbox v-for="item in buildingList" :label="item.id" :key="item.id">{{item.buildingName}}
          </el-checkbox>
        </el-checkbox-group>
        <el-button @click="query" type="primary" icon="el-icon-search" size="small">查询</el-button>
      </el-form-item>
    </el-form>
    <el-row :gutter="1">
      <el-col :xs="24" :xl="12">
        <pie-chart :chartData="meetingRoomSize" chartTitle="不同容纳人数的会议室数量" seriesName="会议室数量"></pie-chart>
      </el-col>
      <el-col :xs="24" :xl="12">
        <el-switch v-model="meetingChangeType" active-color="#4135DD" inactive-color="#4135DD" active-text="近一周"
          inactive-text="近一月"></el-switch>
        <line-chart :chartData="meetingChangeAmount" :xAxisData="meetingChangeXAxis" :chartTitle="meetingChangeTitle"
          seriesName="会议数量"></line-chart>
      </el-col>
    </el-row>
    </div>
  </div>
</template>
<script>
  import ShowPannel from '@/components/ShowPannel/index.vue'
  import PieChart from '@/components/Charts/PieChart.vue'
  import LineChart from '@/components/Charts/LineChart.vue'
  import {
    buildingList,
    projectorList,
    getLastlyWeek,
    getLastlyMonth
  } from '@/utils/index.js'
  import {
    roomNumInBuilding,
    roomSize,
    meetingNum
  } from '@/api/manage/statistics.js'
  export default {
    components: {
      ShowPannel,
      PieChart,
      LineChart
    },
    data() {
      return {
        buildingList: buildingList,
        meetingRoomNum: [],
        meetingRoomSize: [],
        meetingChangeType: true,
        meetingChangeTitle: '',
        meetingChangeXAxis: [],
        meetingChangeAmount: [],
        buildingIM: false, // 建筑楼全选indeterminate 状态
        buildingAll: true, // 建筑楼是否全选
        buildingcheck: [], // 建筑楼选项
      }
    },
    watch: {
      meetingChangeType() {
        this.getMeetingChange()
      }
    },
    mounted() {
      for (let i = 0; i < this.buildingList.length; i++) {
        this.buildingcheck.push(this.buildingList[i].id)
      }
      this.meetingChangeTitle = '近一周会议数量'
      this.meetingChangeXAxis = getLastlyWeek()
      this.roomNumInBuilding()
      this.roomSize()
      this.meetingNum()
    },
    computed: {},
    methods: {
      // 获取各建筑楼会议室数量
      roomNumInBuilding() {
        roomNumInBuilding().then(res => {
          this.meetingRoomNum = res.data
        })
      },
      // 获取不同容纳人数的会议室数量(可多选建筑楼)
      roomSize() {
        roomSize({
          buildingcheck: this.buildingcheck.join(',')
        }).then(res => {
          this.meetingRoomSize = res.data
        })
      },
      // 获取会议数量(近一月、近一周，可多选建筑楼)
      meetingNum() {
        let params = {
          buildingcheck: this.buildingcheck.join(','),
          meetingChangeType: this.meetingChangeType ? 1 : 0
        }
        meetingNum(params).then(res => {
          this.handleData(res.data)
        })
      },
      // 处理数据
      handleData(data) {
        data.sort(this.sortRule)
        for(let i=0;i<data.length;i++){
          this.meetingChangeAmount.push(data[i].value)
        }
      },
      // 排序规则
      sortRule(a, b) {
        return a.name - b.name;
      },
      // 建筑楼全选
      buildingCheckAll(val) {
        if (this.buildingIM) {
          this.buildingAll = false;
        }
        this.buildingIM = false;
        if (this.buildingAll) {
          for (let i = 0; i < this.buildingList.length; i++) {
            this.buildingcheck.push(this.buildingList[i].id)
          }
        } else {
          this.buildingcheck = [];
        }
      },
      // 建筑楼选项改变
      buildingCheckChange(data) {
        if (data.length === this.buildingList.length) { // 全选
          this.buildingIM = false;
          this.buildingAll = true;
        } else if (data.length > 0) { // 不全选
          this.buildingIM = true;
          this.buildingAll = false;
        } else { // 不选
          this.buildingIM = false;
          this.buildingAll = false;
        }
      },
      // 查询
      query() {
        this.roomSize()
        this.getMeetingChange()
        this.meetingNum()
      },
      // 周月切换 
      getMeetingChange() {
        this.meetingChangeAmount = []
        if (this.meetingChangeType) { // 月
          this.meetingChangeTitle = '近一周会议数量'
          this.meetingChangeXAxis = getLastlyWeek()
        } else { // 周
          this.meetingChangeTitle = '近一月会议数量'
          this.meetingChangeXAxis = getLastlyMonth()
        }
        this.meetingNum()
      },
    },
  }
</script>
<style lang="scss" scoped>

</style>