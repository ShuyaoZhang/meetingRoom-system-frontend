<template>
  <div class="pcRecord">
    <el-tabs type="border-card" @tab-click="tabChange" v-model="activeTab">
      <el-tab-pane name="1">
        <span slot="label"><i class="el-icon-success"></i> 已通过</span>
        <Record :recordList="recordList"></Record>
      </el-tab-pane>
      <el-tab-pane name="2">
        <span slot="label"><i class="el-icon-error"></i> 已驳回</span>
        <Record :recordList="recordList"></Record>
      </el-tab-pane>
      <el-tab-pane name="0">
        <span slot="label"><i class="el-icon-loading"></i> 等待审批</span>
        <Record :recordList="recordList"></Record>
      </el-tab-pane>
      <el-pagination class="pagination" @size-change="sizeChange" @current-change="currentChange"
        :current-page="form.page" :page-size="form.pageSize" :page-sizes="[8, 16, 24, 32]" background
        layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </el-tabs>
  </div>
</template>
<script>
  import {
    buildingList
  } from '@/utils/index.js'
  import Record from '@/components/Record/index.vue'
  export default {
    components: {
      Record
    },
    data() {
      return {
        buildingList:buildingList,
        activeTab: '1', // 当前选中tab
        recordList: [], // 记录列表
        form: { // 页码
          page: 1,
          pageSize: 8
        },
        total: 0, // 总条数
      }
    },
    mounted() {
      this.getRecordList()
    },
    methods: {
      // 获取记录列表
      getRecordList() {
        let param = {
          statusId: this.activeTab,
          ...this.form
        }
        console.log(param)
        this.recordList = [{
          id: 1,
          location: '',
          time: '',
          equipment: '',
          roomBuilding: 1,
          roomLocation: '1101',
          date: '2020年11月15日',
          startTime: '13:00',
          endTime: '14:10',
          meetingNum: 15,
          meetingTheme: '后台管理项目分享会',
          projector: 1,
          display: 0,
          whiteboard: 1,
          blackboard: 1,
        },{
          id: 1,
          location: '',
          time: '',
          equipment: '',
          roomBuilding: 2,
          roomLocation: '1101',
          date: '2020年11月15日',
          startTime: '13:00',
          endTime: '14:10',
          meetingNum: 15,
          meetingTheme: '后台管理项目分享会',
          projector: 1,
          display: 0,
          whiteboard: 1,
          blackboard: 1,
        },{
          id: 1,
          location: '',
          time: '',
          equipment: '',
          roomBuilding: 3,
          roomLocation: '1101',
          date: '2020年11月15日',
          startTime: '13:00',
          endTime: '14:10',
          meetingNum: 15,
          meetingTheme: '后台管理项目分享会',
          projector: 1,
          display: 0,
          whiteboard: 1,
          blackboard: 1,
        },{
          id: 1,
          location: '',
          time: '',
          equipment: '',
          roomBuilding: 4,
          roomLocation: '8101',
          date: '1020年11月15日',
          startTime: '15:00',
          endTime: '16:10',
          meetingNum: 115,
          meetingTheme: '11231后台',
          projector: 0,
          display: 1,
          whiteboard: 0,
          blackboard: 0,
        }]
        this.total = this.recordList.length
        this.changeFormat()
      },
      // 需将获取后的数据进行格式化
      changeFormat() {
        let str = ''
        for (let i = 0; i < this.total; i++) {
          str = ''
          this.recordList[i].location = this.buildingList.find((ele)=>{return ele.id == this.recordList[i].roomBuilding}).buildingName+  this.recordList[i].roomLocation
          this.recordList[i].time = this.recordList[i].startTime + ' ~ ' + this.recordList[i].endTime
          str = (this.recordList[i].projector) ? '投影仪、' : ''
          str += (this.recordList[i].display) ? '显示屏、' : ''
          str += (this.recordList[i].whiteboard) ? '白板、' : ''
          str += (this.recordList[i].blackboard) ? '黑板、' : ''
          this.recordList[i].equipment = str 
        }
      },
      // 选中tab改变
      tabChange() {
        this.form = {
          page: 1,
          pageSize: 8
        }
        this.getRecordList()
      },
      // 每页条数改变
      sizeChange(val) {
        this.form.pageSize = val
        this.getRecordList()
      },
      // 当前页改变
      currentChange(val) {
        this.form.page = val
        this.getRecordList()
      },
    },
  }
</script>
<style lang="scss" scoped>

</style>