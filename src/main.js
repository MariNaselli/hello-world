import Vue from 'vue'
import App from './App.vue'
import router from './router'

//importo router

Vue.config.productionTip = false

new Vue({
  router, // Agrego esta línea para utilizar el enrutador
  render: h => h(App),
}).$mount('#app')
