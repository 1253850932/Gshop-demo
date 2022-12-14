/* 
通过异步请求或者简介更新state的多个方法的对象
*/
import {
	RECEIVE_SHOPS,
	RECEIVE_CATEGORYS,
	RECEIVE_ADDRESS,
	RECEIVE_USER_INFO,
	RESET_USER_INFO,
	RECEIVE_GOODS,
	RECEIVE_INFO,
	RECEIVE_RATINGS,
	DECREMENT_FOOD_COUNT,
	INCREMENT_FOOD_COUNT,
	CLEAR_CART,
	RECEIVE_SEARCH_SHOPS
} from './mutation-types'
import { reqAddress,reqCategorys,reqShops,reqUserInfo,reqLogout,reqShopGoods,reqShopInfo,reqShopRatings,reqSearchShop } from '@/api'
export default{
// 异步获取地址
async getAddress ({commit,state}){
	// 发送ajax请求
	const gethash = state.latitude+',' + state.longitude
	const result = await reqAddress(gethash)
	// 提交一个mutation
	if(result.code ===0){
		const address = result.data
		commit(RECEIVE_ADDRESS,{address})
	}
},

// 异步获取食品分类列表
async getCategorys ({commit},fn){
	// 发送ajax请求
	const result = await reqCategorys()
	// 提交一个mutation
	if(result.code ===0){
		const categorys = result.data
		commit(RECEIVE_CATEGORYS,{categorys})
		fn && fn()
	}
},

// 异步获取商家列表
async getShops ({commit,state}){
	// 发送ajax请求
	const {longitude,latitude} = state
	const result = await reqShops(longitude,latitude)
	// 提交一个mutation
	if(result.code ===0){
		const shops = result.data
		commit(RECEIVE_SHOPS,{shops})
	}
},

// 同步记录用户信息
recordUser({commit},userInfo){
	commit(RECEIVE_USER_INFO,{userInfo})
},

// 异步获取用户信息
async getUserInfo({commit}){
	// 发送ajax请求
    const result = await reqUserInfo()
    // 提交一
	if(result.code ===0){
		const userInfo = result.data
		commit(RECEIVE_USER_INFO,{userInfo})
	}
},
// 异步登出
async LoginOut ({commit}){
	const result = await reqLogout()
	if(result.code ===0){
		commit(RESET_USER_INFO)
	}
},

// 异步获取商家信息
async getShopInfo ({commit},fn){
	const result = await reqShopInfo()
	if (result.code ===0) {
		const info = result.data
		commit(RECEIVE_INFO,{info})
		fn &&fn()
	}
},
// 异步获取商品列表
async getShopGoods ({commit},fn){
	const result = await reqShopGoods()
	if (result.code ===0) {
		const goods = result.data
		commit(RECEIVE_GOODS,{goods})
		// 数据更新了
		fn && fn()
	}
},
// 异步获取商家评价列表
async getShopRatings ({commit},fn){
	const result = await reqShopRatings()
	if (result.code ===0) {
		const ratings = result.data
		commit(RECEIVE_RATINGS,{ratings})
		fn && fn()
	}
},
// 同步更新foods中的count值
UpdateFoodsCount({commit},{isAdd,foods}) {
	if(isAdd){
		commit(INCREMENT_FOOD_COUNT,{foods})
	}else{
		commit(DECREMENT_FOOD_COUNT,{foods})
	}
},
// 同步清空购物车
clearCart({commit}){
	commit(CLEAR_CART)
},
// 异步获取商家列表
async searchShops ({commit,state},keyword){
	const geohash = state.latitude + ',' + state.longitude
	const result = await reqSearchShop(geohash,keyword)
	if (result.code ===0) {
		const searchShops = result.data
		commit(RECEIVE_SEARCH_SHOPS,{searchShops})
	}
},

	
}