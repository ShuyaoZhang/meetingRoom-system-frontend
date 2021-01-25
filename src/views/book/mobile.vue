<template>
  <div class="mobileBook">
    <van-form @submit="onSubmit" colon>
      <van-field clickable name="calendar" :value="form.date" label="日期" placeholder="请选择日期"
        @click="showCalendar = true" required is-link />
      <van-calendar v-model="showCalendar" @confirm="selectDate" color="#132CF8" :min-date="minDate"
        :max-date="maxDate" />

      <van-field clickable name="datetimePicker" :value="form.startTime" label="开始时间" placeholder="请选择开始时间"
        @click="showStartPicker = true" required is-link />
      <van-popup v-model="showStartPicker" position="bottom">
        <van-datetime-picker type="time" @confirm="selectStartTime" @cancel="showStartPicker = false" :min-hour="8"
          title="会议开始时间" />
      </van-popup>

      <van-field clickable name="datetimePicker" :value="form.endTime" label="结束时间" placeholder="请选择结束时间"
        @click="showEndPicker = true" required is-link />
      <van-popup v-model="showEndPicker" position="bottom">
        <van-datetime-picker type="time" @confirm="selectEndTime" @cancel="showEndPicker = false" :min-hour="8"
          title="会议结束时间" />
      </van-popup>

      <van-field name="stepper" label="参会人数" required>
        <template #input>
          <van-stepper v-model="form.num" min="2" max="100" integer input-width="40px" />
        </template>
      </van-field>

      <van-field v-model="form.meetingTheme" name="会议主题" label="会议主题" placeholder="请输入会议主题" required autosize rows="1"
        type="textarea" clearable />

      <van-field name="equipment" label="选择设备">
        <template #input>
          <van-tag :plain="!form.projectorSelect" type="primary" @click="form.projectorSelect = !form.projectorSelect"
            class="tag" size="large" color="#132CF8">
            投影仪</van-tag>
          <van-tag :plain="!form.computerSelect" type="primary" @click="form.computerSelect = !form.computerSelect"
            class="tag" size="large" color="#132CF8">电脑
          </van-tag>
          <van-tag :plain="!form.whiteboardSelect" type="primary"
            @click="form.whiteboardSelect = !form.whiteboardSelect" class="tag" size="large" color="#132CF8">白板
          </van-tag>
        </template>
      </van-field>

      <div class="search" @click="search">
        <van-icon name="search" color="#132CF8" size="22" />
        <div class="search-text">查询会议室</div>
      </div>

      <van-field clickable name="picker" :value="form.roomId" label="选择会议室" placeholder="请选择会议室" @click="showPicker = true" required is-link />
      <van-popup v-model="showPicker" position="bottom">
        <van-picker show-toolbar :columns="roomList" @confirm="selectRoom" @cancel="showPicker = false" />
      </van-popup>

      <div style="margin: 20px;">
        <van-button round block color="linear-gradient(to right bottom, #132CF8, #23A4F7)" @click="sure">
          预定
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
  import {
    Form,
    Calendar,
    DatetimePicker,
    Field,
    Stepper,
    Tag,
    Icon,Picker
  } from 'vant';
  import {
    parseTime,
    getDate
  } from '@/utils/index.js'
  export default {
    data() {
      return {
        form: {
          date: parseTime(new Date(), '{y}-{m}-{d}'),
          startTime: parseTime(new Date(), '{h}:{i}'),
          endTime: parseTime(new Date(), '{h}:{i}'),
          num: 2,
          meetingTheme: '',
          projectorSelect: false,
          computerSelect: false,
          whiteboardSelect: false,
          roomId:''
        },
        showCalendar: false,
        minDate: new Date(),
        maxDate: new Date(new Date().setDate(new Date().getDate() + 7)),
        showStartPicker: false,
        showEndPicker: false,
        showPicker: false,
        roomList: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      }
    },
    components: {
      Form,
      Calendar,
      DatetimePicker,
      Field,
      Stepper,
      Tag,
      Icon,
      Picker
    },
    created() {},
    computed: {},
    methods: {
      selectDate(date) {
        this.form.date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        this.showCalendar = false;
      },
      selectStartTime(time) {
        this.form.startTime = time
        this.showStartPicker = false;
      },
      selectEndTime(time) {
        this.form.endTime = time
        this.showEndPicker = false;
      },
      selectRoom(val){
        this.form.roomId = val;
        this.showPicker = false;
      },
      search(){

      },
      sure(){

      }
    },
  }

</script>
<style lang="scss" scoped>
  .tag {
    margin-right: 10px !important;
  }

  .search {
    margin: 10px 0 0 10px;
    cursor: pointer;
    display: flex;

    .search-text {
      font-size: 16px;
      line-height: 32px;
      color: #132CF8;
      margin-bottom: 10px;
    }
  }

</style>
