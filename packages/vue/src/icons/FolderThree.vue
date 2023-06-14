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
        id="1263-文件夹"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(4.000000, 6.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M1.71428571,3.42857143 L9.93067406,3.42857143 L8.21638834,1.71428571 L1.71428571,1.71428571 L1.71428571,3.42857143 Z M12.3550402,3.42857143 L23.1428571,3.42857143 C23.616244,3.42857143 24,3.81232737 24,4.28571429 L24,19.7142857 C24,20.1876726 23.616244,20.5714286 23.1428571,20.5714286 L0.857142857,20.5714286 C0.383755941,20.5714286 0,20.1876726 0,19.7142857 L0,0.857142857 C0,0.383755941 0.383755941,0 0.857142857,0 L8.57142857,0 C8.79875701,0 9.01677463,0.090305856 9.17752013,0.251051328 L12.3550402,3.42857143 Z M1.71428571,5.14285714 L1.71428571,18.8571429 L22.2857143,18.8571429 L22.2857143,5.14285714 L1.71428571,5.14285714 Z"
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
  name: 'FolderThree',
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
