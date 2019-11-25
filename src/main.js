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
  	title: 'Hello World!',
  	link: 'https://google.hr',
  	finishedLink: '<a href="https://google.hr">Google</a>'
  },
  methods: {
  	sayHello: function() {
  		this.title = "Hello!";
    	return this.title;
    }
  }
});
