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
        id="169.文件夹"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="文件夹"
          transform="translate(4.000000, 6.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M1.71428571,3.5 L9.93067406,3.5 L8.21638834,1.75 L1.71428571,1.75 L1.71428571,3.5 Z M12.3550402,3.5 L23.1428571,3.5 C23.616244,3.5 24,3.89175086 24,4.375 L24,20.125 C24,20.6082491 23.616244,21 23.1428571,21 L0.857142857,21 C0.383755941,21 0,20.6082491 0,20.125 L0,0.875 C0,0.391750856 0.383755941,0 0.857142857,0 L8.57142857,0 C8.79875701,0 9.01677463,0.092187228 9.17752013,0.256281564 L12.3550402,3.5 Z M1.71428571,5.25 L1.71428571,19.25 L22.2857143,19.25 L22.2857143,5.25 L1.71428571,5.25 Z"
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
  name: 'LinkOut',
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
