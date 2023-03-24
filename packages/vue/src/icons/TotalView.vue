<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <title>1153-合计视图</title>
    <g
      id="1153-合计视图"
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
        <polygon
          id="路径"
          points="24 0 24 5.14285714 22.2857143 3.42857143 22.2857143 1.71428571 3.56624988 1.71428571 12.2405355 12 3.56624988 22.2857143 22.2857143 22.2857143 22.2857143 18.8571429 24 17.1428571 24 24 0 24 10.2857143 12 0 0"
        ></polygon>
      </g>
    </g>
  </svg>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'TotalView',
  props: {
    size: Number,
    color: String,
  },
});
</script>
