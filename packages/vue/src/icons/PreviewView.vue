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
        id="1090.预览视图"
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
            d="M5.99999997,4.00000001 L5.99999997,24 L26,24 L26,4.00000001 L5.99999997,4.00000001 Z M6.00000001,2 L26,2 C27.1045695,2 28,2.89543051 28,4 L28,24 C28,25.1045695 27.1045695,26 26,26 L6.00000001,26 C4.89543049,26 4.00000001,25.1045695 4.00000001,24 L4.00000001,4 C4.00000001,2.89543052 4.89543049,2 6.00000001,2 Z M2,0 L2,28 L0,28 L0,0 L2,0 Z"
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
  name: 'PreviewView',
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
