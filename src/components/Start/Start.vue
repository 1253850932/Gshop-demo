<template lang="">
  <div class="star star-24">
    <span
      v-for="(item, index) in starClasses"
      :key="index"
      class="star-item"
      :class="item"
    ></span>
    <!-- <span class="start_item on"</span> -->
    <!-- <span class="start_item on"</span>
			<span class="start_item on"</span>
			<span class="start_item half"</span>
			<span class="start_item off"</span> -->
  </div>
</template>
<script>
import { computed } from "vue";
export default {
  name: "Start",
  props: {
    score: Number,
    size: Number,
  },
  setup(props) {
    const starClasses = computed(() => {
      const BASE_ON = "on";
      const BASE_HALF = "half";
      const BASE_OFF = "off";
      const scs = [];
      const score = props.score;

      // 向scs数组中添加n个 ‘on’标签
      const scoreInteger = Math.floor(score);
      for (let i = 0; i < scoreInteger; i++) {
        scs.push(BASE_ON);
      }
      // 向scs数组中添加0或1个‘half’标签
      if (score * 10 - scoreInteger * 10 > 5) {
        scs.push(BASE_HALF);
      }
	  // 向scs数组中添加 n个‘off’标签
      while (scs.length < 5) {
        scs.push(BASE_OFF);
      }
      return scs;
    });
    return { starClasses };
  },
};
</script>
<style lang="less">

            .star {
              float: left;
              height: 0.64rem;

              .star-item {
                display: inline-block;
                width: 0.4rem;
                height: 0.4rem;
                margin-right: 0.12rem;
                background-size: 0.4rem 0.4rem;
              }
			  .on{
				  background-image: url(./image/star24_on@2x.png);
			  }
			  .half{
				  background-image: url(./image/star24_half@2x.png);
			  }
			  .off{
				  background-image: url(./image/star24_off@2x.png);
			  }
            }

</style>
