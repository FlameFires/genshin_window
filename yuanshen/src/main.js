// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = true
// const renderer = require('vue-server-renderer').createRenderer()

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  components: { App }, // 虽然通过路由匹配，这里没啥用了
  template: '<App/>'
})

/* renderer.renderToString(app).then(html => {
  console.log(html)
}).catch(err => {
  console.error(err)
}) */