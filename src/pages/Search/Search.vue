<template>
  <section class="search">
     <HeaderTop title="搜索"> </HeaderTop>
    <form class="search_form">
      <input type="search" placeholder="请输入商家名称" class="search_input" v-model="keyword" />
      <input type="submit" class="search_submit" @click.prevent="search"/>
    </form>
    <section class="list">
      <ul class="list_container">
        <li class="list_li">
          <section class="item_left">
            <img
              src="http://cangdu.org:8001/img/16265a70fe27854.jpg"
              class="restaurant_img"
            />
          </section>
          <section class="item_right">
            <div class="item_right_text">
              <p>
                <span>aaa</span>
              </p>
              <p>月售 671 单</p>
              <p>20 元起送 / 距离 1058.2 公里</p>
            </div>
          </section>
        </li>
        <li class="list_li">
          <section class="item_left">
            <img
              src="http://cangdu.org:8001/img/16265a70fe27854.jpg"
              class="restaurant_img"
            />
          </section>
          <section class="item_right">
            <div class="item_right_text">
              <p>
                <span>aaa</span>
              </p>
              <p>月售 671 单</p>
              <p>20 元起送 / 距离 1058.2 公里</p>
            </div>
          </section>
        </li>
      </ul>
    </section>
  </section>
</template>
<script>
import {computed, ref} from 'vue'
import {useStore} from 'vuex'
import {HeaderTop} from '../../components/HeaderTop/HeaderTop.vue'
export default {
	components: { HeaderTop},
	setup(){
		let keyword = ref()
		const store = useStore()
		const searchShops = computed(()=>store.state.searchShops)
		const search = () => {
			 keyword =keyword.value.trim()
			if(keyword){
				store.dispatch('searchShops',keyword)
			console.log(store.state.searchShops);
			}
		}
		return {keyword,search}
	}
};
</script>
<style lang="less">
.search {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .search_form {
    background-color: #fff;
    padding: 12px 8px;
    input {
      height: 35px;
      padding: 0 4px;
      border-radius: 2px;
      font-weight: bold;
      outline: none;
      &.search_input {
        float: left;
        width: 79%;
        border: 4px solid #f2f2f2;
        font-size: 14px;
        color: #333;
        background-color: #f2f2f2;
      }
      &.search_submit {
        float: right;
        width: 18%;
        border: 4px solid #02a774;
        font-size: 16px;
        color: #fff;
        background-color: #02a774;
      }
    }
  }
  .list {
    .list_container {
      background-color: #fff;
      .list_li {
        display: flex;
        justify-content: center;
        padding: 10px;
        border-bottom: 1px solid;
        .item_left {
          margin-right: 10px;
          .restaurant_img {
            width: 50px;
            height: 50px;
            display: block;
          }
        }
          .item_right {
            font-size: 12px;
            flex: 1;
            .item_right_text {
              p {
                line-height: 12px;
                margin-bottom: 6px;
                &:last-child {
                  margin-bottom: 0;
                }
              }
            }
          }
      }
    }
  }
  .search_none {
    margin: 0 auto;
    color: #333;
    background-color: #fff;
    text-align: center;
    margin-top: 0.125rem;
  }
}
</style>
