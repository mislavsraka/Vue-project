// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/style.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#exercise',
  data: {
  	isShown: true,
    array: ['Max', 'Anna', 'Chris', 'Manu'],
    myObject: {
      title: 'Lord of the Rings',
      author: 'J.R.R. Tolkiens',
      books: '3',
    },
    testData: {
      name: 'TESTOBJECT', 
      id: 10,
      data: [1.67, 1.33, 0.98, 2.21]
    },
  }
});
