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
        id="1249-更改"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(4.000000, 5.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M1.49086843,10.436079 C1.49086843,7.96592732 3.49332202,5.96347373 5.96347371,5.96347371 L24,5.96347371 L23.8538949,4.47260528 L5.96347371,4.47260528 C2.66993812,4.47260528 -7.1504487e-16,7.14254342 -7.1504487e-16,10.436079 L1.49086843,10.436079 Z M1.49086843,10.436079 C1.49086843,7.96592732 3.49332202,5.96347373 5.96347371,5.96347371 L24,5.96347371 L23.8538949,4.47260528 L5.96347371,4.47260528 C2.66993812,4.47260528 -7.1504487e-16,7.14254342 -7.1504487e-16,10.436079 L-7.1504487e-16,11.9269474 L1.49086843,11.9567648 L1.49086843,10.436079 Z M8.94521058,17.8904212 L17.8904212,17.8904212 C21.1839568,17.8904211 23.8538949,15.220483 23.8538949,11.9269474 L23.8538949,10.436079 L22.3630265,10.436079 L22.3630265,11.9269474 C22.3630265,14.3970991 20.3605729,16.3995527 17.8904212,16.3995528 L-7.1504487e-16,16.3995528 L-7.1504487e-16,17.8904212 L0.648527776,17.8904212 L8.94521058,22.3630265 L8.94521058,17.8904212 L8.94521058,17.8904212 Z M14.9086843,-4.7669658e-16 L23.8538949,4.82295936 L23.8538949,5.96347371 L14.9086843,5.96347371 L14.9086843,-4.7669658e-16 L14.9086843,-4.7669658e-16 Z"
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
  name: 'Change',
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
