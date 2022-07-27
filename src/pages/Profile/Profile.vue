<template lang="">
  <div class="profile">
    <!-- 个人中心头部 -->
    <div class="Profiler_header">
      <HeaderTop title="我的"> </HeaderTop>
    </div>
		<!-- 个人中心登录注册 -->
    <div class="Profile_header_link">
		<routerLink to="/Login" class="profile-link">
		<div class="profile_img">
			<svg class="icon one" aria-hidden="true">
			<use xlink:href="#icon-geren"></use>
			</svg>
		</div>
		<div class="user-info">
			<p class="user-info-top">登录/注册</p>
			<p class="user-icon">
			<span class="user-icon">
				<svg class="icon one" aria-hidden="true">
				<use xlink:href="#icon-shouji"></use>
				</svg>
			</span>
			<span class="icon-mobile-number">暂无绑定手机号</span>
			</p>
		</div>
		<span class="arrow">
				<svg class="icon one" aria-hidden="true">
						<use xlink:href="#icon-dayufuhao"></use>
				</svg>
		</span>
		</routerLink>
	</div>
  </div>
</template>
<script>
export default {};
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
}
</style>
