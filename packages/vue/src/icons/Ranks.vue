<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <title>1046.分割线</title>
    <g
      id="1046.分割线"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="编组"
        transform="translate(2.000000, 14.000000)"
        fill="#000000"
        fill-rule="nonzero"
      >
        <polygon
          id="路径"
          points="-6.66133815e-16 0 28 0 28 4.00000001 -6.66133815e-16 4.00000001"
        ></polygon>
      </g>
    </g>
  </svg>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Ranks',
  props: {
    size: Number,
    color: String,
  },
});
</script>
