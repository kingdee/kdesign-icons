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
        id="46.减"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="减"
          transform="translate(4.000000, 14.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M23.1428571,0 C23.616244,0 24,0.335786472 24,0.75 L24,2.25 C24,2.66421353 23.616244,3 23.1428571,3 L0.857142857,3 C0.383755941,3 0,2.66421353 0,2.25 L0,0.75 C0,0.335786472 0.383755941,0 0.857142857,0 L23.1428571,0 Z"
            id="路径"
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
  name: 'ReduceTwo',
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
