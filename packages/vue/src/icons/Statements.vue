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
    <title>1060.视图_卡片</title>
    <g
      id="1060.视图_卡片"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="编组"
        transform="translate(2.000000, 2.000000)"
        fill="#000000"
        fill-rule="nonzero"
      >
        <path
          d="M-4.74928738e-16,-4.74928738e-16 L10.8888889,-4.74928738e-16 L10.8888889,10.8888889 L-4.74928738e-16,10.8888889 L-4.74928738e-16,-4.74928738e-16 Z M-4.74928738e-16,17.1111111 L10.8888889,17.1111111 L10.8888889,28 L-4.74928738e-16,28 L-4.74928738e-16,17.1111111 Z M17.1111111,-4.74928738e-16 L28,-4.74928738e-16 L28,10.8888889 L17.1111111,10.8888889 L17.1111111,-4.74928738e-16 Z M17.1111111,17.1111111 L28,17.1111111 L28,28 L17.1111111,28 L17.1111111,17.1111111 Z"
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
  name: 'Statements',
  props: {
    size: Number,
    color: String,
  },
});
</script>
