<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <title>1094.文本左对齐</title>
    <g
      id="1094.文本左对齐"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="编组"
        transform="translate(2.000000, 6.000000)"
        fill="#000000"
        fill-rule="nonzero"
      >
        <path
          d="M0,0 L28,0 L28,1.55555556 L0,1.55555556 L0,0 Z M0,12.4444444 L28,12.4444444 L28,14 L0,14 L0,12.4444444 Z M0,6.22222221 L18.6666667,6.22222221 L18.6666667,7.77777777 L0,7.77777777 L0,6.22222221 Z M0,18.6666666 L18.6666667,18.6666666 L18.6666667,20.2222222 L0,20.2222222 L0,18.6666666 Z"
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
  name: 'QualityManagement',
  props: {
    size: Number,
    color: String,
  },
});
</script>
