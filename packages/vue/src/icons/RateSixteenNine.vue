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
        id="87.16:9比率"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="16:9比率"
          transform="translate(4.000000, 9.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M23.25,0 C23.6642135,0 24,0.348222983 24,0.777777778 L24,13.2222222 C24,13.651777 23.6642135,14 23.25,14 L0.75,14 C0.335786448,14 0,13.651777 0,13.2222222 L0,0.777777778 C0,0.348222983 0.335786448,0 0.75,0 L23.25,0 Z M22.5,1.55555556 L1.5,1.55555556 L1.5,12.4444444 L22.5,12.4444444 L22.5,1.55555556 Z"
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
  name: 'RateSixteenNine',
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
