<template>
  <icon-wrapper :spin="spin" :rotate="rotate">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      version="1.1"
      :width="size"
      :height="size"
    >
      <path
        d="M500 62.5C741.624578 62.5 937.5 258.375422 937.5 500C937.5 741.624578 741.624578 937.5 500 937.5C258.375422 937.5 62.5 741.624578 62.5 500C62.5 258.375422 258.375422 62.5 500 62.5zM523.818772 218.75L476.181634 218.75C472.018556 218.75 468.586775 222.014489 468.378881 226.172375L468.378881 226.172375L453.317928 511.766431C453.196337 514.198263 454.215513 516.547741 456.074256 518.120525L456.074256 518.120525L635.137375 667.231625C638.239159 669.856213 642.83495 669.66505 645.708063 666.791938L645.708063 666.791938L666.792406 645.707594C669.665322 642.834678 669.856688 638.239253 667.232563 635.137437L667.232563 635.137437L545.53125 488.4375L531.621503 226.171938C531.413391 222.014228 527.981687 218.75 523.818772 218.75L523.818772 218.75z"
        fill="#666666"
      ></path>
    </svg>
  </icon-wrapper>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import iconWrapper from '../components/base.vue';
export default defineComponent({
  name: 'StatusIconInProgressWaiting',
  components: { iconWrapper },
  props: {
    size: {
      type: String || Number,
      default: '1em',
    },
    fill: {
      type: String,
      default: 'currentColor',
    },
    rotate: Number,
    spin: Boolean,
  },
});
</script>
