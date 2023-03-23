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
    <title>1233-移动端删除</title>
    <g
      id="1233-移动端删除"
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
          d="M12,-5.75539617e-16 C18.576,-5.75539617e-16 23.9175,5.35950001 24,12 C24,18.6405 18.576,24 12,24 C5.34299998,24 -5.75539617e-16,18.6405 -5.75539617e-16,12 C-5.75539617e-16,5.35950001 5.34299998,-5.75539617e-16 12,-5.75539617e-16 Z M5.7,10.8 C5.27124616,10.7999473 4.87503871,11.0286545 4.66064657,11.3999574 C4.44625443,11.7712603 4.44625443,12.2287397 4.66064657,12.6000426 C4.87503871,12.9713455 5.27124616,13.2000527 5.7,13.2 L18.3,13.2 C18.7287538,13.2000527 19.1249613,12.9713455 19.3393534,12.6000426 C19.5537456,12.2287397 19.5537456,11.7712603 19.3393534,11.3999574 C19.1249613,11.0286545 18.7287538,10.7999473 18.3,10.8 L5.7,10.8 Z"
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
  name: 'DeleteOnMobile',
  props: {
    size: Number,
    color: String,
  },
});
</script>
