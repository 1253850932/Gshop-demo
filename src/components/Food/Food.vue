<template lang="">
  <div class="food" v-if="isShow">
    <div class="food-content">
      <div class="image-header">
        <img :src="food.image"/>
        <p class="foodpanel-desc">{{food.info}}</p>
        <div class="back" @click="toggleShow()">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-dayufuhao"></use>
          </svg>
        </div>
      </div>
      <div class="content">
        <h1 class="title">{{food.name}}</h1>
        <div class="detail">
          <span class="sell-count">月{{food.sellCount}}售份</span>
          <span class="rating">好评率{{food.rating}}%</span>
        </div>
        <div class="price">
          <span class="now">￥{{food.price}}</span>
          <span class="old">{{food.oldPrice}}</span>
        </div>
        <div class="cartcontrol-wrapper"><CartControl :foods="food"/></div>
      </div>
    </div>
    <div class="food-cover" @click="toggleShow()"></div>
  </div>
</template>
<script>
import { computed, onUpdated, reactive, ref } from 'vue';
import {useStore} from 'vuex'
import CartControl from '../../components/CartControl/CartControl.vue'
export default {
	props:{
		food:Object
	},
	data() {
		return {
			isShow:false
		}
	},
	methods: {
		toggleShow() {
			this.isShow = !this.isShow;
			console.log(this.food);
		}
	},
	components:{CartControl},
	setup(props){
		// const isShow =ref(false)
		// const toggleShow = () => {
		// 	isShow.value = !isShow.value
		// }
		
		// return{isShow,toggleShow}
	}
};
</script>
<style lang="less" scoped>
.food {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 1.92rem;
  z-index: 101;
  width: 100%;
  &.fade-enter-active,
  &.fade-leave-active {
    transition: opacity 0.5s;
  }
  &.fade-enter,
  &.fade-leave-to {
    opacity: 0;
  }
  .food-content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 65%;
    z-index: 66;
    background: #fff;
    border-radius: .2rem;
  }
  .image-header {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 100%;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .foodpanel-desc {
      font-size: 10px;
      color: #ddd;
      letter-spacing: 0;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 0 10px 10px;
    }
    .back {
      position: absolute;
      top: .4rem;
      left: 0;
	  transform: rotate(180deg);
      .icon-arrow_left {
        display: block;
        padding: .4rem;
        font-size: .8rem;
        color: #fff;
      }
    }
  }
  .content {
    position: relative;
    padding: .72rem;
	height: 5rem;
	background-color: #fff;
    .title {
      line-height: .56rem;
      margin-bottom: .32rem;
      font-size: 14px;
      font-weight: 700;
      color: rgb(7, 17, 27);
    }
    .detail {
      margin-bottom: .72rem;
      line-height: .4rem;
      height: .4rem;
      font-size: 0;
    }
    .sell-count,
    .rating {
      font-size: 10px;
      color: rgb(147, 153, 159);
    }
    .sell-count {
      margin-right: 12px;
    }
    .price {
      font-weight: 700;
      line-height: .96rem;
      .now {
        margin-right: .32rem;
        font-size: 14px;
        color: rgb(240, 20, 20);
      }
      .old {
        text-decoration: line-through;
        font-size: 10px;
        color: rgb(147, 153, 159);
      }
    }
    .cartcontrol-wrapper {
      position: absolute;
      right: .48rem;
      bottom: 1.2rem;
    }
    .buy {
      position: absolute;
      right: .72rem;
      bottom: .72rem;
      z-index: 10;
      height: .96rem;
      line-height: .96rem;
      padding: 0 .48rem;
      box-sizing: border-box;
      border-radius: .48rem;
      font-size: 10px;
      color: #fff;
      background: rgb(0, 160, 220);
      &.fade-transition {
        transition: all 0.2s;
        opacity: 1;
      }

      &.fade-enter,
      &.fade-leave {
        opacity: 0;
      }
    }
  }
  .food-cover {
    position: absolute;
    top: 0;
    right: 0;
    bottom: -1.92rem;
    left: 0;
    z-index: 55;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
