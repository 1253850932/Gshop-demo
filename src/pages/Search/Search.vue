<template lang="">
  <div class="search">
    <!-- 搜索头部 -->
    <div class="Search_header">
      <HeaderTop title="搜索"> </HeaderTop>
    </div>
    <!-- 搜索 -->
    <form class="search_form" action="">
      <input
        type="search"
        placeholder="请输入商家或美食名称"
        class="search_input"
      />
      <input type="submit" name="submit" class="search_submit" />
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
.search {
  width: 100%;
  .search_form {
    width: 100%;
    height: 2.36rem;
    background-color: #fff;
    .search_input {
      margin-top: 0.5rem;
      margin-left: 0.3rem;
      float: left;
      width: 11.32rem;
      border: 4px solid #f2f2f2;
      font-size: 14px;
      color: #333;
      background-color: #f2f2f2;
      height: 35px;
      padding: 0 .16rem;
      border-radius: .08rem;
      font-weight: bold;
      outline: none;
    }
    .search_submit {
      margin-top: 0.5rem;
      margin-right: 0.3rem;

      float: right;
      width: 2.6rem;
      border: 4px solid #02a774;
      font-size: 16px;
      color: #fff;
      background-color: #02a774;
      height: 1.4rem;
      padding: 0 4px;
      border-radius: .08rem;
      font-weight: bold;
      outline: none;
    }
  }
}
</style>
