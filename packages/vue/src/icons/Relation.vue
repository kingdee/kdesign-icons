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
    <title>216.科目现金流量关系</title>
    <g
      id="216.科目现金流量关系"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="科目现金流量关系"
        transform="translate(4.000000, 4.000000)"
        fill-rule="nonzero"
      >
        <rect
          id="矩形"
          fill="#FFFFFF"
          opacity="0"
          x="0"
          y="0"
          width="24"
          height="24"
        ></rect>
        <path
          d="M21.45,2.7 C21.8648437,2.7 22.2,3.03515626 22.2,3.45 L22.2,19.95 C22.2,20.3648437 21.8648437,20.7 21.45,20.7 L15.45,20.7 C15.0351563,20.7 14.7,20.3648437 14.7,19.95 L14.7,3.45 C14.7,3.03515626 15.0351563,2.7 15.45,2.7 L21.45,2.7 Z M7.95,2.7 C8.36484374,2.7 8.7,3.03515626 8.7,3.45 L8.7,19.95 C8.7,20.3648437 8.36484374,20.7 7.95,20.7 L1.95,20.7 C1.53515626,20.7 1.2,20.3648437 1.2,19.95 L1.2,3.45 C1.2,3.03515626 1.53515626,2.7 1.95,2.7 L7.95,2.7 Z M11.7,1.2 C12.1148437,1.2 12.45,1.53515626 12.45,1.95 L12.45,21.45 C12.45,21.8648437 12.1148437,22.2 11.7,22.2 C11.2851563,22.2 10.95,21.8648437 10.95,21.45 L10.95,1.95 C10.95,1.53515626 11.2851563,1.2 11.7,1.2 Z"
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
  name: 'Relation',
  props: {
    size: Number,
    color: String,
  },
});
</script>
