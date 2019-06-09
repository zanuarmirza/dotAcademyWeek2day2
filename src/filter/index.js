import Vue from 'vue'

import upCaseFirstFilter from './upCaseFirstFilter'

export default () => {
  Vue.filter('upCaseFirst', (string) =>
    upCaseFirstFilter(string)
  )
}
