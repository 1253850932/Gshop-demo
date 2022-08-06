<template lang="">
  <div>
    <!-- 商家列表 -->
    <ul class="shop_list">
      <li
        class="shop_item"
        v-for="(item, index) in shops"
        :key="index"
        v-if="shops.length"
		@click="$router.push('/shop')"
      >
        <a class="shop_item_detail">
          <!-- 商家图片 -->
          <div class="shop_left">
            <img :src="baseImgUrl + item.image_path" alt="" />
          </div>
          <div class="shop_content">
            <!-- 商家店名 -->
            <div class="shop_detail_header">
              <h4 class="shop_title ellipsis">{{ item.name }}</h4>
              <div
                class="shop_right"
                v-for="(i, index) in item.supports"
                :key="index"
              >
                <span class="supports">{{ i.icon_name }}</span>
              </div>
            </div>
            <!-- 商家评级 -->
            <div class="shop_rating_order">
              <div class="shop_rating_order_left">
                <div class="star star-24">
					<Start :score="item.rating" :size="24"></Start>
                </div>
                <div class="rating_section">{{ item.rating }}</div>
                <div class="order_section">
                  月售{{ item.recent_order_num }}单
                </div>
              </div>
              <div class="shop_rating_order_right">
                <span class="delivery_style delivery_right"> 外卖专送 </span>
              </div>
            </div>
            <!-- 价格起送 -->
            <div class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥{{ item.float_minimum_order_amount }}起送</span>
                <span class="segmentation">/</span>
                <span>{{ item.piecewise_agent_fee.tips }}</span>
              </p>
            </div>
          </div>
        </a>
      </li>
      <ul v-for="item in 6" v-else>
        <li><img src="./image/shop_back.svg" alt="" /></li>
      </ul>
    </ul>
  </div>
</template>
<script>
import Start from "../../components/Start/Start.vue";

import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
	components:{Start},
  setup(props) {
    const baseImgUrl = ref("http://cangdu.org:8001/img/");
    const store = useStore();
    store.dispatch("getShops");
    const shops = computed(() => store.state.shops);
    return { shops, baseImgUrl };
  },
};
</script>
<style lang="less">
.shop_list {
  margin-top: 0.2rem;
  width: 100%;
  height: 4.2rem;
  .shop_item {
    height: 4.2rem;

    .shop_item_detail {
      display: flex;
      img {
        width: 2.88rem;
        height: 3rem;
      }
      .shop_content {
        width: 11.04rem;
        height: 2.84rem;
        margin-left: 0.5rem;
        .shop_detail_header {
          width: 11.04rem;
          height: 0.712rem;
          .shop_title {
            float: left;
            width: 5.6rem;
            color: #333;
            font-size: 0.64rem;
            line-height: 0.64rem;
            font-weight: 700;
            &::before {
              content: "品牌";
              display: inline-block;
              font-size: 0.44rem;
              line-height: 0.44rem;
              color: rgb(51, 51, 51);
              background-color: rgb(255, 217, 48);
              margin-right: 0.2rem;
              padding: 0.08rem;
              border-radius: 0.08rem;
            }
          }
          .supports {
            float: right;
            font-size: 0.4rem;
            color: #999;
            border: 1px solid #f1f1f1;
            padding: 0 0.08rem;
            border-radius: 0.08rem;
          }
        }
        .shop_rating_order {
          height: 0.64rem;
          margin-top: 0.5rem;
          .shop_rating_order_left {
           
            .rating_section {
              margin-top: 0.5rem;
              float: left;
              display: block;
              color: #ff9a0d;
              font-size: 0.48rem;
            }
            .order_section {
              float: left;
              margin-top: 0.5rem;

              font-size: 0.4rem;
              color: #666;
              transform: scale(0.8);
            }
          }
          .shop_rating_order_right {
            float: right;
            color: #02a774;
            border: 1px solid #02a774;
            transform-origin: 35px 0;
            transform: scale(0.7);
            display: block;
            font-size: 0.48rem;
            padding: 0.04rem;
            border-radius: 0.08rem;
          }
        }
        .shop_distance {
          margin-top: 0.8rem;
          font-size: 0.48rem;
          .shop_delivery_msg {
            vertical-align: middle;
            transform-origin: 0;
            transform: scale(0.9);
            color: #666;
            .segmentation {
              color: #ccc;
              padding: 0 0.2rem;
            }
          }
        }
      }
    }
  }
}
</style>
