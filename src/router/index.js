import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
	{
		name:'Msite',
		path:'/',
		component:()=>import('../pages/Msite/Msite.vue'),
		meta:{
			showFooter:true
		}
	},
	{
		name:'Order',
		path:'/order',
		component:()=>import('../pages/Order/Order.vue'),
		meta:{
			showFooter:true
		}
	},
	{
		name:'Profile',
		path:'/profile',
		component:()=>import('../pages/Profile/Profile.vue'),
		meta:{
			showFooter:true
		}
	},
	{
		name:'Search',
		path:'/search',
		component:()=>import('../pages/Search/Search.vue'),
		meta:{
			showFooter:true
		}
	},
	{
		name:'Login',
		path:'/login',
		component:()=>import('../pages/Login/Login.vue')
	},

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
