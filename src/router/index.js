import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home/Home.vue'
import Search from '../views/Search/Search.vue'
import Order from '../views/Order/Order.vue'
import Profile from '../views/Profile/Profile.vue'
import Login from '../views/Login/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
		{
			path: '/home',
			component: Home,
			meta:{
				showFooter: true
			}
		},
		{
			path: '/search',
			component: Search,
			meta:{
				showFooter: true
			}
		},
		{
			path: '/order',
			component: Order,
			meta:{
				showFooter: true
			}
		},
		{
			path: '/profile',
			component: Profile,
			meta:{
				showFooter: true
			}
		},
		{
			path: '/login',
			component: Login
		},
  ]
})
