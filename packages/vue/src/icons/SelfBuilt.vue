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
        id="1119-自建"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(4.000000, 4.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M1.5,22.5 L22.5,22.5 L22.5,1.5 L1.5,1.5 L1.5,22.5 Z M16.5,5.99999999 L5.99999999,5.99999999 L5.99999999,21 L7.49999999,21 L7.49999999,7.49999999 L16.5,7.49999999 L16.5,21 L18,21 L18,5.99999999 L16.5,5.99999999 Z M-2.39808173e-16,1.5 C-2.39808173e-16,0.671999994 0.667500012,-2.39808173e-16 1.5,-2.39808173e-16 L22.5,-2.39808173e-16 C23.328,-2.39808173e-16 24,0.667500012 24,1.5 L24,22.5 C24,23.328 23.3325,24 22.5,24 L1.5,24 C0.671999994,24 -2.39808173e-16,23.3325 -2.39808173e-16,22.5 L-2.39808173e-16,1.5 Z M7.49999999,10.5 L7.49999999,12 L16.5,12 L16.5,10.5 L7.49999999,10.5 Z M7.49999999,13.5 L7.49999999,15 L16.5,15 L16.5,13.5 L7.49999999,13.5 Z M7.49999999,18 L7.49999999,19.5 L16.5,19.5 L16.5,18 L7.49999999,18 Z M10.5,3.00000001 L10.5,4.50000001 L12,4.50000001 L12,3.00000001 L10.5,3.00000001 Z M8.99999999,4.50000001 L8.99999999,6.00000001 L10.5,6.00000001 L10.5,4.50000001 L8.99999999,4.50000001 Z"
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
  name: 'SelfBuilt',
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
