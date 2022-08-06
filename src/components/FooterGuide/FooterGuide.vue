<template lang="">
  <div class="footerContainer">
	  
		  <router-link to="/" active-class="active">
			  <svg class="icon one" aria-hidden="true">
				  <use xlink:href="#icon-waimai"></use>
				</svg>
				<span>外卖</span>
			</router-link>
    <routerLink to="/search" active-class="active">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo1"></use>
      </svg>
      <span>搜索</span>
    </routerLink>
    <routerLink to="/order" active-class="active">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-dingdan"></use>
      </svg>
      <span>订单</span>
    </routerLink>
    <routerLink to="/profile" active-class="active">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-31wode"></use>
      </svg>
      <span>我的</span>
    </routerLink>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
.footerContainer {
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  width: 15rem;
  height: 1.7rem;
  background-color: #ffffff;

  justify-content: space-evenly;
  align-items: flex-end;
  border-top: 1px solid #bfc9c9;
  .icon {
    width: 1rem;
    height: 1rem;
    color: #94a0a0;
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      display: block;
      font-size: 0.4rem;
      margin-top: 0.1rem;
    }
  }
}

.active {
  .icon {
    transform: scale(1.1);
    transform: translateY(-0.2rem);
    color: #087f65;
  }
  span {
    transform: scale(1.1);
    transform: translateY(-0.2rem);

    color: #087f65;
  }
}
</style>
