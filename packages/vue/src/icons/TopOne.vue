<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <title>894.标书编制</title>
    <g
      id="894.标书编制"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="编组"
        transform="translate(5.000000, 2.000000)"
        fill="#000000"
        fill-rule="nonzero"
      >
        <path
          d="M21,22.4 L2.7664,22.4 C1.8438,22.4 1.4,22.9264 1.4,23.8 L1.4,25.2 C1.4,25.9728 2.1336,26.6 2.7664,26.6 L22.4,26.6 C22.4,27.3728 21.8876,28 21.2548,28 L2.2904,28 C1.0262,28 7.77156117e-16,26.747 7.77156117e-16,25.2 L7.77156117e-16,1.4 C7.77156117e-16,0.62680135 0.62680135,0 1.4,0 L21,0 C21.7731986,0 22.4,0.62680135 22.4,1.4 L22.4,21 C22.4,21.7731986 21.7731986,22.4 21,22.4 Z M22.4,23.8 L22.4,25.2 L3.5,25.2 C3.11340068,25.2 2.8,24.8865993 2.8,24.5 C2.8,24.1134007 3.11340068,23.8 3.5,23.8 L22.4,23.8 Z M4.2,6.3 L4.2,9.1 L6.9664,9.1 L6.9664,6.3 L4.2,6.3 Z M4.2,13.3 L4.2,16.1 L6.9664,16.1 L6.9664,13.3 L4.2,13.3 Z M9.8,7 L9.8,8.4 L19.502,8.4 L19.502,7 L9.8,7 Z M9.8,14 L9.8,15.4 L19.502,15.4 L19.502,14 L9.8,14 Z"
          id="形状"
          :fill="color"
        ></path>
      </g>
    </g>
  </svg>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Top1',
  props: {
    size: Number,
    color: String,
  },
});
</script>
