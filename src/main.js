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
  	name: 'Mislav Sraka',
  	age: '27',
  	slika: 'https://static.igre123.net/slike/109554-38506/slika-38506.jpg'
  },
  methods: {
  	random: function() {
  		return Math.random();
  	}
  }
});
