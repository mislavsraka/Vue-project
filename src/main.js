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
  	x: 0,
  	y: 0
  },
  methods: {
  	increase: function() {
  		this.counter++;
    },
    updateCoordinates: function(event) {
    	this.x = event.clientX;
    	this.y = event.clientY;
    }
  }
});
