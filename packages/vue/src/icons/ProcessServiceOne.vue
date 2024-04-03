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
        id="1712.流程服务"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <path
          d="M4,15 L8,15 L8,14 C8,13.4477153 8.44771525,13 9,13 L28,13 C28.5522847,13 29,13.4477153 29,14 L29,18 C29,18.5522847 28.5522847,19 28,19 L9,19 C8.44771525,19 8,18.5522847 8,18 L8,17 L4,17 L4,23 L8,23 L8,22 C8,21.4477153 8.44771525,21 9,21 L28,21 C28.5522847,21 29,21.4477153 29,22 L29,26 C29,26.5522847 28.5522847,27 28,27 L9,27 C8.44771525,27 8,26.5522847 8,26 L8,25 L2,25 L2,7 L8,7 L8,6 C8,5.44771525 8.44771525,5 9,5 L28,5 C28.5522847,5 29,5.44771525 29,6 L29,10 C29,10.5522847 28.5522847,11 28,11 L9,11 C8.44771525,11 8,10.5522847 8,10 L8,9 L4,9 L4,15 Z"
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
  name: 'ProcessServiceOne',
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
