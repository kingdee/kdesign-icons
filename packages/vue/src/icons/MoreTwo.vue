<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <title>124.更多</title>
    <g
      id="124.更多"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="更多"
        transform="translate(4.000000, 14.000000)"
        fill="#000000"
        fill-rule="nonzero"
      >
        <path
          d="M2,0 C3.1045695,0 4,0.895430496 4,2 C4,3.1045695 3.1045695,4 2,4 C0.895430496,4 0,3.1045695 0,2 C0,0.895430496 0.895430496,0 2,0 Z M12,0 C13.1045695,0 14,0.895430496 14,2 C14,3.1045695 13.1045695,4 12,4 C10.8954305,4 10,3.1045695 10,2 C10,0.895430496 10.8954305,0 12,0 Z M22,0 C23.1045695,0 24,0.895430496 24,2 C24,3.1045695 23.1045695,4 22,4 C20.8954305,4 20,3.1045695 20,2 C20,0.895430496 20.8954305,0 22,0 Z"
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
  name: 'More2',
  props: {
    size: Number,
    color: String,
  },
});
</script>
