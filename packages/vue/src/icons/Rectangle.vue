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
        id="1188-矩形"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="编组"
          transform="translate(4.000000, 7.000000)"
          fill="#000000"
          fill-rule="nonzero"
        >
          <path
            d="M22.2857143,0 L1.71428571,0 C0.767511854,0 0,0.767511854 0,1.71428571 L0,17.1428571 C0,18.089631 0.767511854,18.8571429 1.71428571,18.8571429 L22.2857143,18.8571429 C23.2324881,18.8571429 24,18.089631 24,17.1428571 L24,1.71428571 C24,0.767511854 23.2324881,0 22.2857143,0 Z M1.71428571,1.71428571 L22.2857143,1.71428571 L22.2857143,17.1428571 L1.71428571,17.1428571 L1.71428571,1.71428571 Z"
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
  name: 'Rectangle',
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
