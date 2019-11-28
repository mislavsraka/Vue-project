// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
  data: {
  	counter: 0,
  	secondCounter: 0,
  }, 
  computed: {
  	output: function(){
  		console.log('Computed');
  		return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
  	}
  },

  methods: {
  	result: function() {
  		console.log('Method');
  		return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
  	}
  }
});
