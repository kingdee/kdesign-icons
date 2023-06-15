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
        id="67.银行卡"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="银行卡"
          transform="translate(4.000000, 7.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M24,6.8 L24,16.15 C24,16.619442 23.616244,17 23.1428571,17 L0.857142857,17 C0.383755941,17 0,16.619442 0,16.15 L0,6.8 L24,6.8 Z M20.5714286,11.05 L16.2857143,11.05 L15.4285714,12.75 L19.7142857,12.75 L20.5714286,11.05 Z M23.1428571,0 C23.616244,0 24,0.380557974 24,0.85 L24,5.1 L0,5.1 L0,0.85 C0,0.380557974 0.383755941,0 0.857142857,0 L23.1428571,0 Z"
            id="形状"
            :fill="fill"
          ></path>
        </g>
      </g>
    </svg>
  </icon-wrapper>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import iconWrapper from '../components/base.vue';
export default defineComponent({
  name: 'BankCardSolid',
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
