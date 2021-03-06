// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';    // 使用 CSS
// Vue.use(iView);
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.config.productionTip = false

// Vue.http.options.emulateJSON = true

Vue.http.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
Vue.http.headers.post['Accept'] = '*/*'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
