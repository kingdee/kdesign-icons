<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <title>922.马赛克</title>
    <g
      id="922.马赛克"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="编组"
        transform="translate(2.000000, 2.000000)"
        fill="#000000"
        fill-rule="nonzero"
      >
        <path
          d="M24.2666666,26.1333333 L14.0466667,26.1333333 L14.0466667,14 L26.1333333,14 L26.1333333,3.73333334 C26.1333333,2.70240181 25.2975982,1.86666667 24.2666666,1.86666667 L14.0466667,1.86666667 L14.0466667,14 L1.86666667,14 L1.86666667,24.2666666 C1.86666667,25.2975982 2.70240181,26.1333333 3.73333334,26.1333333 L24.2666666,26.1333333 Z M26.1333333,14 L28,14 L28,24.2666666 C28,26.3285297 26.3285297,28 24.2666666,28 L3.73333334,28 C2.74319178,28 1.79360383,27.6066678 1.09346802,26.906532 C0.393332205,26.2063962 0,25.2568082 0,24.2666666 L0,3.73333334 C0,1.67147027 1.67147027,0 3.73333334,0 L24.2666666,0 C26.3285297,0 28,1.67147027 28,3.73333334 L28,22.4466667 L26.1333333,14 Z"
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
  name: 'Effectiveness',
  props: {
    size: Number,
    color: String,
  },
});
</script>
