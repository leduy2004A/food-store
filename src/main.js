import { createApp } from 'vue'
import mitt from 'mitt'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import store from './store/index'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone,faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPhone,faCircleXmark)
//import store from './store'
loadFonts()
const emitter = mitt()
const app = createApp(App)
  app.use(vuetify)
  app.use(router)
  app.use(LoadingPlugin)
  app.use(store)
  app.use(Antd)
  app.config.globalProperties.emitter = emitter;
  app.component("font-awesome-icon", FontAwesomeIcon)
  app.mount('#app')
