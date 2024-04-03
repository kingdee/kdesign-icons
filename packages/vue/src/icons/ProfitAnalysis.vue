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
        id="1786.盈利分析"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="Group-10" transform="translate(1.000000, 2.000000)">
          <circle id="Oval-3" fill="#474444" cx="15" cy="13" r="7"></circle>
          <line
            x1="6.5"
            y1="5"
            x2="24"
            y2="21.5"
            id="Path-6"
            stroke="#474444"
            opacity="0.699999988"
          ></line>
          <line
            x1="6.5"
            y1="5"
            x2="24"
            y2="21.5"
            id="Path-6"
            stroke="#474444"
            opacity="0.699999988"
            transform="translate(15.250000, 13.250000) scale(-1, 1) translate(-15.250000, -13.250000) "
          ></line>
          <circle
            id="Oval-3-Copy"
            fill="#474444"
            cx="25.5"
            cy="3.5"
            r="3.5"
          ></circle>
          <circle
            id="Oval-3-Copy-3"
            fill="#474444"
            cx="25.5"
            cy="22.5"
            r="3.5"
          ></circle>
          <circle
            id="Oval-3-Copy-2"
            fill="#474444"
            cx="5"
            cy="4"
            r="3"
          ></circle>
          <circle
            id="Oval-3-Copy-4"
            fill="#474444"
            cx="4"
            cy="23"
            r="4"
          ></circle>
        </g>
      </g>
    </svg>
  </icon-wrapper>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import iconWrapper from '../components/base.vue';
export default defineComponent({
  name: 'ProfitAnalysis',
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
