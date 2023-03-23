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
    <title>62.云</title>
    <g
      id="62.云"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="云"
        transform="translate(4.000000, 7.000000)"
        fill="#000000"
        fill-rule="nonzero"
      >
        <path
          d="M6,17 C2.6862915,17 0,14.3360942 0,11.05 C0,8.2378414 1.97775242,5.84795044 4.67448763,5.24572696 C5.7038521,2.15504898 8.6342713,0 12,0 C15.3657287,0 18.2961479,2.15504898 19.3255124,5.24572696 C22.0222476,5.84795044 24,8.2378414 24,11.05 C24,14.3360942 21.3137084,17 18,17 L6,17 Z"
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
  name: 'Cloud',
  props: {
    size: Number,
    color: String,
  },
});
</script>
