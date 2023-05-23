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
        id="987.最后"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(5.000000, 2.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M12.4584543,13.9920909 L0.31443336,26.1550619 C-0.106831628,26.5769842 -0.0931958309,27.2747128 0.317269755,27.6858187 C0.740101176,28.1093098 1.43575923,28.0991814 1.84564157,27.6886594 L14.7664118,14.7477272 C15.1876768,14.3258048 15.1740409,13.6280763 14.7635754,13.2169704 C14.7172094,13.170532 10.4040384,8.8688758 1.82406239,0.31200168 C1.40421271,-0.108503121 0.713129228,-0.0981142466 0.307761369,0.307886132 C-0.109818798,0.72611801 -0.0966346617,1.4174105 0.311870481,1.8265532 L12.4584543,13.9920909 Z M20.4615385,1.49622945e-08 C19.8667703,1.49622945e-08 19.3846154,0.48215491 19.3846154,1.07692306 L19.3846154,26.9230769 C19.3846154,27.5178452 19.8667703,28 20.4615385,28 C21.0563067,28 21.5384616,27.5178452 21.5384616,26.9230769 L21.5384616,1.07692306 C21.5384616,0.48215491 21.0563067,1.49622945e-08 20.4615385,1.49622945e-08 Z"
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
  name: 'TheLast',
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
