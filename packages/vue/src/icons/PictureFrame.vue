<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <title>1213-画框</title>
    <g
      id="1213-画框"
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
          d="M3,1.5 C2.17157288,1.5 1.5,2.17157288 1.5,3 L1.5,21 C1.5,21.8284271 2.17157288,22.5 3,22.5 L21,22.5 C21.8284271,22.5 22.5,21.8284271 22.5,21 L22.5,3 C22.5,2.17157288 21.8284271,1.5 21,1.5 L3,1.5 Z M3,-2.39808173e-16 L21,-2.39808173e-16 C21.7956495,-2.39808173e-16 22.5587112,0.316070522 23.1213203,0.878679658 C23.6839295,1.44128879 24,2.20435054 24,3 L24,21 C24,21.7956495 23.6839295,22.5587112 23.1213203,23.1213203 C22.5587112,23.6839295 21.7956495,24 21,24 L3,24 C2.20435054,24 1.44128879,23.6839295 0.878679658,23.1213203 C0.316070522,22.5587112 4.79616347e-16,21.7956495 4.79616347e-16,21 L4.79616347e-16,3 C4.79616347e-16,1.34314575 1.34314575,-2.39808173e-16 3,-2.39808173e-16 Z"
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
  name: 'PictureFrame',
  props: {
    size: Number,
    color: String,
  },
});
</script>
