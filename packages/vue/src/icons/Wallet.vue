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
        id="133.-钱包"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="钱包"
          transform="translate(4.000000, 6.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M18,0 C18.4733869,0 18.8571429,0.391750856 18.8571429,0.875 L18.8571429,3.5 L23.1428571,3.5 C23.616244,3.5 24,3.89175086 24,4.375 L24,20.125 C24,20.6082491 23.616244,21 23.1428571,21 L0.857142857,21 C0.383755941,21 0,20.6082491 0,20.125 L0,3.5 C0,1.56700337 1.53502371,0 3.42857143,0 L18,0 Z M22.2857143,5.25 L1.71428571,5.25 L1.71428571,19.25 L22.2857143,19.25 L22.2857143,16.625 L14.5714286,16.625 C14.0980417,16.625 13.7142857,16.2332491 13.7142857,15.75 L13.7142857,8.75 C13.7142857,8.26675088 14.0980417,7.875 14.5714286,7.875 L22.2857143,7.874125 L22.2857143,5.25 Z M22.2857143,9.625 L15.4285714,9.625 L15.4285714,14.875 L22.2857143,14.875 L22.2857143,9.625 Z M18.4285714,10.9375 C19.1386518,10.9375 19.7142857,11.5251263 19.7142857,12.25 C19.7142857,12.9748737 19.1386518,13.5625 18.4285714,13.5625 C17.7184911,13.5625 17.1428571,12.9748737 17.1428571,12.25 C17.1428571,11.5251263 17.7184911,10.9375 18.4285714,10.9375 Z M17.1428571,1.75 L3.42857143,1.75 C2.48179757,1.75 1.71428571,2.53350168 1.71428571,3.5 L17.1428571,3.5 L17.1428571,1.75 Z"
            id="形状"
            :fill="color"
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
  name: 'Wallet',
  components: { iconWrapper },
  props: {
    size: {
      type: String || Number,
      default: '1em',
    },
    color: {
      type: String,
      default: 'currentColor',
    },
    rotate: Number,
    spin: Boolean,
  },
});
</script>
