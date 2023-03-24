<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <title>549.税务元素@1x</title>
    <g
      id="549.税务元素"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="编组"
        transform="translate(4.000000, 3.000000)"
        fill="#000000"
        fill-rule="nonzero"
      >
        <path
          d="M24,15.1111111 L24,25.7777778 L13.3333333,25.7777778 L13.3333333,15.1111111 L24,15.1111111 Z M5.77777778,14.2222222 C8.96875637,14.2222222 11.5555556,16.8090214 11.5555556,20 C11.5555556,23.1909786 8.96875637,25.7777778 5.77777778,25.7777778 C2.58679922,25.7777778 0,23.1909786 0,20 C0,16.8090214 2.58679922,14.2222222 5.77777778,14.2222222 Z M12.4444444,0 L19.5555556,12.4444444 L5.33333333,12.4444444 L12.4444444,0 Z"
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
  name: 'TaxElement',
  props: {
    size: Number,
    color: String,
  },
});
</script>
