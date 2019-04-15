
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');
import './bootstrap'

// window.Vue = require('vue');
// window.VueRouter = require('vue-router');
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueAxios, axios)

axios.defaults.baseURL = 'http://localhost:8000/api';
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

import App from './components/App'
import Welcome from './components/Welcome'
import About from './components/About'
import Contact from './components/Contact'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'

// Vue.component('welcome', require('./components/Welcome.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Welcome
		},
		{
			path: '/about',
			name: 'about',
			component: About
		},
		{
			path: '/contact',
			name: 'contact',
			component: Contact
		},
		{
			path: '/dashboard',
			name: 'dashboard',
			component: Dashboard,
			meta: {
				auth: true
			}
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
			meta: {
				auth: false
			}
		},
		{
			path: '/register',
			name: 'register',
			component: Register,
			meta: {
				auth: false
			}
		}
	],
});

const store = new Vuex.Store({
	state: {
		counter: 0,
		numbers: [1,2,3]
	},
	mutations: {
		INCREMENT (state) {
			state.counter++
		},
		ADD_NUMBER(state, payload) {
			state.numbers.push(payload)
		}
	},
	actions: {
		addNumber(context, number) {
			context.commit("ADD_NUMBER", number)
		}
	},
	getters: {
		getNumbers(state) {
			return state.numbers
		}
	}
})

Vue.use(require('@websanova/vue-auth'), {
	auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
	http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
	router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js')
})

const app = new Vue({
    el: '#app',
	components: { App },
	data: {
		title: "",
		isAuth: false
	},
	router,
	store,
})
