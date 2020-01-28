import Vue from 'vue'
import VueRouter from 'vue-router'
// Components
import Welcome from './components/Welcome'
import Contact from './components/Contact'
import Login from './components/Login'
import Register from './components/Register'

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Welcome
		},
		{
			path: '/contact',
			name: 'contact',
			component: Contact
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
		},
		// otherwise redirect to home
		{ path: '*', redirect: '/' }
	]
});
