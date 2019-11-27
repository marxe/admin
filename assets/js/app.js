import Vue from 'vue';
import App from './App/App'
import Buefy from 'buefy'

Vue.use(Buefy)
require('../css/app.scss')

new Vue({
  el: '#app',
  render: (h) => h(App)
})
