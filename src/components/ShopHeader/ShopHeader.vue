<template lang="">
  <div class="shop-header">
    <!-- 后退按钮 -->
    <nav class="shop-nav" :style="{ backgroundImage: `url(${info.bgImg})` }">
      <a href="" class="back" @click="$router.back()">
        <svg class="icon one" aria-hidden="true">
          <use xlink:href="#icon-dayufuhao"></use>
        </svg>
      </a>
    </nav>
    <!-- 商家介绍 -->
    <div class="shop-content">
      <div class="shop-img">
        <img class="content-image" :src="info.avatar" alt="" />
      </div>
      <div class="header-content">
        <h2 class="content-title">
          <a @click="show = true">
            <span class="content-tag">
              <span class="mini-tag">品牌</span>
            </span>
            <span class="content-name">{{ info.name }}</span>
            <svg class="icon one" aria-hidden="true">
              <use xlink:href="#icon-yousanjiaoxing"></use>
            </svg>
          </a>
        </h2>
        <div class="shop-message">
          <span class="shop-message-detail">{{ info.score }}</span>
          <span class="shop-message-detail">月售{{ info.sellCount }}单</span>
          <span class="shop-message-detail"
            >外卖专送
            <span>约{{ info.deliveryTime }}分钟</span>
          </span>
          <span class="shop-message-detail">距离{{ info.distance }}</span>
        </div>
      </div>
    </div>
    <div class="shop-header-discounts" v-if="info.supports">
      <div class="discounts-left">
        <div class="activity activity-green">
          <span class="content-tag">
            <span class="mini-tag">{{ info.supports[0].name }}</span>
          </span>
          <span class="activity-content ellipsis">{{
            info.supports[0].content
          }}</span>
        </div>
      </div>
      <div class="discounts-right">
        <a @click="show2 = true">
          {{ info.supports.length }}个优惠
          <svg class="icon one" aria-hidden="true">
            <use xlink:href="#icon-yousanjiaoxing"></use>
          </svg>
        </a>
      </div>
    </div>

    <transition name="fade">
      <!-- 商家详情介绍 -->
      <div class="shop-brief-modal" v-if="show">
        <div class="brief-modal-content">
          <h2 class="content-title">
            <span class="content-name">{{ info.name }}</span>
          </h2>
          <ul class="brief-modal-msg">
            <li>
              <h3>{{ info.score }}</h3>
              <p>评分</p>
            </li>
            <li>
              <h3>{{ info.sellCount }}单</h3>
              <p>月售</p>
            </li>
            <li>
              <h3>外卖专送</h3>
              <p>约 {{ info.deliverTime }} 分钟</p>
            </li>
            <li>
              <h3>{{ info.deliveryPrice }} 元</h3>
              <p>配送费用</p>
            </li>
            <li>
              <h3>{{ info.distance }}</h3>
              <p>距离</p>
            </li>
          </ul>
          <h3 class="brief-modal-title"><span>公告</span></h3>
          <div class="brief-modal-notice">
            {{ info.bulletin }}
          </div>
          <div class="mask-footer" @click="show = !show">
            <svg class="icon one" aria-hidden="true">
              <use xlink:href="#icon-guanbi2"></use>
            </svg>
          </div>
        </div>
        <div class="brief-modal-cover" @click="show = false" ></div>
      </div>
    </transition>
    <transition name="fade">
      <!-- 优惠活动介绍 -->
      <div class="activity-sheet" style="" v-if="show2">
        <div class="activity-sheet-content">
          <h2 class="activity-sheet-title">优惠活动</h2>
          <ul class="list">
            <li
              class="activity-item"
              v-for="(item, index) in info.supports"
              :key="index"
              :class="supportClasses[item.type]"
            >
              <span class="content-tag">
                <span class="mini-tag">{{ item.name }}</span>
              </span>
              <span class="activity-content">{{ item.content }}</span>
            </li>
          </ul>
        </div>
        <div class="activity-sheet-close">
          <a @click="show2 = !show2">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-guanbi"></use>
            </svg>
          </a>
        </div>
        <div class="activity-sheet-cover" @click="show2= false"></div>
      </div>
    </transition>
  </div>
