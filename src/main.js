// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


// 配置NProgress选项
// NProgress.configure({ })

// 在路由页面跳转使用
router.beforeEach((to, from, next) => {
  // 开始进度条
  NProgress.start()
  // 继续路由
  next()
})

router.afterEach(transition => {
  // 结束进度条
  NProgress.done()
})