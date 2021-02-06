<template>
  <div>
    <el-steps :active="stepActive" simple>
      <el-step title="1：填写会议信息" icon="el-icon-edit"></el-step>
      <el-step title="2：选择会议室" icon="el-icon-thumb"></el-step>
      <el-step title="3：等候审批" icon="el-icon-loading"></el-step>
    </el-steps>
    <div class="bookForm" v-if="stepActive==1">
      <el-form ref="form" :model="form" label-width="100px" size="small">
        <el-form-item label="日期：">
          <el-date-picker type="date" v-model="form.date"></el-date-picker>
        </el-form-item>
        <el-form-item label="起止时间：">
          <el-time-picker is-range v-model="form.time" range-separator="至"></el-time-picker>
        </el-form-item>
        <el-form-item label="参会人数：">
          <el-input-number v-model="form.num" :min="1" :max="200"></el-input-number>
        </el-form-item>
        <el-form-item label="会议主题：">
          <el-input placeholder="请输入会议主题" v-model="form.meetingTheme" clearable style="width:500px"></el-input>
        </el-form-item>
        <el-form-item label="选择设备：" prop="equipment">
          <el-checkbox-group v-model="equipment">
            <el-checkbox v-for="(item,index) in projectorList" :label="item.id" :key="item.id">
              {{item.projectorName}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item>
          <el-button @click="query" type="primary" icon="el-icon-search">查询会议室</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="bookForm" v-if="stepActive==2">
      <span class="bookTitle">选择会议室：</span>
      <el-select v-model="form.roomId" clearable placeholder="请选择" size="small">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <div class="bookButton">
        <el-button @click="back" icon="el-icon-back" size="small">返回上一步</el-button>
        <el-button @click="sure" type="primary" icon="el-icon-circle-check" size="small">预订会议室</el-button>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    buildingList,
    projectorList
  } from '@/utils/index.js'
  export default {
    data() {
      return {
        buildingList: buildingList,
        projectorList: projectorList,
        stepActive: 1, // 当前步骤
        form: {}, // 预订表单
        equipment:[],
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      }
    },
    created() {},
    computed: {},
    methods: {
      // 查询会议室
      query() {
        this.stepActive = 2
      },
      // 预订会议室
      sure() {
        this.stepActive = 3
      },
      // 返回上一步
      back() {
        this.stepActive = 1
      }
    },
  }
</script>
<style lang="scss" scoped>
  .bookForm {
    margin-top: 20px;
  }

  .bookTitle {
    line-height: 32px;
    font-size: 14px;
    color: #606266;
    font-weight: 700;
  }

  .bookButton {
    margin: 30px 0 0 80px;
  }
</style>