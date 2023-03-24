<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <title>391.开票工作台@1x</title>
    <g
      id="391.开票工作台"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="编组"
        transform="translate(4.000000, 5.000000)"
        fill="#000000"
        fill-rule="nonzero"
      >
        <path
          d="M24,16.2857143 L24,17.1428571 C24,18.089631 23.2324881,18.8571429 22.2857143,18.8571429 L13.2,18.8571429 L13.5428571,20.5714286 L17.1428571,20.5714286 C17.616244,20.5714286 18,20.9551845 18,21.4285714 C18,21.9019583 17.616244,22.2857143 17.1428571,22.2857143 L6.85714286,22.2857143 C6.38375594,22.2857143 6,21.9019583 6,21.4285714 C6,20.9551845 6.38375594,20.5714286 6.85714286,20.5714286 L10.4571429,20.5714286 L10.8,18.8571429 L1.71428571,18.8571429 C0.767511854,18.8571429 0,18.089631 0,17.1428571 L0,16.2857143 L24,16.2857143 Z M22.2857143,0 C23.2324881,0 24,0.767511854 24,1.71428571 L24,15.4285714 L0,15.4285714 L0,1.71428571 C0,0.767511854 0.767511854,0 1.71428571,0 L22.2857143,0 Z"
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
  name: 'InvoicingWorkbench',
  props: {
    size: Number,
    color: String,
  },
});
</script>
