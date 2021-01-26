import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

import 'normalize.css/normalize.css'
import '@/styles/index.scss'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/element-variables.scss'
import locale from 'element-ui/lib/locale/lang/en'

import {
	Button,
  Checkbox,
  Notify,
  NavBar,
  Tabbar,TabbarItem,Tag,Loading,Form,Calendar,DatetimePicker,Field,Stepper,Popup,Icon,Picker,Cell, CellGroup
} from 'Vant'
import 'vant/lib/index.css';

import '@/icons'
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
