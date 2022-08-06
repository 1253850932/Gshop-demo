<template lang="">
  <!-- 首页外卖 -->
  <div class="content">
    <!-- 首页头部 -->

    <div class="msite_header">
      <HeaderTop :title="address.name">
        <template v-slot:left>
          <span class="header_search">
            <svg class="icon one" aria-hidden="true">
              <use xlink:href="#icon-sousuo"></use>
            </svg>
          </span>
        </template>
        <template v-slot:right>
          <routerLink  :to="userInfo._id ? '/userinfo': '/login'" >
			   <div class="header_login" v-if="!userInfo._id"> 登录|注册 </div>
			   <div class="header_login" v-else> 
						<svg class="icon one" aria-hidden="true">
							<use xlink:href="#icon-31wode"></use>
						</svg>
				    </div>
			</routerLink>
        </template>
      </HeaderTop>
    </div>
    <!-- 首页导航 -->

    <!-- Swiper -->
    <div class="swiper mySwiper">
      <div class="swiper-wrapper" v-if="categoryArr.length">
        <div
          class="swiper-slide"
          v-for="(categorys, index) in categoryArr"
          :key="index"
        >
          <a href="" v-for="(item, index) in categorys" :key="index">
            <img class="item" :src="base_url + item.image_url" alt="" />
            <span> {{ item.title }}</span>
          </a>
        </div>
      </div>
      <img src="./img/msite_back.svg" alt="" v-else />
      <div class="swiper-pagination"></div>
    </div>

    <!-- 首页附近商家 -->
    <div class="msite_shop_list">
      <div class="shop_header">
        <span class="header_search">
          <svg class="icon one" aria-hidden="true">
            <use xlink:href="#icon-liebiao"></use>
          </svg>
        </span>
        <span>附近商家</span>
      </div>
      <ShopList></ShopList>
    </div>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
import ShopList from "../../components/ShopList/ShopList.vue";
import {
  ref,
  onMounted,
  onBeforeUpdate,
  computed,
  reactive,
  onUpdated,
  beforeDestroy,
  onBeforeMount,
  nextTick,
  watchEffect,
} from "vue";
import {useStore } from "vuex";

export default {
  components: { HeaderTop, ShopList },
  setup(props) {
    const base_url = "https://fuss10.elemecdn.com";
    const store = useStore();
	const userInfo = computed(()=>store.state.userInfo)

    //  异步获取Address
    store.dispatch("getAddress");
    // 获取vuex中state的address属性
    const address = computed(() => store.state.address);

    //  异步获取Categorys
    store.dispatch("getCategorys",() => {
		nextTick(() => {
      new Swiper(".mySwiper", {
        slidesPerView: 4,
        slidesPerColumn: 2,
        slidesPerColumnFill: "row",
	
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    });
	});
    // 将一维数组categorys 分解成二维数组
    const categoryArr = computed({
      get() {
        var num = 2; //每个⼦数组⾥的元素个数
        var arr = store.state.categorys;
        var Arr = new Array(Math.ceil(arr.length / num));
        for (var i = 0; i < Arr.length; i++) {
          Arr[i] = new Array();
          for (var j = 0; j < num; j++) {
            Arr[i][j] = "";
          }
        }
        for (var i = 0; i < arr.length; i++) {
          Arr[parseInt(i / num)][i % num] = arr[i];
        }
        return Arr;
      },
    });
  

    return { address, base_url, categoryArr,userInfo };
  },
};
</script>
<style lang="less">
.swiper {
  height: 8rem;
  width: 15rem;
  background-color: #ffffff;
  .swiper-wrapper {
    .swiper-slide {
      a {
        margin-top: 0.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          height: 2rem;
          width: 2rem;
        }
        span {
          display: block;
          width: 100%;
          text-align: center;
          font-size: 13px;
          color: #666;
        }
      }
    }
  }
}

.msite_shop_list {
  margin-top: 0.2rem;
  width: 100%;
  background-color: #fff;
  height: 20rem;
  .shop_header {
    span {
      width: 0.56rem;
      height: 0.56rem;
    }
    span {
      font-size: 0.56rem;
    }
  }
}
</style>
