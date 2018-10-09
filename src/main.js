/* eslint-disable */
//babel对于es6+语法补丁
import 'babel-polyfill'

import Vue from 'vue'
import App from './App'
import router from './router'

import fastClick from 'fastclick'

import 'common/styl/index.styl'

//阻止移动端300 毫秒的延迟
fastClick.attach(document.body);



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})