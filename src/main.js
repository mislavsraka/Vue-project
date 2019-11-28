// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#exercise',
  data: {
  	value: 0,
  },
  computed: {
  	result: function() {
  		return this.value == 37 ? 'done' : 'not there yet'; 
  	}
  },
  watch: {
  	result: function() {
  		var vm = this;
  		setTimeout(function() {
  			vm.value = 0;
  		}, 5000);
    }
  }
});
