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
    <title>981.下降</title>
    <g
      id="981.下降"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="编组"
        transform="translate(5.000000, 2.000000)"
        fill="#000000"
        fill-rule="nonzero"
      >
        <polygon
          id="路径"
          points="10.5 28 21 17.5 12.25 17.5 12.25 0 8.75 0 8.75 17.5 0 17.5"
        ></polygon>
      </g>
    </g>
  </svg>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Hyperlinks',
  props: {
    size: Number,
    color: String,
  },
});
</script>
