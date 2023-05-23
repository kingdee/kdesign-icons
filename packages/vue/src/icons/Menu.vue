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
        id="1251-菜单"
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
            d="M24,17.1428572 L24,18.8571429 L5.14285715,18.8571429 L5.14285715,17.1428572 L24,17.1428572 Z M1.71428573,17.1428572 L1.71428573,18.8571429 L0,18.8571429 L0,17.1428572 L1.71428573,17.1428572 Z M24,8.57142858 L24,10.2857143 L5.14285715,10.2857143 L5.14285715,8.57142858 L24,8.57142858 Z M1.71428573,8.57142858 L1.71428573,10.2857143 L0,10.2857143 L0,8.57142858 L1.71428573,8.57142858 Z M24,0 L24,1.71428573 L5.14285715,1.71428573 L5.14285715,0 L24,0 Z M1.71428573,0 L1.71428573,1.71428573 L0,1.71428573 L0,0 L1.71428573,0 Z"
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
  name: 'Menu',
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
