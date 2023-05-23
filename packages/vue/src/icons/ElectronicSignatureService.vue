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
        id="421.电子签章服务"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(4.000000, 3.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M15.5576471,15.3647874 C15.2795294,17.2282017 16.7576471,18.158512 18.9811765,18.158512 L5.64705884,18.158512 C7.87058824,18.158512 8.75858823,17.2268049 8.31529411,15.3647874 C8.00752941,14.079674 7.48941177,12.5752533 6.76235295,10.852922 C4.91294119,7.93627343 5.40705882,4.03623374 7.92282352,1.72861715 C10.4357647,-0.576205718 13.5458824,-0.576205718 16.0602353,1.72861715 C18.5731765,4.03623374 19.0701176,7.93627343 17.2207058,10.8515251 C16.4922353,12.5738564 15.7567058,14.0405619 15.5576471,15.3633906 L15.5576471,15.3647874 Z M2.00047061,18.158512 L21.9995294,18.158512 C23.1049411,18.158512 24,19.0972037 24,20.2538056 L24,23.7459615 L0,23.7459615 L0,20.2538056 C0,19.0972037 0.895058841,18.158512 2.00047061,18.158512 L2.00047061,18.158512 Z M0,25.1428238 L24,25.1428238 L24,26.4 L0,26.4 L0,25.1428238 Z"
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
  name: 'ElectronicSignatureService',
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
