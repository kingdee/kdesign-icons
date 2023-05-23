<template>
  <icon-wrapper :spin="spin" :rotate="rotate">
    <svg
      :width="size"
      :height="size"
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g
        id="1231-已完成"
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
            d="M16.32,8.4 C15.92,8.08000001 15.28,8.08000001 14.88,8.56000001 L10.4,14 L8.24000002,12.16 C7.84000001,11.84 7.20000002,11.92 6.80000002,12.32 C6.40000001,12.8 6.48000002,13.44 6.96,13.84 L10.08,16.48 C10.4,16.8 10.96,16.72 11.2,16.4 L16.48,10 C16.88,9.52000001 16.8,8.80000001 16.32,8.4 C16.32,8.47999999 16.32,8.4 16.32,8.4 L16.32,8.4 Z M11.68,0 C5.20000001,0 5.82867088e-16,5.35999999 5.82867088e-16,12 C5.82867088e-16,18.64 5.20000001,24 11.68,24 C18.08,24 23.36,18.64 23.36,12 C23.28,5.35999999 18.08,0 11.68,0 Z M11.68,21.92 C6.32000002,21.92 2.08000001,17.44 2.08000001,12 C2.08000001,6.55999999 6.32000002,2.08000001 11.68,2.08000001 C16.96,2.08000001 21.28,6.48 21.28,12 C21.28,17.52 16.96,21.92 11.68,21.92 Z"
            id="形状"
            :fill="color"
          ></path>
        </g>
      </g>
    </svg>
  </icon-wrapper>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import iconWrapper from '../components/base.vue';
export default defineComponent({
  name: 'Completed',
  components: { iconWrapper },
  props: {
    size: {
      type: String || Number,
      default: '1em',
    },
    color: {
      type: String,
      default: 'currentColor',
    },
    rotate: Number,
    spin: Boolean,
  },
});
</script>
