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
    <title>1020.right</title>
    <g
      id="1020.right"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="编组"
        transform="translate(7.000000, 2.000000)"
        fill="#000000"
        fill-rule="nonzero"
      >
        <path
          d="M16.9839582,10.6115291 C19.4165926,12.4825724 19.4138124,15.5129398 16.9839582,17.3839832 L4.40654341,27.047797 C1.97390903,28.91328 1.8519543e-15,27.9624675 1.8519543e-15,24.8542558 L1.8519543e-15,3.13847631 C1.8519543e-15,0.0580661512 1.97390903,-0.920547909 4.40654341,0.947715319 L16.9839582,10.6115291 L16.9839582,10.6115291 Z"
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
  name: 'Blacklist',
  props: {
    size: Number,
    color: String,
  },
});
</script>
