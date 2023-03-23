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
    <title>1154-明细视图</title>
    <g
      id="1154-明细视图"
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
          d="M24,22.2857143 L24,24 L3.42857143,24 L3.42857143,22.2857143 L24,22.2857143 Z M1.71428571,22.2857143 L1.71428571,24 L0,24 L0,22.2857143 L1.71428571,22.2857143 Z M24,10.2857143 L24,12 L3.42857143,12 L3.42857143,10.2857143 L24,10.2857143 Z M1.71428571,10.2857143 L1.71428571,12 L0,12 L0,10.2857143 L1.71428571,10.2857143 Z M24,0 L24,1.71428571 L3.42857143,1.71428571 L3.42857143,0 L24,0 Z M1.71428571,0 L1.71428571,1.71428571 L0,1.71428571 L0,0 L1.71428571,0 Z"
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
  name: 'DetailView',
  props: {
    size: Number,
    color: String,
  },
});
</script>
