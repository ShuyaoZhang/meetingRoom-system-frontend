import Vue from 'vue' // 全家桶
import App from './App'
import store from './store'
import router from './router'

import 'normalize.css/normalize.css' // 全局样式
import '@/styles/index.scss'

import ElementUI from 'element-ui' // 组件库
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/element-variables.scss'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import {
	Button,
  Checkbox,
  Notify,
  NavBar,
  Tabbar,TabbarItem,Tag,Loading,Form,Calendar,DatetimePicker,Field,Stepper,Popup,Icon,Picker,Cell, CellGroup
} from 'Vant'
import 'vant/lib/index.css';

import '@/icons' // 全局部分
import '@/permission' 
import 'lib-flexible'


if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.use(ElementUI, { locale })
Vue.use(Button).use(Checkbox).use(Notify).use(NavBar).use(Tabbar).use(TabbarItem).use(Tag).use(Loading).use(Form).use(Calendar).use(DatetimePicker).use(Field).use(Stepper).use(Popup).use(Icon).use(Picker).use(Cell).use(CellGroup)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
