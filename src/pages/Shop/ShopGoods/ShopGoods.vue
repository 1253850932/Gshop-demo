<template lang="">
  <div>
    <div class="goods" v-if="show">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li
            class="menu-item current"
            v-for="(item, index) in goods"
            :key="index"
          >
            <span class="text bottom-border-1px">
              <img class="icon" :src="item.icon" v-if="item.icon" />
              {{ item.name }}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper">
        <ul ref="foodsWrapper">
          <li
            class="food-list-hook"
            v-for="(good, index) in goods"
            :key="index"
          >
            <h1 class="title">{{ good.name }}</h1>
            <ul>
              <li
                class="food-item bottom-border-1px"
                v-for="(foods, index) in good.foods"
                :key="index"
				 @click="showFood(foods)" 
              >
                <div class="icon" >
                  <img width="57" height="57" v-lazy="foods.image" />
                </div>
                <div class="content"  >
                  <h2 class="name">{{ foods.name }}</h2>
                  <p class="desc">{{ foods.description }}</p>
                  <div class="extra">
                    <span class="count">月售 {{ foods.sellCount }} 份</span>
                    <span>好评率 {{ foods.rating }}%</span>
                    <div class="price">
                      <span class="now">￥{{ foods.price }}</span>
                    </div>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <CartControl :foods="foods"></CartControl>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
	  <ShopCart/>
    </div>
    <Food ref="foodCom" :food="food"/>
  </div>
</template>
<script>
import BetterScroll from "better-scroll";
import CartControl from "../../../components/CartControl/CartControl.vue";
import Food from "../../../components/Food/Food";
import ShopCart from "../../../components/ShopCart/ShopCart.vue";

import {
  ref,
  computed,
  nextTick,
  reactive,
} from "vue";
import { useStore } from "vuex";
export default {
  // mounted() {
  // 	this.$store.dispatch('getShopGoods',() => {
  // 		this.$nextTick(() =>{
  // 			new BetterScroll('.menu-wrapper')
  // 			new BetterScroll('.foods-wrapper')
  // 		})
  // 	})
  // },
  components: { CartControl, Food,ShopCart },
  setup(props) {
    const store = useStore();
    const show = ref(true);
    let foodCom = ref();

    let toparr = reactive([]);
    let scrollY = ref(0);
    store.dispatch("getShopGoods", () => {
      nextTick(() => {
        _initScroll();

        _initTops();
      });
    });
    // 计算得到当前分类的下标
    const currentIndex = computed(() => {
      get: {
      }
    });
    // 初始化滚动
    const _initScroll = () => {
      let scrollY2 = 0;
      new BetterScroll(".menu-wrapper", {});
      let foodsScroll = new BetterScroll(".foods-wrapper", {
        probeType: 2, //因为惯性滑动不会触发
      });
      //给右侧列表绑定scroll监听
      foodsScroll.on("scroll", ({ x, y }) => {
        scrollY2 = Math.abs(y);
        // console.log(scrollY);
        scrollY = scrollY2;
      });
    };
    // 初始化top
    const _initTops = () => {
      // 1.初始化tops
      let tops = [];
      let top = 0;
      tops.push(top);
      // 2.收集
      //找到所有分类的li
      let lis = document.getElementsByClassName("food-list-hook");
      //类数组转化成数组
      let list = Array.from(lis);
      //   遍历拿到所有li中的可视高度，push到tops数组里
      list.forEach((li) => {
        top += li.clientHeight;
        tops.push(top);
      });

      // 3.更新数据
      toparr = tops;
      //   console.log(toparr);
    };
    const goods = computed(() => store.state.goods);

    // 点击展示food详情
    // let showFood = (foods) => {
    //   // 更新food
	// //   store.commit('food',foods)
		
	
    //   // 显示food组件，调用food组件中的方法
    //   foodCom.value.toggleShow();
    // };
   
    return { goods, show,  foodCom };
  },
  data(){
	  return {
		  food:{},
			foodCom:false
	  }
  },
  methods: {
	  showFood(foods){
		  this.food = foods
		  this.$refs.foodCom.toggleShow()
	  }
  },
};
</script>
<style lang="less" scoped>
.goods {
  display: flex;
  position: absolute;
  top: 7.8rem;
  bottom: 1.84rem;
  width: 100%;
  background: #fff;
  overflow: hidden;
  .menu-wrapper {
    flex: 0 0 80px;
    width: 3.2rem;
    background: #f3f5f7;
    .menu-item {
      display: table;
      height: 2.16rem;
      width: 2.24rem;
      padding: 0 0.48rem;
      line-height: 0.56rem;
      &.current {
        position: relative;
        z-index: 10;
        margin-top: -1px;
        background: #fff;
        color: green;
        font-weight: 700;
      }
      .icon {
        display: inline-block;
        vertical-align: top;
        width: 0.48rem;
        height: 0.48rem;
        margin-right: 0.08rem;
        background-size: 12px 12px;
        background-repeat: no-repeat;
      }
      .text {
        display: table-cell;
        width: 2.24rem;
        vertical-align: middle;
        border-bottom: -1px (rgba(7, 17, 27, 0.1));
        font-size: 12px;
      }
    }
  }
  .foods-wrapper {
    flex: 1;
    .title {
      margin: 0;
	  width: 15rem - 3.7;
      padding-left: 14px;
      height: 1.04rem;
      line-height: 1.04rem;
      border-left: 2px solid #d9dde1;
      font-size: 12px;
      color: rgb(147, 153, 159);
      background: #f3f5f7;
    }
    .food-item {
      position: relative;

      display: flex;
      margin: 0.72rem;
      padding-bottom: 0.72rem;
      border-bottom: -1px (rgba(7, 17, 27, 0.1));
      &:last-child {
        border: none;
        margin-bottom: 0;
      }
      .icon {
        flex: 0 0 2.28rem;
        height: 100%;
        width: 100%;
        margin-right: 0.4rem;
      }
      .content {
        flex: 1;
        .name {
          margin: 0.08rem 0 0.32rem 0;
          height: 0.56rem;
          line-height: 0.56rem;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }
        .desc,
        .extra {
          line-height: 0.4rem;
          font-size: 10px;
          color: rgb(147, 153, 159);
        }
        .desc {
          line-height: 0.48rem;
          margin-bottom: 0.32rem;
        }
        .extra {
          .count {
            margin-right: 0.48rem;
          }
          .price {
            font-weight: 700;
            line-height: 0.96rem;
            .now {
              margin-right: 0.32rem;
              font-size: 14px;
              color: rgb(240, 20, 20);
            }
            .old {
              text-decoration: line-through;
              font-size: 10px;
              color: rgb(147, 153, 159);
            }
          }
        }
        .cartcontrol-wrapper {
          right: 0;
          position: absolute;
          bottom: 0.48rem;
        }
      }
    }
  }
}
</style>
