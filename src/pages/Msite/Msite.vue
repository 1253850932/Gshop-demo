<template lang="">
  <!-- 首页外卖 -->
  <div class="content">
    <!-- 首页头部 -->
    <div class="msite_header">
      <HeaderTop title="昌平区北七家宏福科技园(337省道北)">
			<template v-slot:left>
				<span class="header_search">
					<svg class="icon one" aria-hidden="true">
						<use xlink:href="#icon-sousuo"></use>
					</svg>
				</span>	
			</template>
			<template v-slot:right>
				<span class="header_login">
					登录|注册
				</span> 
			</template>

	  </HeaderTop>
    </div>
    <!-- 首页导航 -->
    <!-- Swiper -->
    <div class="swiper mySwiper">
		<div class="swiper-wrapper">
		  <div class="swiper-slide"> 
			  <a href="">
				<img class="item" src="./img/nav/1.jpg" alt="">
				<span>甜品饮品</span>
			  </a>
			   <a href="">
				<img class="item" src="./img/nav/1.jpg" alt="">
				<span>甜品饮品</span>
			  </a>
		  </div>

	  <div class="swiper-slide"> 
			  <a href="">
				<img class="item" src="./img/nav/1.jpg" alt="">
				<span>甜品饮品</span>
			  </a>
			   <a href="">
				<img class="item" src="./img/nav/1.jpg" alt="">
				<span>甜品饮品</span>
			  </a>
		  </div>

		  	  <div class="swiper-slide"> 
			  <a href="">
				<img class="item" src="./img/nav/1.jpg" alt="">
				<span>甜品饮品</span>
			  </a>
			   <a href="">
				<img class="item" src="./img/nav/1.jpg" alt="">
				<span>甜品饮品</span>
			  </a>
		  </div>
		 	  	  <div class="swiper-slide"> 
			  <a href="">
				<img class="item" src="./img/nav/1.jpg" alt="">
				<span>甜品饮品</span>
			  </a>
			   <a href="">
				<img class="item" src="./img/nav/1.jpg" alt="">
				<span>甜品饮品</span>
			  </a>
		  </div>

		  	 	  	  <div class="swiper-slide"> 
			  <a href="">
				<img class="item" src="./img/nav/1.jpg" alt="">
				<span>甜品饮品</span>
			  </a>
			   <a href="">
				<img class="item" src="./img/nav/1.jpg" alt="">
				<span>甜品饮品</span>
			  </a>
		  </div>
		  
		  
		</div>
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
import { ref, onMounted, onBeforeUpdate } from "vue";

export default {
  components: { HeaderTop ,ShopList},
  mounted() {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      slidesPerColumn: 2,
      slidesPerColumnFill: "row",

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
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
	
	  a{
		  margin-top: .5rem;
		  display: flex;
		  flex-direction: column;
		  align-items: center;
		  img{
			  height: 2rem;
			  width: 2rem;
		  }
		  span{
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
