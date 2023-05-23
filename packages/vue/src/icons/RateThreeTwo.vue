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
        id="83.3：2比率"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="3：2比率"
          transform="translate(4.000000, 8.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M23.2,0 C23.6418278,0 24,0.358172211 24,0.8 L24,15.2 C24,15.6418278 23.6418278,16 23.2,16 L0.8,16 C0.358172211,16 0,15.6418278 0,15.2 L0,0.8 C0,0.358172211 0.358172211,0 0.8,0 L23.2,0 Z M22.4,1.6 L1.6,1.6 L1.6,14.4 L22.4,14.4 L22.4,1.6 Z"
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
  name: 'RateThreeTwo',
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
