<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <title>853.辅助资料</title>
    <g
      id="853.辅助资料"
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
          d="M21,22.4 L2.7664,22.4 C1.8438,22.4 1.4,22.9264 1.4,23.8 L1.4,25.2 C1.4,25.9728 2.1336,26.6 2.7664,26.6 L22.4,26.6 C22.4,27.3728 21.8876,28 21.2548,28 L2.2904,28 C1.0262,28 7.77156117e-16,26.747 7.77156117e-16,25.2 L7.77156117e-16,1.4 C7.77156117e-16,0.62680135 0.62680135,0 1.4,0 L21,0 C21.7731986,0 22.4,0.62680135 22.4,1.4 L22.4,21 C22.4,21.7731986 21.7731986,22.4 21,22.4 Z M11.9,15.0668 L15.603,17.017 L14.896,12.887 L17.892,9.961 L13.7522,9.359 L11.9,5.6 L10.0478,9.3576 L5.908,9.9596 L8.904,12.8856 L8.197,17.0156 L11.9,15.0668 Z M22.4,23.8 L22.4,25.2 L3.5,25.2 C3.11340068,25.2 2.8,24.8865993 2.8,24.5 C2.8,24.1134007 3.11340068,23.8 3.5,23.8 L22.4,23.8 Z"
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
  name: 'PayrollStaff',
  props: {
    size: Number,
    color: String,
  },
});
</script>
