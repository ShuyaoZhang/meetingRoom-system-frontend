<template>
  <div class="login">
    <div class="top">
      <div class="top-logo"></div>
      <span class="top-title">校园会议室管理系统</span>
    </div>
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="off" auto-complete="off"
      label-position="left">
      <h2 class="login-title">登录</h2>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input ref="username" v-model="loginForm.username" placeholder="用户名" name="username" type="text" tabindex="1"/>
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input :key="passwordType" ref="password" v-model="loginForm.password" :type="passwordType" placeholder="密码"
          name="password" tabindex="2" @keyup.enter.native="handleLogin" />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>
      <div style="margin-top: -5px;">
        <el-checkbox v-model="remember">记住密码</el-checkbox>
        <span class="info" @click="goRegister">没有账号</span>
      </div>
      <el-button :loading="loading" type="primary" class="login-button" @click.native.prevent="handleLogin">点击登录
      </el-button>
    </el-form>
  </div>
</template>

<script>
  import {
    getUsername,
    setUsername,
    removeUsername,
    getPassword,
    setPassword,
    removePassword
  } from '@/utils/auth'
  export default {
    name: 'Login',
    data() {
      return {
        remember: false,
        loginForm: {
          username: '',
          password: ''
        },
        loginRules: {
          username: [{
            required: true,
            trigger: 'blur',
            message: '用户名不能为空！'
          }],
          password: [{
            required: true,
            trigger: 'blur',
            message: '密码不能为空！'
          }]
        },
        loading: false,
        passwordType: 'password',
        redirect: undefined
      }
    },
    computed: {
      device() {
        return this.$store.state.app.device
      }
    },
    watch: {
      $route: {
        handler: function (route) {
          this.redirect = route.query && route.query.redirect
        },
        immediate: true
      }
    },
    mounted() {
      this.loginForm.username = getUsername()
      this.loginForm.password = getPassword()
    },
    methods: {
      showPwd() {
        if (this.passwordType === 'password') {
          this.passwordType = ''
        } else {
          this.passwordType = 'password'
        }
        this.$nextTick(() => {
          this.$refs.password.focus()
        })
      },
      goRegister() {
          this.$router.push('pcRegister')
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            if (this.remember) {
              setUsername(this.loginForm.username)
              setPassword(this.loginForm.password)
            } else {
              removeUsername()
              removePassword()
            }
            this.loading = true
            this.$store.dispatch('user/login', this.loginForm).then(() => {
              this.$router.push({
                path: this.redirect || '/'
              })
              this.loading = false
            }).catch(() => {
              this.loading = false
            })
          }
        })
      }
    }
  }

</script>

<style lang="scss">
  .login {
    .el-input__inner {
      border: none !important;
      padding: 0 10px;
      height: 30px;
    }

    .el-input {
      display: inline-block;
      width: 85%;

      input {
        background: #fff;
        border: none;
        color: #C1C1C1;
        caret-color: #C1C1C1;
        border:1px solid red;

        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px white inset;
          -webkit-text-fill-color: #C1C1C1 !important;
        }
      }
    }
  }

</style>
<style lang="scss" scoped>
  .login {
    background: url(../../assets/images/bg.png) no-repeat center;
    background-size: 100% 100%;
    min-height: 100%;
    width: 100%;
  }

  .top {
    position: absolute;
    top: 20px;
    left: 20px;

    .top-logo {
      background: url(../../assets/images/logo.png) no-repeat center;
      background-size: 100% 100%;
      height: 40px;
      width: 40px;
      display: inline-block;
    }

    .top-title {
      color: #515a6e;
      font-weight: 500;
      font-size: 18px;
      line-height: 40px;
      letter-spacing: 2px;
      vertical-align: top;
      margin-left: 10px;
    }
  }

  .login-form {
    position: absolute;
    top: 150px;
    left: 250px;
    width: 300px;

    .login-title {
      color: #4135DD;
      text-align: center;
      margin-bottom: 40px;
    }

    .el-form-item {
      border: 2px solid rgba(0, 0, 0, 0.1);
      border-radius: 30px;
      color: #454545;
    }

    .svg-container {
      padding-left: 15px;
      color: #8E8E8E;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
    }

    .show-pwd {
      position: absolute;
      right: 10px;
      top: 3px;
      font-size: 16px;
      color: #8E8E8E;
      cursor: pointer;
      user-select: none;
    }

    .info {
      color: #606266;
      font-size: 14px;
      float: right;
    }

    .login-button {
      border-radius: 30px;
      border: none;
      outline: none;
      background-image: linear-gradient(to right, #4135DD, #597EFF);
      color: #fff;
      width: 100%;
      height: 40px;
      letter-spacing: 5px;
      margin-top: 30px;
    }
  }

</style>
