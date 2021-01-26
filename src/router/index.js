import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'
import mobileLayout from '@/mobileLayout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

export const constantRoutes = [{
    path: '/pcLogin',
    component: () => import('@/views/login/pc'),
    hidden: true
  },
  {
    path: '/mobileLogin',
    component: () => import('@/views/login/mobile'),
    hidden: true
  },
  {
    path: '/pcRegister',
    component: () => import('@/views/register/pc'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/mobileIndex',
    component: mobileLayout,
    children: [{
      path: 'mobileIndex',
      name: 'mobileIndex',
      component: () => import('@/views/dashboard/mobile')
    }],
    hidden: true
  },

  {
    path: '/mobileBook',
    component: mobileLayout,
    children: [{
      path: '/',
      name: 'mobileBook',
      component: () => import('@/views/book/mobile')
    }],
    hidden: true
  },

  {
    path: '/mobileMeeting',
    component: mobileLayout,
    children: [{
      path: '/',
      name: 'mobileMeeting',
      component: () => import('@/views/meeting/mobile')
    }],
    hidden: true
  },

  {
    path: '/mobileRecord',
    component: mobileLayout,
    children: [{
      path: '/',
      name: 'mobileRecord',
      component: () => import('@/views/record/mobile')
    }, {
      path: 'detail',
      name: 'mobileDetail',
      component: () => import('@/views/detail/mobile')
    }],
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: {
        title: 'Dashboard',
        icon: 'dashboard'
      }
    }]
  },



  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router