<template lang="">
  <div>
    <ShopHeader />
    <div class="tab">
      <div class="tab-item">
        <router-link to="/shop/" active-class="active"  replace>点餐</router-link>
        <router-link to="/shop/ratings" active-class="active" replace>评价</router-link>
        <router-link to="/shop/info" active-class="active" replaces>商家</router-link>
        <!-- <div class="tabBottom" :class="{active:active}"></div> -->
      </div>
    </div>

	<router-view  v-slot="{ Component }">
		<transition>
		  <keep-alive>
			<component :is="Component"></component>
		  </keep-alive>
		</transition>
	  </router-view>

  </div>
</template>
<script>
import ShopHeader from "../../components/ShopHeader/ShopHeader.vue";
import { useStore } from "vuex";
import { computed ,ref,reactive} from "vue";
export default {
  components: {
    ShopHeader
  },
  setup(props) {
    const store = useStore();
	store.dispatch("getShopInfo",() => {
	
	})

	const active =ref(false);
	
    return {active};
  },
};
</script>
<style lang="less">
.tab {
	
  width: 100%;
  height: 1.3rem;
  border-bottom: 1px solid rgba(26, 19, 19, 0.144);
  font-size: 17px;
  margin-bottom: .1rem;
	position: relative;
  .tab-item {
    width: 12rem;
    margin: 0.8rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .active {
	  color: #6fad47;
  }
//   .tabBottom {
//     position: absolute;
//     top: 1rem;
//     width: 1.36rem;
//     border: 1px solid #6fad47;
	
//   }
}
</style>
