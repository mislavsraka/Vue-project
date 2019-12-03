// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/style.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	data: {
		color: 'yellow',
		width: 100
	},
	computed: {
		myStyle: function() {
			return {
				backgroundColor: this.color,
				width: this.width + 'px'
			};
		}
	}
});
