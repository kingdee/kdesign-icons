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
        id="1042.链接"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(2.000000, 2.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M26.2448737,15.75 C27.2142031,15.75 28,16.5162925 28,17.5051263 L28,26.2448737 C28,27.2142031 27.2337075,28 26.2448737,28 L17.5051263,28 C16.5357969,28 15.75,27.2337075 15.75,26.2448737 L15.75,17.5051263 C15.75,16.5357969 16.5162925,15.75 17.5051263,15.75 L26.2448737,15.75 Z M26.2521714,17.4978286 L17.5051263,17.5 L17.5,26.2448737 L26.2521714,26.2521714 L26.2521714,17.4978286 Z M6.125,14 C6.125,18.2249783 9.45216391,21.6728559 13.6292875,21.8664285 L14,21.875 L14,23.625 C8.81391151,23.625 4.58580651,19.523385 4.3826426,14.3871124 L4.375,14 L6.125,14 Z M14,4.375 C19.1860884,4.375 23.4141934,8.476615 23.6173574,13.6128875 L23.625,14 L21.875,14 C21.875,9.77502166 18.5478361,6.32714411 14.3707125,6.1335715 L14,6.125 L14,4.375 Z M10.4948737,0 C11.4642032,0 12.25,0.76629238 12.25,1.75512634 L12.25,10.4948737 C12.25,11.4642032 11.4837077,12.25 10.4948737,12.25 L1.75512634,12.25 C0.78579683,12.25 0,11.4837077 0,10.4948737 L0,1.75512634 C0,0.78579683 0.76629238,0 1.75512634,0 L10.4948737,0 Z M10.5021714,1.74782864 L1.75512635,1.75 L1.75,10.4948737 L10.5021714,10.5021714 L10.5021714,1.74782864 Z"
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
  name: 'Links',
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
