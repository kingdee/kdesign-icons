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
    <title>1147-添加_线</title>
    <g
      id="1147-添加_线"
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
          d="M12.0000401,0 C12.5098193,0 12.9230769,0.413257639 12.9230769,0.92303678 L12.9230769,11.0769231 L23.0769735,11.0769735 C23.586747,11.0769735 24,11.4902265 24,12 C24,12.5097735 23.586747,12.9230265 23.0769735,12.9230265 L12.9230769,12.9221538 L12.9230769,23.0769632 C12.9230769,23.5867423 12.5098193,24 12.0000401,24 C11.4902609,24 11.0770034,23.5867423 11.0770034,23.0769632 L11.0769231,12.9221538 L0.92302656,12.9230265 C0.413253061,12.9230265 0,12.5097735 0,12 C0,11.4902265 0.413253061,11.0769735 0.92302656,11.0769735 L11.0769231,11.0769231 L11.0770034,0.92303678 C11.0770034,0.413257639 11.4902609,0 12.0000401,0 Z"
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
  name: 'AddLine',
  props: {
    size: Number,
    color: String,
  },
});
</script>
