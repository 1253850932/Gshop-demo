<template lang="">
  <div class="cartcontrol">
    <transition name="move">
      <div  v-show="foods.count" @click.stop="UpdateFoodsCount(false)" class="de" >
        <svg class="icon remove" aria-hidden="true">
          <use xlink:href="#icon-jianhao"></use>
        </svg>
      </div>
    </transition>

    <div class="cart-count" v-show="foods.count">{{ foods.count }}</div>
    <div >
      <svg class="icon add" aria-hidden="true" @click.stop="UpdateFoodsCount(true)">
        <use xlink:href="#icon-jiahao"></use>
      </svg>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  props: { foods: Object },
  setup(props) {
    const store = useStore();
    const UpdateFoodsCount = (isAdd) => {
      store.dispatch("UpdateFoodsCount", { isAdd, foods: props.foods });
    };
    return { UpdateFoodsCount };
  },
};
</script>
<style lang="less">
.cartcontrol {
  display: flex;
  height: 1rem;
  .icon,
  .cart-count {
    margin-left: 0.5rem;
  }
  .cart-count {
    font-size: 15px;
    margin-top: 0.08rem;
    line-height: 1rem;
  }
  .add {
    font-size: 21px;
  }
  .remove {
    margin-top: 0.05rem;
    font-size: 18px;

  }
  .icon {
    color: #02a774;
  }
  .de{
	&.move-enter-active,&.move-leave-active{
		transition: all .5s;
	}
	&.move-enter-from,&.move-leave-to{
		opacity: 0;
		transform: translateX(40px);
	}
  }
  
}
</style>
