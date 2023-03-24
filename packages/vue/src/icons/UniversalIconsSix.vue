<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <title>1393-通用图标6</title>
    <g
      id="1393-通用图标6"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="编组"
        transform="translate(4.000000, 4.000000)"
        fill="#000000"
        fill-rule="nonzero"
      >
        <path
          d="M0,0 L18,0 L18,18 L0,18 L0,0 Z M24,24 L6,24 L6,19.5 L19.5,19.5 L19.5,6 L24,6 L24,24 Z"
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
  name: 'UniversalIcons6',
  props: {
    size: Number,
    color: String,
  },
});
</script>
