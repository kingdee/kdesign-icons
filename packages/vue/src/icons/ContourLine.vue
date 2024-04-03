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
        id="等高线"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="视觉修正模版" transform="translate(-2.000000, -0.500000)"></g>
        <g
          id="编组"
          transform="translate(1.000000, 1.000000)"
          fill="#333333"
          fill-rule="nonzero"
        >
          <path
            d="M15,0 C23.25,0 30,6.75 30,15 C30,23.25 23.25,30 15,30 C6.75,30 0,23.25 0,15 C0,11.8125 3.9375,9.9375 5.625,7.5 C8.25,3.75 9.9375,0 15,0 Z M15,1.875 C11.8125,1.875 10.5,3.5625 8.25,6.9375 L7.125,8.625 C6.375,9.5625 5.4375,10.5 4.5,11.25 C3.1875,12.5625 1.875,13.6875 1.875,15 C1.875,22.3125 7.6875,28.125 15,28.125 C22.3125,28.125 28.125,22.3125 28.125,15 C28.125,7.6875 22.3125,1.875 15,1.875 Z M16,7 C21.04,7 25,10.96 25,16 C25,21.04 21.04,25 16,25 C10.96,25 7,21.04 7,16 C7,14.02 9.34,12.94 10.42,11.5 C12.04,9.16 12.94,7 16,7 Z M16,8.8 C14.38,8.8 13.84,9.52 12.58,11.5 C12.4,11.86 12.04,12.22 11.86,12.4 C11.5,13.12 10.78,13.66 10.24,14.2 C9.52,14.92 8.8,15.46 8.8,16 C8.8,19.96 12.04,23.2 16,23.2 C19.96,23.2 23.2,19.96 23.2,16 C23.2,12.04 19.96,8.8 16,8.8 Z M16,12 C18.2,12 20,13.8 20,16 C20,18.2 18.2,20 16,20 C13.8,20 12,18.2 12,16 C12,15.2 13,14.6 13.6,14 C14.2,13 14.6,12 16,12 Z M16,14 C15.8,14 15.6,14.4 15.6,14.8 C15.4,14.8 15.4,15 15.2,15.2 L14,16.4 C14.2,17.2 15,18 16,18 C17.2,18 18,17.2 18,16 C18,14.8 17.2,14 16,14 Z"
            id="形状结合"
            :fill="fill"
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
  name: 'ContourLine',
  components: { iconWrapper },
  props: {
    size: {
      type: String || Number,
      default: '1em',
    },
    fill: {
      type: String,
      default: 'currentColor',
    },
    rotate: Number,
    spin: Boolean,
  },
});
</script>
