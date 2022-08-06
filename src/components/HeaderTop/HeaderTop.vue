<template lang="">
	<div class="msite_header">
		<!-- <span class="header_search">
			<svg class="icon one" aria-hidden="true">
				<use xlink:href="#icon-sousuo"></use>
			</svg>
		</span> -->
		<slot name="left"></slot>
		<span class="header_title ellipsis ">
			{{title}}
		</span>

		<slot name="right"></slot>
		<!-- <span class="header_login">
			登录|注册
		</span> -->
	</div>
</template>
<script>
export default {
	name:'HeaderTop',
	props:{title:String},
	setup(props) {
		
	}
}
</script>
<style lang="less" >
	.msite_header{
		display:flex;
		justify-content: space-between;
		width: 15rem;
		height: 1.8rem;
		background-color: #02a774;
		font-size: .8rem;

		color: aliceblue;
		.icon{
			width: 1rem;
			height: 1rem;
			font-weight: 500;
			color: #fff;
			margin: .4rem .6rem;
		}
		.header_title {
			width: 7.48rem;
			line-height: 1.8rem;
			text-align: center;
			margin: 0 auto;
		}
		.header_login{
			display: block;
			width: 2.6rem;
			color: aliceblue;
			line-height: 1.8rem;
			font-size: .56rem;
		}
	}

</style>