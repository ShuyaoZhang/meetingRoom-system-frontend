<template>
  <div class="record">
    <div class="tab">
      <div class="tab-title">预订列表</div>
      <div class="tab-row">
        <div class="tab-item" :class="{active:this.switch==1}" @click="tabSwitch(1)">未开始</div>
        <div class="tab-item" :class="{active:this.switch==2}" @click="tabSwitch(2)">正在进行</div>
        <div class="tab-item" :class="{active:this.switch==3}" @click="tabSwitch(3)">已结束</div>
      </div>
    </div>
    <div class="list">
      <van-loading size="48px" vertical v-show="loading">加载中...</van-loading>
      <div class="no-data" v-if="!this.recordList.length">
        <img src="@/assets/images/no-data.png" />
        <div>暂无数据</div>
      </div>
      <div v-else>
        <div class="list-item" v-for="(item,index) in recordList" @click="goDetail(item.id)">
          <div class="meeting-img">
            <img src="@/assets/images/meeting.png" />
          </div>
          <div class="meeting-content">
            <div class="meeting-theme">{{item.meetingTheme}}</div>
            <div class="room-name">{{item.roomName}}</div>
            <van-tag plain type="success" v-if="item.projector" style="margin-right: 10px;">投影仪</van-tag>
            <van-tag plain type="success" v-if="item.display" style="margin-right: 10px;">显示屏</van-tag>
            <van-tag plain type="success" v-if="item.blackboard" style="margin-right: 10px;">黑板</van-tag>
            <van-tag plain type="success" v-if="item.whiteboard" style="margin-right: 10px;">白板</van-tag>
            <div class="room-time">{{item.date}} {{item.startTime}} ~ {{item.endTime}}</div>
            <div class="logo used" v-if="item.status==0">未审批</div>
            <div class="logo unused" v-if="item.status==1">通过</div>
            <div class="logo overdue" v-if="item.status==2">驳回</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    Tag
  } from 'vant';
  export default {
    data() {
      return {
        switch: 1,
        recordList: [],
        loading: false,
      }
    },
    components: {
      Tag
    },
    created() {
      this.getRecordList()
    },
    methods: {
      // 切换
      tabSwitch(val) {
        this.switch = val
        this.getRecordList()
      },
      // 获取列表
      getRecordList() {
        this.loading = true
        this.recordList = [{
            id: 1,
            roomName: '雅兰阁',
            roomLocation: '1101',
            date: '2020年11月15日',
            startTime: '13:00',
            endTime: '14:10',
            meetingNum: 15,
            meetingTheme: '后台管理项目分享会',
            bookPerson: '黄佳佳',
            nameList: ['黄佳佳', '小家', '黄佳佳', '小和', '黄佳佳', '小家'],
            projector: 1,
            display: 0,
            whiteboard: 1,
            status: 2
          },
          {
            id: 1,
            roomName: '雅兰阁',
            roomLocation: '1101',
            date: '2020年11月15日',
            startTime: '13:00',
            endTime: '14:10',
            meetingNum: 15,
            meetingTheme: '后台管理项',
            nameList: ['黄佳佳', '小家', '黄佳佳', '小和', '黄佳佳', '小家'],
            projector: 0,
            display: 0,
            whiteboard: 1,
            status: 1
          }
        ]
        this.loading = false
      },
      // 详细
      goDetail(id) {
        this.$router.push({
          path: '/mobileRecord/detail?id=' + id
        })
      },

    },
  }
</script>
<style lang="scss" scoped>
  .tab {
    height: 4rem;
    width: 100%;
    background-image: linear-gradient(to right bottom, #132CF8, #23A4F7);
    color: #fff;
    z-index: 100;
    position: absolute;
    top: 0;

    .tab-title {
      font-size: 16px;
      line-height: 46px;
      text-align: center;
    }

    .tab-row {
      display: flex;
      justify-content: space-between;
      margin-top: 1.95rem;
      padding: 0 20px;
      font-size: 16px;
    }

    .tab-item {
      padding: 5px;
    }

    .active {
      border-bottom: 4px solid #fff;
    }
  }

  .list {
    position: absolute;
    top: 4rem;
    width: 100%;

    .list-item {
      margin: 10px 3% 0;
      background: #fff;
      border-radius: 5px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      height: 110px;
      width: 94%;
      display: flex;
      padding: 10px;
      box-sizing: border-box;
    }

    .meeting-img {
      height: 100px;
      width: 100px;
      border-radius: 50%;
      margin-right: 10px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .meeting-theme {
      font-size: 16px;
      font-weight: 600;
      line-height: 28px;
    }

    .room-name {
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 5px;
    }

    .room-time {
      font-size: 12px;
      line-height: 24px;
      color: #bbb;
    }
  }

  .no-data {
    text-align: center;
    margin-top: 50px;
    color: #bbb;
    font-size: 16px;
  }



  .logo {
    height: 1.2rem;
    width: 1.2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(-330deg);
    z-index: 1;
    position: relative;
    left: 190px;
    top: -110px;
  }

  .overdue {
    border: 2px solid #F66862;
    color: #F66F6A;
  }

  .used {
    border: 2px solid #ff9900;
    color: #ff9900;
  }

  .unused {
    border: 2px solid #55C463;
    color: #55C463;
  }
</style>