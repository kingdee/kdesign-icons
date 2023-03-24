<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <title>1259-过滤_面</title>
    <g
      id="1259-过滤_面"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="编组"
        transform="translate(5.000000, 4.000000)"
        fill="#000000"
        fill-rule="nonzero"
      >
        <path
          d="M20.5103319,2.70751954 L13.5233383,10.6350123 L13.5233383,22.3215015 C13.5233383,23.1885007 12.8528389,24 12.0503397,24 L7.56084377,19.4400042 L7.56084377,10.5345124 L0.492850273,2.71501955 C0.0234622066,2.27183792 -0.127267558,1.58674228 0.112769172,0.98747816 C0.352805901,0.388214042 0.934808007,-0.00338403365 1.58034926,0 L19.4303329,0 C20.3003321,0 21.0053314,0.7035214 21.0053314,1.57052061 C21.0053314,2.02052021 20.8148316,2.42251983 20.5103319,2.70751954 Z"
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
  name: 'FilterFace',
  props: {
    size: Number,
    color: String,
  },
});
</script>
