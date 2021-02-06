<template>
  <div class="statistics">
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
</template>
<script>
  import PieChart from '@/components/Charts/PieChart.vue'
  import LineChart from '@/components/Charts/LineChart.vue'
  import {
    buildingList,
    projectorList,
    getLastlyWeek,
    getLastlyMonth
  } from '@/utils/index.js'
  export default {
    components: {
      PieChart,
      LineChart
    },
    data() {
      return {
        buildingList: buildingList,
        meetingRoomNum: [],
        meetingRoomSize: [],
        meetingChangeType: true,
        meetingChangeTitle: '近一周会议数量',
        meetingChangeXAxis: [],
        meetingChangeAmount: [820, 932, 901, 934, 1290, 1330, 1320],
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
      this.meetingChangeXAxis = getLastlyWeek()
      this.meetingRoomNum = [{
            value: 1048,
            name: '教学楼'
          },
          {
            value: 735,
            name: '图书馆'
          },
          {
            value: 580,
            name: '行政楼'
          },
          {
            value: 484,
            name: '宿舍楼'
          }
        ],
        this.meetingRoomSize = [{
            value: 1048,
            name: '小型会议室（15人以内）'
          },
          {
            value: 735,
            name: '中型会议室（50人以内）'
          },
          {
            value: 580,
            name: '多媒体报告厅（200人以内）'
          }
        ]
    },
    computed: {},
    methods: {
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
        console.log(this.buildingcheck)
      },
      // 周月切换 
      getMeetingChange() {
        if (this.meetingChangeType) { // 月
          this.meetingChangeTitle = '近一周会议数量'
          this.meetingChangeXAxis = getLastlyWeek()
          this.meetingChangeAmount = [820, 932, 901, 934, 1290, 1330, 1320]
        } else { // 周
          this.meetingChangeTitle = '近一月会议数量'
          this.meetingChangeXAxis = getLastlyMonth()
          this.meetingChangeAmount = [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330, 1320, 820,
            932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330, 1320, 932, 901
          ]
        }
      },
    },
  }
</script>
<style lang="scss" scoped>

</style>