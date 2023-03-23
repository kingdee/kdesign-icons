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
    <title>192.状态_完成</title>
    <g
      id="192.状态_完成"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="状态_完成"
        transform="translate(4.000000, 4.000000)"
        fill="#000000"
        fill-rule="nonzero"
      >
        <path
          d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M16.7392673,7.70346636 L9.86058806,13.8976423 L8.10567146,11.5564818 C7.55827001,10.8262165 6.42899935,11.5245234 6.83700833,12.3409848 L9.0831889,16.8357876 C9.31848118,17.3066279 9.95297052,17.3942025 10.3068835,17.0046867 L17.7941521,8.76421502 C18.4328657,8.06124833 17.4450369,7.0679285 16.7392673,7.70346636 Z"
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
  name: 'Finish',
  props: {
    size: Number,
    color: String,
  },
});
</script>
