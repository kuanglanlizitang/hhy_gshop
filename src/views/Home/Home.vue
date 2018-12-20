<template>
	<section class="msite">
		<!--首页头部-->
		<HeaderTop :title="address.name">
			<span class="header_search" slot="left">
				<i class="iconfont icon-sousuo"></i>
			</span>
			<span class="header_login"  slot="right">
				<span class="header_login_text">登录|注册</span>
			</span>
		</HeaderTop>
		<!--首页导航-->
		<nav class="msite_nav">
			<div class="swiper-container" v-if="tabSwiper.length>0">
				<div class="swiper-wrapper">
					<div class="swiper-slide"  v-for="(tabSwipers,index) in tabSwiperArr" :key="index">
						<a href="javascript:" class="link_to_food" v-for="(value_one,index) in tabSwipers" :key="index">
							<div class="food_container">
								<img :src="value_one.img">
							</div>
							<span>{{value_one.name}}</span>
						</a>
					</div>
				</div>
				<!-- Add Pagination -->
				<div class="swiper-pagination"></div>
			</div>
			<img v-else src="/static/images/shop/msite_back.svg">
		</nav>
		<!--首页附近商家-->
		<div class="msite_shop_list">
			<div class="shop_header">
				<i class="iconfont icon-option"></i>
				<span class="shop_header_title">附近商家</span>
			</div>
			<ShopList />
		</div>
	</section>
</template>

<script>
import {mapState} from 'vuex'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue';
import ShopList from '../../components/ShopList/ShopList.vue';

export default {
	computed:{
		...mapState(['address','tabSwiper']),
		// 根据tab_swiper生成二维数组
		// 小数组中的元素最多8个
		tabSwiperArr(){
			const {tabSwiper}=this
			const arr=[]
			let minArr=[]
			// 遍历tab_swiper
			for(let i=0;i<tabSwiper.length;i++){
				minArr.push(tabSwiper[i])
				if(minArr.length==8){
					arr.push(minArr)
					minArr=[]
				}
			}
			return arr
		}
	},
    mounted() {
		this.$store.dispatch('getTabSwiper')
    },
	methods:{
	},
    components: {
        HeaderTop,
		ShopList
    },
	watch:{
		tabSwiper(value){
			//界面更新就立即创建swiper对象
			this.$nextTick(()=>{//完成界面更新立即调用
				//创建一个swiper对象
				new Swiper('.swiper-container', {
					// direction: 'vertical', // 垂直切换选项
					autoplay: true,
					effect: 'slide',
					// loop: true, // 循环模式选项
					// 如果需要分页器
					pagination: {
						el: '.swiper-pagination'
					}
				})
			})
		}
	}
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import '../../common/stylus/mixins.styl'
	.msite  //首页
		width 100%
		.msite_nav
			bottom-border-1px(#e4e4e4)
			margin-top 45px
			height 200px
			background #fff
			.swiper-container
				width 100%
				height 100%
				.swiper-wrapper
					width 100%
					height 100%
					.swiper-slide
						display flex
						justify-content center
						align-items flex-start
						flex-wrap wrap
						.link_to_food
							width 25%
							.food_container
								display block
								width 100%
								text-align center
								padding-bottom 10px
								font-size 0
								img
									display inline-block
									width 50px
									height 50px
							span
								display block
								width 100%
								text-align center
								font-size 13px
								color #666
				.swiper-pagination
					>span.swiper-pagination-bullet-active
						background #02a774
		.msite_shop_list
			top-border-1px(#e4e4e4)
			margin-top 10px
			background #fff
			.shop_header
				padding 10px 10px 0
				.shop_icon
					margin-left 5px
					color #999
				.shop_header_title
					color #999
					font-size 14px
					line-height 20px
</style>
