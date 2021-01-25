import router from './router'
import store from './store'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' 
import getPageTitle from '@/utils/get-page-title'

const whiteList = ['/pcLogin','/mobileLogin','/pcRegister'] 

router.beforeEach(async(to, from, next) => {
  document.title = getPageTitle(to.meta.title)
  const hasToken = getToken()
  
  next()
  // if (hasToken) {
  //   if (to.path === '/pcLogin') {
  //     next({ path: '/' })
  //   } else {
  //     const hasGetUserInfo = store.getters.name
  //     if (hasGetUserInfo) {
  //       next()
  //     } else {
  //       try {
  //         await store.dispatch('user/getInfo')
  //         next()
  //       } catch (error) {
  //         await store.dispatch('user/resetToken')
  //         Message.error(error || 'Has Error')
  //         next(`/pcLogin?redirect=${to.path}`)
  //       }
  //     }
  //   }
  // } else {
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     next()
  //   } else {
  //     next(`/pcLogin?redirect=${to.path}`)
  //   }
  // }
})

router.afterEach(() => {
  
})
