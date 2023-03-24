<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <title>1495-提交历史记录视图 灰色</title>
    <g
      id="1495-提交历史记录视图-灰色"
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
          d="M21,12.0105 L19.5,12.0105 L19.5,1.5 L1.5,1.5 L1.5,22.5 L12.0045,22.5 L12.0045,24 L1.5,24 C0.671572877,24 0,23.3284271 0,22.5 L0,1.5 C0,0.671572877 0.671572877,0 1.5,0 L19.5,0 C20.3284271,0 21,0.671572877 21,1.5 L21,12.0105 L21,12.0105 Z M21,12.0105 L19.5,12.0105 L19.5,1.5 L1.5,1.5 L1.5,22.5 L12.0045,22.5 L12.0045,24 L1.5,24 C0.671572877,24 0,23.3284271 0,22.5 L0,1.5 C0,0.671572877 0.671572877,0 1.5,0 L19.5,0 C20.3284271,0 21,0.671572877 21,1.5 L21,12.0105 L21,12.0105 Z M4.49999998,7.49999999 L16.5,7.49999999 L16.5,8.99999999 L4.49999998,8.99999999 L4.49999998,7.49999999 Z M4.49999998,12 L12,12 L12,13.5 L4.49999998,13.5 L4.49999998,12 Z M22.887,15 L24,16.068 L15.7395,24 L11.31,19.377 L12.423,18.309 L15.738,21.828 L22.887,15 Z M19.5,13.5 L21,13.5 L21,15 L19.5,15 L19.5,13.5 Z"
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
  name: 'CommitHistoryViewGrey',
  props: {
    size: Number,
    color: String,
  },
});
</script>
