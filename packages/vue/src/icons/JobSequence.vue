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
        id="1734.职位序列"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <path
          d="M29,3 C29.5522847,3 30,3.44771525 30,4 L30,27 C30,27.5522847 29.5522847,28 29,28 L3,28 C2.44771525,28 2,27.5522847 2,27 L2,4 C2,3.44771525 2.44771525,3 3,3 L29,3 Z M9,20 L7,20 L7,22 L9,22 L9,20 Z M24,20 L13,20 C12.4477153,20 12,20.4477153 12,21 C12,21.5522847 12.4477153,22 13,22 L24,22 C24.5522847,22 25,21.5522847 25,21 C25,20.4477153 24.5522847,20 24,20 Z M9,15 L7,15 L7,17 L9,17 L9,15 Z M24,15 L13,15 C12.4477153,15 12,15.4477153 12,16 C12,16.5522847 12.4477153,17 13,17 L24,17 C24.5522847,17 25,16.5522847 25,16 C25,15.4477153 24.5522847,15 24,15 Z M9,10 L7,10 L7,12 L9,12 L9,10 Z M24,10 L13,10 C12.4477153,10 12,10.4477153 12,11 C12,11.5522847 12.4477153,12 13,12 L24,12 C24.5522847,12 25,11.5522847 25,11 C25,10.4477153 24.5522847,10 24,10 Z"
          id="形状结合"
          :fill="fill"
        ></path>
      </g>
    </svg>
  </icon-wrapper>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import iconWrapper from '../components/base.vue';
export default defineComponent({
  name: 'JobSequence',
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
