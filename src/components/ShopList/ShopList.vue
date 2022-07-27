<template lang="">
	<div>
		<!-- 商家列表 -->
		<ul class="shop_list">
			<li class="shop_item">
				<a class="shop_item_detail">
					<!-- 商家图片 -->
					<div class="shop_left"><img src="../../assets/shop/1.jpg" alt=""></div>
					<div class="shop_content">
						<!-- 商家店名 -->
						<div class="shop_detail_header">
							<h4 class="shop_title ellipsis">锄禾日当午11111</h4>
							<div class="shop_right">
								<span class="supports">保</span>
								<span class="supports">准</span>
								<span class="supports">送</span>
							</div>
						</div>
						<!-- 商家评级 -->
						<div class="shop_rating_order">
							<div class="shop_rating_order_left">
								<div class="star star-24">
									<span class="star-item"></span>
									<span class="star-item on"></span>
									<span class="star-item on"></span>
									<span class="star-item on"></span>
									<span class="star-item on"></span>
								</div>
								<div class="rating_section">3.6</div>
								<div class="order_section">月售106单</div>
							</div>
							<div class="shop_rating_order_right">
								<span class="delivery_style delivery_right">
									外卖专送
								</span>
							</div>
						</div>
						<!-- 价格起送 -->
						<div class="shop_distance">
							<p class="shop_delivery_msg">
								<span>¥20起送</span>
								<span class="segmentation">/</span>
								<span>配送费约¥5</span>
							</p>
						</div>
					</div>
				</a>
			</li>			
		</ul>
	</div>
</template>
<script>
export default {
	
}
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
              .star {
                float: left;
                height: 0.64rem;

                .star-item {
                  display: inline-block;
                  background-image: url(../../assets/stars/star24_on@2x.png);
                  width: 0.4rem;
                  height: 0.4rem;
                  margin-right: 0.12rem;
                  background-size: 0.4rem 0.4rem;
                }
              }
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