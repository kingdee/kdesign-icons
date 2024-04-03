<template>
  <icon-wrapper :spin="spin" :rotate="rotate">
    <svg
      :width="size"
      :height="size"
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g
        id="1885.性能监控"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <path
          d="M29,4 C29.5522847,4 30,4.44771525 30,5 L30,23 C30,23.5522847 29.5522847,24 29,24 L3,24 C2.44771525,24 2,23.5522847 2,23 L2,5 C2,4.44771525 2.44771525,4 3,4 L29,4 Z M12.0979828,4.54651581 L8.931,15.211 L7,9.41886117 L5.639,13.5 L4,13.5 L4,14.5 L6.36037961,14.5 L7,12.581 L9.06863057,18.7870305 L11.902,9.455 L14.9298576,23.6205269 L17.401,14.5 L21.3139669,14.5 L22.578,11.878 L23.6661966,14.5 L28,14.5 L28,13.5 L24.333,13.5 L22.6463995,9.43534169 L20.685,13.5 L16.5989142,13.5 L15.07,18.377 L12.0979828,4.54651581 Z M24.8892308,27 C25.6297436,27 26,27.3341024 26,28.0004615 C26,28.6668205 25.6297436,29 24.8892308,29 L7.11076923,29 C6.37025642,29 6,28.6677434 6,28.0004615 C6,27.3341025 6.37025642,27.0009229 7.11076923,27.0009229 C18.4694017,27.0003076 24.3955556,27 24.8892308,27 Z"
          id="形状结合"
          :fill="fill"
          fill-rule="nonzero"
        ></path>
      </g>
    </svg>
  </icon-wrapper>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import iconWrapper from '../components/base.vue';
export default defineComponent({
  name: 'PerformanceMonitoring',
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
