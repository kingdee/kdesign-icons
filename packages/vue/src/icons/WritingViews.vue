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
        id="1039.编写视图"
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
            d="M2.00000001,4.00000001 L2.00000001,24 L22,24 L22,4.00000001 L2.00000001,4.00000001 Z M2,2.00000001 L22,2.00000001 C23.1045695,2.00000001 24,2.89543052 24,4.00000001 L24,24 C24,25.1045695 23.1045695,26 22,26 L2,26 C0.895430503,26 0,25.1045695 0,24 L0,4.00000001 C0,2.89543051 0.895430503,2.00000001 2,2.00000001 Z M28,0 L28,28 L26,28 L26,0 L28,0 Z M28,0 L28,28 L26,28 L26,0 L28,0 Z"
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
  name: 'WritingViews',
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
