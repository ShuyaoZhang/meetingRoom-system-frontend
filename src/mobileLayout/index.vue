<template>
  <div class="mobileLayout">
    <van-nav-bar title="会议室预订" left-text="返回" left-arrow @click-left="back" />
    <div class="main">
      <router-view :key="key" />
    </div>
    <van-tabbar v-model="active" z-index='100' active-color="#132CF8" route>
      <van-tabbar-item to="/mobileIndex" icon="shop-o">首页</van-tabbar-item>
      <van-tabbar-item to="/mobileBook" icon="add-o">预定</van-tabbar-item>
      <van-tabbar-item to="/mobileMeeting" icon="calendar-o">我的会议</van-tabbar-item>
      <van-tabbar-item to="/mobileRecord" icon="todo-list-o">预定记录</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
  import {
    Tabbar,
    TabbarItem
  } from 'Vant'
  export default {
    data() {
      return {
        active: 0,
      }
    },
    components: {
      Tabbar,
      TabbarItem
    },
    created() {},
    computed: {
      key() {
        return this.$route.path
      }
    },
    methods: {
      // 返回
      back() {

      }
    },
  }

</script>
<style lang="scss">
  .van-nav-bar__text {
    color: #132CF8 !important;
  }

  .van-hairline--top-bottom{
    position: fixed!important;
  }

</style>
<style lang="scss" scoped>
.main{
  background: #f7f8fa;
  width: 100%;
  min-height: calc(100vh - 96px);
}
</style>
