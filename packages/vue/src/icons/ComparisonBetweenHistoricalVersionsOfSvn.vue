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
        id="1498-SVN历史版本间的比较"
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
            d="M16.5,18 L10.5,18 L10.5,16.5 L16.5,16.5 L16.5,10.5 L18,10.5 L18,16.5 C18,17.3284271 17.3284271,18 16.5,18 L16.5,18 Z M18,9 L22.5,9 C23.3284271,9 24,9.67157287 24,10.5 L24,22.5 C24,23.3284271 23.3284271,24 22.5,24 L10.5,24 C9.67157287,24 9,23.3284271 9,22.5 L9,18 L1.5,18 C0.671572877,18 -2.39808173e-16,17.3284271 -2.39808173e-16,16.5 L-2.39808173e-16,1.5 C-2.39808173e-16,0.671572877 0.671572877,-4.79616347e-16 1.5,-4.79616347e-16 L16.5,-4.79616347e-16 C17.3284271,-4.79616347e-16 18,0.671572877 18,1.5 L18,9 Z M16.5,9 L16.5,1.5 L1.5,1.5 L1.5,16.5 L9,16.5 L9,10.5 C9,9.67157287 9.67157287,9 10.5,9 L16.5,9 Z M10.5,10.5 L10.5,22.5 L22.5,22.5 L22.5,10.5 L10.5,10.5 Z"
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
  name: 'ComparisonBetweenHistoricalVersionsOfSvn',
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
