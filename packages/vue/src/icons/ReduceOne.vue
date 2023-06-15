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
        id="1149-减少"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(4.000000, 15.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M1.33333339,0 L22.6666667,0 C23.4030463,0 24,0.596953665 24,1.33333333 C24,2.06971299 23.4030463,2.66666666 22.6666667,2.66666666 L1.33333339,2.66666666 C0.856979254,2.66666666 0.416809876,2.41253479 0.178632804,2 C-0.059544268,1.58746524 -0.059544268,1.07920143 0.178632804,0.666666649 C0.416809876,0.254131873 0.856979254,0 1.33333339,0 Z"
            id="路径"
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
  name: 'ReduceOne',
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
