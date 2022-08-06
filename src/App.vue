<template lang="">
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter" />
  </div>
</template>
<script>
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
import { mapActions, useStore, mapState } from "vuex";
import { reactive, computed, onMounted } from "vue";

export default {
  components: { FooterGuide },
  setup(props) {
    

  },
};
</script>
<style lang="less">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
#app {
  background-color: #f5f5f5;
  height: 100%;
  width: 15rem;
}
</style>
