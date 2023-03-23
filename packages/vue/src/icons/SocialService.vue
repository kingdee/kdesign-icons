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
    <title>1012.排序向上</title>
    <g
      id="1012.排序向上"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="编组"
        transform="translate(1.000000, 1.000000)"
        fill="#000000"
        fill-rule="nonzero"
      >
        <path
          d="M14,26.25 C20.7654882,26.25 26.25,20.7654882 26.25,14 C26.25,7.23451181 20.7654882,1.75 14,1.75 C7.23451181,1.75 1.75,7.23451181 1.75,14 C1.75,20.7654882 7.23451181,26.25 14,26.25 Z M13.125,10.6505 L13.125,21 L14.875,21 L14.875,10.6505 L17.71175,13.48725 L18.949,12.25 L15.239,8.53825 L14,7.301 L9.051,12.25 L10.28825,13.48725 L13.125,10.6505 Z M14,28 C6.2680135,28 0,21.7319865 0,14 C0,6.2680135 6.2680135,0 14,0 C21.7319865,0 28,6.2680135 28,14 C28,21.7319865 21.7319865,28 14,28 Z"
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
  name: 'SocialService',
  props: {
    size: Number,
    color: String,
  },
});
</script>
