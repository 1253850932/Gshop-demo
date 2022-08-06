<template lang="">
  <div class="profile">
    <!-- 个人中心头部 -->
    <div class="Profiler_header">
      <HeaderTop title="我的"> </HeaderTop>
    </div>
    <!-- 个人中心登录注册 -->
    <div class="Profile_header_link">
      <routerLink
        :to="userInfo._id ? '/userinfo' : '/Login'"
        class="profile-link"
      >
        <div class="profile_img">
          <svg class="icon one" aria-hidden="true">
            <use xlink:href="#icon-geren"></use>
          </svg>
        </div>
        <div class="user-info">
          <p class="user-info-top" v-if="!userInfo.phone">
            {{ userInfo.name || "登录/注册" }}
          </p>
          <p class="user-icon" :class="{ phone: userInfo.phone }">
            <span class="user-icon">
              <svg class="icon one" aria-hidden="true">
                <use xlink:href="#icon-shouji"></use>
              </svg>
            </span>
            <span class="icon-mobile-number">{{
              userInfo.phone || "暂无绑定手机号"
            }}</span>
          </p>
        </div>
        <span class="arrow">
          <svg class="icon one" aria-hidden="true">
            <use xlink:href="#icon-dayufuhao"></use>
          </svg>
        </span>
      </routerLink>
    </div>
    <!-- 个人中心信息 -->
    <div class="profile_info_data">
      <ul class="info_data_list">
        <a href="" class="info_data_link">
          <span class="info_data_top"><span class="yue">0.00</span>元</span>
          <span class="info_data_bottom">我的余额</span>
        </a>
        <a href="" class="info_data_link">
          <span class="info_data_top"><span class="youhui">0</span>个</span>
          <span class="info_data_bottom">我的优惠</span>
        </a>
        <a href="" class="info_data_link">
          <span class="info_data_top"><span class="jifen">0</span>分</span>
          <span class="info_data_bottom">我的积分</span>
        </a>
      </ul>
    </div>
    <!-- 个人中心按钮容器 -->
    <div class="profile_my_order">
      <!-- 我的订单 -->
      <div class="my_order">
        <svg class="icon one" aria-hidden="true">
          <use xlink:href="#icon-dingdan1"></use>
        </svg>
        <div class="my_order_div">
          <span>我的订单</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-dayufuhao"></use>
          </svg>
        </div>
      </div>
      <!-- 积分商城 -->
      <div class="my_order">
        <svg class="icon two" aria-hidden="true">
          <use xlink:href="#icon-jifenshangcheng"></use>
        </svg>
        <div class="my_order_div">
          <span>积分商城</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-dayufuhao"></use>
          </svg>
        </div>
      </div>
      <!-- 外卖会员卡 -->
      <div class="my_order">
        <svg class="icon three" aria-hidden="true">
          <use xlink:href="#icon-31huiyuan"></use>
        </svg>
        <div class="my_order_div">
          <span>外卖会员卡</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-dayufuhao"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="profile_my_order">
      <!-- 服务中心 -->
      <div class="my_order">
        <svg class="icon one" aria-hidden="true">
          <use xlink:href="#icon-a-3yewufuwuzhongxin"></use>
        </svg>
        <div class="my_order_div">
          <span>外卖会员卡</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-dayufuhao"></use>
          </svg>
        </div>
      </div>
    </div>
    <!-- 退出 -->
    <el-button class="dialog" @click="dialogVisible = true" v-if="Code">
      <span>退出</span>
    </el-button>

    <el-dialog
      v-model="dialogVisible"
      title="Tips"
      width="12.8rem"
    >
      <span>确认退出吗</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button  @click="dialogVisible = false">取消</el-button>
          <el-button type="danger" @click="loginOut"
            >确认</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed, ref, reactive } from "vue";
import { ElButton, ElDialog, ElMessageBox } from "element-plus";
export default {
  components: {
    components: { ElButton, ElDialog },
  },
  setup(props) {
    const store = useStore();
    const userInfo = computed(() => store.state.userInfo);
	const Code = computed(() => store.state.Code);
    const dialogVisible = ref(false);
    const loginOut = () => {
		store.dispatch('LoginOut')
		dialogVisible.value= false
		store.commit('ChangeCode',false)
    };
    return { userInfo, loginOut, dialogVisible,Code };
  },
};
</script>
<style lang="less">
.profile {
  width: 100%;
  .Profile_header_link {
    width: 15rem;
    height: 4rem;
    background-color: #02a774;
    border-top: 1px solid #fff;
    .profile-link {
      display: flex;
      color: #fff;
      align-items: center;
      width: 15rem;
      padding-top: 0.5rem;
      .profile_img {
        flex: 1;
        margin-left: 0.5rem;
        .icon {
          width: 2.48rem;
          height: 2.48rem;
        }
      }
      .user-info {
        flex: 3;
        padding-top: 12.5px;
        .user-info-top {
          font-weight: 700;
          font-size: 18px;
          color: #fff;
        }
        .phone {
          margin-top: -1.25rem;
        }
        .user-icon {
          vertical-align: middle;
          .icon {
            width: 0.9rem;
            height: 2rem;
          }
          font-size: 14px;
          color: #fff;
        }
      }
      .arrow {
        flex: 1;

        margin-right: -50px;
        width: 0.48rem;
        height: 0.48rem;
        font-size: 20px;
      }
    }
  }
  .profile_info_data {
    width: 100%;
    height: 3.24rem;
    background-color: #fff;
    .info_data_list {
      display: flex;
      justify-content: space-evenly;

      .info_data_link {
        height: 3.24rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .info_data_top {
          font-size: 14px;

          span {
            font-size: 30px;
            font-weight: 700;
          }
          .yue {
            color: #f90;
          }
          .youhui {
            color: #ff5f3e;
          }
          .jifen {
            color: #6ac20b;
          }
        }
        .info_data_bottom {
          font-size: 14px;
          margin-top: 0.32rem;
        }
      }
    }
  }
  .profile_my_order {
    display: inline-block;
    width: 100%;
    height: 2.12rem;
    margin-top: 0.5rem;
    .my_order {
      display: flex;
      height: 2.12rem;
      margin-bottom: 0.09rem;
      background-color: #fff;
      .one {
        color: #02a774;
      }
      .two {
        color: #ff5f3e;
      }
      .three {
        color: #f90;
      }

      .icon {
        display: block;
        width: 1rem;
        height: 2.12rem;
        margin-left: 1rem;
        line-height: 2.12rem;
      }
      .my_order_div {
        width: 13.6rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          display: block;
          margin-left: 0.5rem;
          width: 4rem;
          height: 2.12rem;
          font-size: 16px;
          line-height: 2.12rem;
        }
        .icon {
          margin-right: 0.5rem;
          width: 0.48rem;
          height: 0.48rem;

          color: #bbb;
        }
      }
    }
  }
  .dialog {
    display: inline-block;
    margin-top: 1rem;
    width: 100%;
    height: 2rem;
    background-color: #ff5f3e;
    text-align: center;

    border: none;
    span {
      font-size: 20px;
      color: #fff;
      width: 100%;
    }
  }
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
}
</style>
