import Vue from 'vue'
import App from './pages/App.vue'

import vueFilter from './filter'

vueFilter()

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
