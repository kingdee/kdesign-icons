<template>
  <!--?xml version="1.0" encoding="UTF-8"?-->
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <title>1463-应用首页-栅格</title>
    <g
      id="1463-应用首页-栅格"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="编组"
        transform="translate(4.000000, 6.000000)"
        fill="#000000"
        fill-rule="nonzero"
      >
        <path
          d="M23.4545455,0 C23.7557913,0 24,0.244208291 24,0.545454537 L24,0.545454537 L24,19.0909091 C24,19.3921554 23.7557913,19.6363637 23.4545455,19.6363637 L23.4545455,19.6363637 L0.545454537,19.6363637 C0.24420871,19.6363637 -5.58099022e-16,19.3921554 -5.58099022e-16,19.0909091 L-5.58099022e-16,19.0909091 L-5.58099022e-16,0.545454537 C-5.58099022e-16,0.244208291 0.24420871,0 0.545454537,0 L0.545454537,0 L23.4545455,0 Z M7.63636362,1.0909091 L1.09090907,1.0909091 L1.09090907,18.5454546 L7.63636362,18.5454546 L7.63636362,1.0909091 Z M15.2727273,1.0909091 L8.72727272,1.0909091 L8.72727272,18.5454546 L15.2727273,18.5454546 L15.2727273,1.0909091 Z M22.9090909,1.0909091 L16.3636364,1.0909091 L16.3636364,18.5454546 L22.9090909,18.5454546 L22.9090909,1.0909091 Z"
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
  name: 'ApplicationHomeRaster',
  props: {
    size: Number,
    color: String,
  },
});
</script>
