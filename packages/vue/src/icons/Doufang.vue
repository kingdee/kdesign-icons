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
        id="1333-斗方"
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
            d="M1.5,7.49999999 L1.5,16.5 L4.5,16.5 L4.5,7.49999999 L1.5,7.49999999 Z M-4.4408921e-16,5.99999999 L6,5.99999999 L6,18 L-4.4408921e-16,18 L-4.4408921e-16,5.99999999 Z M8.99999999,3.00000001 L15,3.00000001 L15,18 L8.99999999,18 L8.99999999,3.00000001 Z M10.5,4.49999998 L10.5,16.5 L13.5,16.5 L13.5,4.49999998 L10.5,4.49999998 Z M18,0 L24,0 L24,18 L18,18 L18,0 L18,0 Z M19.5,1.5 L19.5,16.5 L22.5,16.5 L22.5,1.5 L19.5,1.5 Z M0,19.5 L24,19.5 L24,21 L0,21 L0,19.5 Z"
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
  name: 'Doufang',
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