</template>
<script>
import { ref, computed, reactive } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const show = ref(false);
    const show2 = ref(false);
    const store = useStore();
    const info = computed(() => store.state.info);
    const supportClasses = reactive([
      "activity-green",
      "activity-red",
      "activity-orange",
    ]);

    return { show, show2, info, supportClasses };
  },
};
</script>
<style lang="less" scoped>
.shop-header {
  width: 15rem;
  height: 6rem;
  .shop-nav {
	width: 15rem;
    height: 1.7rem;
    background-color: aqua;
    display: flex;
    align-items: center;
    .icon {
      transform: rotate(180deg);
    }
  }
  .shop-content {
	width: 15rem;
    height: 3.5rem;
    .shop-img {
      position: relative;
      margin: 0 auto;
      width: 2.4rem;
      height: 2.4rem;
      .content-image {
        position: absolute;
        width: 2.4rem;
        height: 2.4rem;
        top: -1.4rem;
      }
    }
    .header-content {
      .content-title {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -1rem;
        .content-tag {
          margin-top: -0.5rem;
          margin-right: 0.5rem;
          .mini-tag {
            background-color: #fbd81e;
            font-size: 13px;
            font-weight: 800;
          }
        }
        .content-name {
          font-weight: 600;
          font-size: 24px;
          margin-right: 0.2rem;
        }
        .icon {
          vertical-align: middle;
          margin-right: 0.3rem;
          font-size: 15px;
        }
      }
      .shop-message {
        display: flex;
        justify-content: center;
        margin-top: 0.5rem;
        font-size: 0.5rem;
        .shop-message-detail {
          margin-right: 0.4rem;
        }
      }
    }
  }
  .shop-header-discounts {
    display: flex;
    justify-content: space-between;
    width: 12rem;
    margin: 0.2rem auto;
    font-size: 13px;
    .discounts-left {
      .activity-green {
        display: flex;
        justify-content: space-between;
        .content-tag {
          .mini-tag {
            background-color: #6fad47;
            color: #fff;
            font-weight: 900;
            margin-right: 0.5rem;
          }
        }
      }
    }
    .discounts-right {
      .icon {
        transform: rotate(90deg);
      }
    }
  }
  .shop-brief-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 52;
    flex-direction: column;

    .brief-modal-cover {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }
    .brief-modal-content {
      position: relative;
      width: 80%;
      padding: 25px 20px;
      border-radius: 5px;
      background: #fff;
      z-index: 99;
      display: flex;
      flex-direction: column;
      .content-title {
        font-size: 20px;
        line-height: 24px;
        font-weight: 700;
        white-space: nowrap;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          font-weight: 600;
          .content-tag {
            border-radius: 2px;
            background-image: linear-gradient(90deg, #fff100, #ffe339);
            width: 36px;
            height: 18px;
            margin-right: 10px;
            color: #6a3709;
            font-style: normal;
            position: relative;
            .mini-tag {
              position: absolute;
              left: 0;
              top: 0;
              right: -100%;
              bottom: -100%;
              font-size: 24px;
              transform: scale(0.5);
              transform-origin: 0 0;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        }
      }
      .brief-modal-msg {
        display: flex;
        margin: 20px -10px 0;
        li {
          flex: 1;
          text-align: center;
          h3 {
            font-size: 15px;
            font-weight: 600;
            color: #333;
            margin-bottom: 0.32rem;
          }
          p {
            font-size: 12px;
            color: #999;
          }
        }
      }
      .brief-modal-title {
        position: relative;
        text-align: center;
        margin: 15px auto 15px;
        width: 85px;
        background-image: linear-gradient(90deg, #fff, #333 50%, #fff);
        background-size: 100% 1px;
        background-position: 50%;
        background-repeat: no-repeat;
        span {
          font-size: 12px;
          padding: 0 0.24rem;
          color: #999;
          background-color: #fff;
        }
      }
      .brief-modal-notice {
        font-size: 13px;
        line-height: 1.54;
        color: #333;
        overflow-y: auto;
      }
      .mask-footer {
        position: absolute;
        bottom: -2.4rem;
        left: 50%;
        padding: 6px;
        font-size: 30px;
        transform: translateX(-50%);
        span {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.7);
        }
      }
    }
  }
  .activity-sheet {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    .activity-sheet-content {
      position: absolute;
      background-color: #f5f5f5;
      box-shadow: 0 -1px 5px 0 rgba(0, 0, 0, 0.4);
      bottom: 0;
      left: 0;
      right: 0;

      z-index: 100;
      padding: 1rem 1.2rem;
      box-sizing: border-box;
      transition: transform(0.2s);
      will-change: transform;
      color: #333;
      .activity-sheet-title {
        text-align: center;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 0.8rem;
      }
      .list {
        font-size: 16px;

        height: 6.4rem;
        overflow-y: auto;
        .activity-item {
          margin-bottom: 0.5rem;
          width: 12rem;

          display: flex;
          font-size: 13px;
          align-items: center;
          &.activity-green .content-tag {
            background-color: rgb(112, 188, 70);
          }

          &.activity-red .content-tag {
            background-color: rgb(240, 115, 115);
          }
          &.activity-orange .content-tag {
            background-color: rgb(241, 136, 79);
          }

          .content-tag {
            margin-right: 0.5rem;
          }
          .activity-content {
            width: 10rem;
          }
        }
      }
    }
    .activity-sheet-close {
      display: block;
      width: 1rem;
      height: 1rem;
      position: fixed;
      z-index: 999;
      bottom: 8.4rem;
      right: 0;
      .icon {
        width: 20px;
        height: 20px;
        color: red;
      }
    }
    .activity-sheet-cover {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
}
.activity-content {
  display: block;
  width: 6.5rem;
}
a {
  text-decoration: none;
  color: black;
}
&.fade-enter-from,
&.fade-leave-to {
  opacity: 0;
}
&.fade-enter-active,
&.fade-leave-active {
  transition: all .7s ease;
}
&.fade-enter-to {
  opacity: 1;
}
</style>
