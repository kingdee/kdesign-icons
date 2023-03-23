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
    <title>196.问券单选选中</title>
    <g
      id="196.问券单选选中"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="问券单选选中"
        transform="translate(4.000000, 4.000000)"
        fill="#000000"
        fill-rule="nonzero"
      >
        <path
          d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M12,7.19999999 C9.34903321,7.19999999 7.19999999,9.34903321 7.19999999,12 C7.19999999,14.6509668 9.34903321,16.8 12,16.8 C14.6509668,16.8 16.8,14.6509668 16.8,12 C16.8,9.34903321 14.6509668,7.19999999 12,7.19999999 Z"
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
  name: 'RadioChecked',
  props: {
    size: Number,
    color: String,
  },
});
</script>
