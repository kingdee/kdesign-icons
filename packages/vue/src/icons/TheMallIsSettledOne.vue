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
        id="1834.商城入驻"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <path
          d="M19.0170225,3 C19.5693072,3 20.0170225,3.44771525 20.0170225,4 L20.0170225,30 L4,30 C3.44771525,30 3,29.5522847 3,29 L3,4 C3,3.44771525 3.44771525,3 4,3 L19.0170225,3 Z M10,23 L7,23 L7,26 L10,26 L10,23 Z M16,23 L13,23 L13,26 L16,26 L16,23 Z M10,17 L7,17 L7,20 L10,20 L10,17 Z M16,17 L13,17 L13,20 L16,20 L16,17 Z M10,11 L7,11 L7,14 L10,14 L10,11 Z M16,11 L13,11 L13,14 L16,14 L16,11 Z M23.3511234,12.5066713 L29.3511234,14.7566713 C29.7414272,14.9030352 30,15.2761559 30,15.6930005 L30,29 C30,29.5522847 29.5522847,30 29,30 L22,30 L22,30 L22,13.4430005 C22,12.8907157 22.4477153,12.4430005 23,12.4430005 C23.119912,12.4430005 23.2388464,12.4645674 23.3511234,12.5066713 Z"
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
  name: 'TheMallIsSettledOne',
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
