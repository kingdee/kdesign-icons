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
        id="168.外部链接"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="外部链接"
          transform="translate(4.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M20.8484182,1.84615385 L17.5384615,1.84615385 C17.0286603,1.84615385 16.6153846,1.43287822 16.6153846,0.923076923 C16.6153846,0.413275628 17.0286603,0 17.5384615,0 L23.0769231,0 C23.5867243,0 24,0.413275628 24,0.923076923 L24,6.46153846 C24,6.97133976 23.5867243,7.38461538 23.0769231,7.38461538 C22.5671218,7.38461538 22.1538462,6.97133976 22.1538462,6.46153846 L22.1538462,3.15158176 L10.8065601,14.4988678 C10.4460762,14.8593518 9.86161616,14.8593518 9.5011322,14.4988678 C9.14064821,14.1383838 9.14064821,13.5539238 9.5011322,13.1934399 L20.8484182,1.84615385 L20.8484182,1.84615385 Z M11.0769231,1.84615385 L11.0769231,3.69230769 L1.84615385,3.69230769 L1.84615385,22.1538462 L20.3076923,22.1538462 L20.3076923,12.9230769 L22.1538462,12.9230769 L22.1538462,23.0769231 C22.1538462,23.5867243 21.7405705,24 21.2307692,24 L0.923076923,24 C0.413275628,24 0,23.5867243 0,23.0769231 L0,2.76923077 C0,2.25942947 0.413275628,1.84615385 0.923076923,1.84615385 L11.0769231,1.84615385 Z"
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
  name: 'Message',
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
