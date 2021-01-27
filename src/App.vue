<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  import store from '@/store'
  export default {
    name: 'App',
    computed: {
      device() {
        let device = navigator.userAgent.match(
          /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
          )
        store.dispatch('app/toggleDevice', device ? 'mobile': 'desktop')
        return device
      },
    },
    mounted() {
      // if (this.device) {
      //   this.$router.push('/mobileLogin');
      // } else {
      //   this.$router.push('/pcLogin');
      // }
    }
  }

</script>
