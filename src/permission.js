import router from './router'
import store from './store'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' 
import getPageTitle from '@/utils/get-page-title'

const whiteList = ['/pcLogin','/mobileLogin','/pcRegister','/404'] 

router.beforeEach(async(to, from, next) => {
  document.title = getPageTitle(to.meta.title)
  const hasToken = getToken()
  next()


  // if (hasToken) {// 已登录
  //   if (to.path === '/pcLogin') {
  //     next({ path: '/pcBook' })
  //   } else {
  //     const hasUserRole = store.getters.role
  //     if (hasUserRole) {
  //       next()
  //     } else {
  //       try {
  //         const { role } = await store.dispatch('user/getInfo')
  //         const accessRoutes = await store.dispatch('user/generateRoutes', role)
  //         router.addRoutes(accessRoutes)
  //         next({ ...to, replace: true })
  //       } catch (error) {
  //         await store.dispatch('user/resetToken')
  //         Message.error(error || 'Has Error')
  //         next(`/pcLogin?redirect=${to.path}`)
  //       }
  //     }
  //   }
  // } else {// 未登录
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     next()
  //   } else {
  //     next(`/pcLogin?redirect=${to.path}`)
  //   }
  // }
})

router.afterEach(() => {
  
})
