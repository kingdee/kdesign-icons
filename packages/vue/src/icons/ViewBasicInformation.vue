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
        id="1334-查看基础资料"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(5.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M1.6,0 L20.8,0 C21.6836556,0 22.4,0.716344402 22.4,1.6 L22.4,22.4 C22.4,23.2836556 21.6836556,24 20.8,24 L1.6,24 C0.716344402,24 5.1159077e-16,23.2836556 5.1159077e-16,22.4 L5.1159077e-16,1.6 C5.1159077e-16,0.716344402 0.716344402,0 1.6,0 L1.6,0 Z M1.6,1.6 L1.6,22.4 L20.8,22.4 L20.8,1.6 L1.6,1.6 Z M4.79999998,6.39999999 L7.99999999,6.39999999 L7.99999999,7.99999999 L4.79999998,7.99999999 L4.79999998,6.39999999 Z M4.79999998,11.2 L7.99999999,11.2 L7.99999999,12.8 L4.79999998,12.8 L4.79999998,11.2 Z M4.79999998,16 L7.99999999,16 L7.99999999,17.6 L4.79999998,17.6 L4.79999998,16 Z M9.59999999,6.39999999 L17.6,6.39999999 L17.6,7.99999999 L9.59999999,7.99999999 L9.59999999,6.39999999 Z M9.59999999,11.2 L17.6,11.2 L17.6,12.8 L9.59999999,12.8 L9.59999999,11.2 Z M9.59999999,16 L17.6,16 L17.6,17.6 L9.59999999,17.6 L9.59999999,16 Z"
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
  name: 'ViewBasicInformation',
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
