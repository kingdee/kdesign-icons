<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <title>111.方向左</title>
    <g
      id="111.方向左"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="方向左"
        transform="translate(9.000000, 4.000000)"
        fill="#000000"
        fill-rule="nonzero"
      >
        <path
          d="M12.7071068,1.70710678 C13.0976311,1.31658249 13.0976311,0.683417503 12.7071068,0.292893216 C12.3165825,-0.0976310719 11.6834175,-0.0976310719 11.2928932,0.292893216 L0.292893215,11.2928932 C-0.0976310718,11.6834175 -0.0976310718,12.3165825 0.292893215,12.7071068 L11.2928932,23.7071068 C11.6834175,24.0976311 12.3165825,24.0976311 12.7071068,23.7071068 C13.0976311,23.3165825 13.0976311,22.6834175 12.7071068,22.2928932 L2.4142136,12 L12.7071068,1.70710678 Z"
          id="路径"
          :fill="color"
        ></path>
      </g>
    </g>
  </svg>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Left',
  props: {
    size: Number,
    color: String,
  },
});
</script>
