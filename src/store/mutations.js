/* 
直接更新state的多个方法对象
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
	INCREMENT_FOOD_COUNT,
	DECREMENT_FOOD_COUNT,
	CLEAR_CART,
	RECEIVE_SEARCH_SHOPS
} from './mutation-types'
import { toRef } from 'vue'
export default{
	[RECEIVE_ADDRESS](state,{address}){
		state.address = address
	},
	[RECEIVE_CATEGORYS](state,{categorys}){
		state.categorys = categorys
	},
	[RECEIVE_SHOPS](state,{shops}){
		state.shops = shops
	},
	[RECEIVE_USER_INFO](state,{userInfo}){
		state.userInfo = userInfo
	},
	[RESET_USER_INFO](state){
		state.userInfo = {}
	},
	[RECEIVE_GOODS](state,{goods}){
		state.goods = goods
	},
	[RECEIVE_INFO](state,{info}){
		state.info = info
	},
	[RECEIVE_RATINGS](state,{ratings}){
		state.ratings = ratings
	},
	ChangeCode(state,code){
		state.Code = code
	},
	[INCREMENT_FOOD_COUNT](state,{foods}){
		if(!foods.count){
			toRef(foods.count = 1)
			state.cartFoods.push(foods)
		}else{
			toRef(foods.count ++)

		}
	},
	[DECREMENT_FOOD_COUNT](state,{foods}){
		if(foods.count){
			toRef(foods.count--)
			if(foods.count ===0){
				state.cartFoods.splice(state.cartFoods.indexOf(foods),1)
			}
		}
	},
	[CLEAR_CART](state){
		state.cartFoods.forEach(foods =>foods.count=0)
		state.cartFoods = []

	},
	[RECEIVE_SEARCH_SHOPS](state,{searchShops}){
	
		state.searchShops = searchShops

	},

}